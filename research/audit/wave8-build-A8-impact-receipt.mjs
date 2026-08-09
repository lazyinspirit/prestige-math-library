#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const templatePath = 'research/audit/wave8-A8-impact-template.json';
const reviewPath = 'research/audit/wave8-A8-impact-review.json';
const outputPath = 'research/audit/wave8-A8-impact-audit.json';

const template = JSON.parse(readFileSync(templatePath, 'utf8'));
const review = JSON.parse(readFileSync(reviewPath, 'utf8'));

const same = (left, right) =>
  left.length === right.length && left.every((value, index) => value === right[index]);

if (!same(template.changed_interfaces, review.changed_interfaces)) {
  throw new Error('A8 changed-interface set differs from Alpha review');
}
if (!same(template.required_review, review.required_review)) {
  throw new Error('A8 required-consumer set differs from Alpha review');
}
const dispositions = new Map(review.dispositions.map((row) => [row.id, row]));
for (const id of template.required_review) {
  const row = dispositions.get(id);
  if (!row || row.status !== 'still-licensed' || !row.notes?.trim()) {
    throw new Error(`${id}: missing complete still-licensed disposition`);
  }
}
if (dispositions.size !== template.required_review.length) {
  throw new Error('A8 review has duplicate or extra disposition ids');
}

const receipt = {
  version: 1,
  reviewer: review.reviewer,
  source: template.source,
  changed_interfaces: template.changed_interfaces,
  required_review: template.required_review,
  dispositions: template.required_review.map((id) => dispositions.get(id)),
};

writeFileSync(outputPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote ${outputPath}: ${receipt.changed_interfaces.length} interface, ${receipt.dispositions.length} dispositions`);

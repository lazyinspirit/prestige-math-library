# Step 6a reader task

Open `research/<run>-batch-<i>.pages.json`, every listed item, every assigned
page file, and every cited dependency needed to verify the mathematics. Audit
all A/B page pairs; a batch may contain more than one pair.

Write the evidence report to `<output>`. It must list:

- every edited item or page and why it changed;
- every confirmed defect, including repaired defects;
- exact item and page counts opened, plus any blocker;
- a verdict for every assigned page.

Return `research/<run>-reader-findings-<i>.json` under
`briefs/schemas/reader-findings.json`. Put only findings you could not edit in
that JSON. A repaired defect belongs only in the markdown and the disk diff.
Return an empty `findings` array when nothing remains uneditable.

Never edit another batch, `research/plan-spec.json`, or published content.
Never delete an in-flight item; leave it present and report a proposed
withdrawal for Alpha. Never judge or stamp.

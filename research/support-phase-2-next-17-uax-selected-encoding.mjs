// Research-only exact pure-membership choices for D, AC, GCH and E_U.
// Every macro below returns an AST in the existing five-constructor language.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { axiomCertificate } from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import { boundedFactories } from './support-phase-2-next-17-internal-finite-word-predicate.mjs';
import { iterativeFormulaCode, semanticFormulas } from './support-phase-2-next-17-internal-tab-decode.mjs';
import { translateFormulaEndpoint } from './support-phase-2-next-17-uax-proof-obligation-checker.mjs';

const read = name => readFileSync(new URL(name, import.meta.url), 'utf8');
const fence = name => read(name).match(/```javascript\n([\s\S]*?)\n```/)[1];
const old = fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P = new Function(old.slice(0, old.indexOf('let cases=0;')) + '\nreturn {pack,num,word};')();
const N = new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md')
  + '\nreturn makeNumericalLogicalDecoder();')();
const kernel = read('./support-phase-2-next-17-zf-axiom-operation-kernel.mjs');
const F = new Function('assert', kernel.slice(kernel.indexOf('const nat ='), kernel.indexOf('const fixed ='))
  + '\nreturn {eq,mem,neg,and,ex,imp,all,iff,or,fv,sub,same,variables};')(assert);
const { eq, mem, neg, and, ex, imp, all, iff, or, fv, sub, same, variables } = F;

let cursor = 1000n;
const fresh = () => cursor++;
const some = (set, body) => { const x = fresh(); return ex(x, and(mem(x, set), body(x))); };
const every = (set, body) => { const x = fresh(); return all(x, imp(mem(x, set), body(x))); };
const conjunction = xs => xs.reduceRight((rest, x) => rest === null ? x : and(x, rest), null);
const disjunction = xs => xs.reduceRight((rest, x) => rest === null ? x : or(x, rest), null);
const nonempty = set => some(set, x => eq(x, x));

// Bounded set operations use a disjoint binder range.
const B = boundedFactories(20000n);
const empty = x => B.empty(x);
const subset = (x, y) => B.every(x, z => mem(z, y));
const successor = (x, y) => B.successor(x, y);
const ordinal = x => B.ordinal(x);
const finiteOrdinal = x => B.finiteOrdinal(x);
const ordered = (x, y, p) => B.ordered(x, y, p);

function replaceFree(formula, replacements) {
  let result = formula;
  for (const [from, to] of replacements) result = sub(result, from, to);
  return result;
}

const value = (graph, input, output) => some(graph, pair => ordered(input, output, pair));

function uniqueValue(graph, input, output) {
  const other = fresh();
  return and(value(graph, input, output), all(other, imp(value(graph, input, other), eq(other, output))));
}

function graphOn(graph, domain) {
  return and(
    every(graph, pair => some(domain, input => {
      const output = fresh(); return ex(output, ordered(input, output, pair));
    })),
    every(domain, input => {
      const output = fresh(); return ex(output, uniqueValue(graph, input, output));
    }),
  );
}

// Decode(f,A,n,s,y): f is a canonical formula word, s is its length-n
// parameter graph, and y is the subset of A it defines with v_0 as element.
function decodeDefinition(formulaWord, carrier, arity, parameters, decoded) {
  const decode = semanticFormulas().decodeWord;
  return replaceFree(decode, [[0n, formulaWord], [20n, carrier], [25n, arity],
    [26n, parameters], [27n, decoded]]);
}

function singletonEmpty(set) {
  const e = fresh();
  return ex(e, conjunction([empty(e), mem(e, set), every(set, x => eq(x, e))]));
}

function defStep(carrier, output) {
  const member = fresh(), formulaWord = fresh(), arity = fresh(), parameters = fresh();
  const decodedFamily = all(member, iff(mem(member, output),
    ex(formulaWord, ex(arity, ex(parameters,
      decodeDefinition(formulaWord, carrier, arity, parameters, member))))));
  return and(
    imp(empty(carrier), singletonEmpty(output)),
    imp(nonempty(carrier), decodedFamily),
  );
}

function limitOrdinal(index) {
  return conjunction([ordinal(index), nonempty(index), every(index, x => some(index, y => successor(x, y)))]);
}

function unionOfEarlier(history, index, output) {
  const element = fresh();
  return all(element, iff(mem(element, output), some(index, earlier => {
    const prior = fresh();
    return ex(prior, and(value(history, earlier, prior), mem(element, prior)));
  })));
}

function hierarchyHistory(history, domain) {
  const recurrence = every(domain, index => {
    const output = fresh();
    const successorCase = some(index, previous => {
      const prior = fresh();
      return and(successor(previous, index), ex(prior,
        and(value(history, previous, prior), defStep(prior, output))));
    });
    return ex(output, conjunction([
      uniqueValue(history, index, output),
      disjunction([
        and(empty(index), empty(output)),
        successorCase,
        and(limitOrdinal(index), unionOfEarlier(history, index, output)),
      ]),
    ]));
  });
  return and(graphOn(history, domain), recurrence);
}

export function constructibilityFormula(variable = 0n) {
  const alpha = fresh(), beta = fresh(), domain = fresh(), history = fresh(), level = fresh();
  const atLevel = ex(level, and(value(history, beta, level), mem(variable, level)));
  const withHistory = ex(history, and(hierarchyHistory(history, domain), atLevel));
  const withDomain = ex(domain, and(successor(beta, domain), withHistory));
  const withBeta = ex(beta, and(successor(alpha, beta), withDomain));
  return ex(alpha, and(ordinal(alpha), withBeta));
}

const relates = (relation, x, y) => some(relation, pair => ordered(x, y, pair));

function relationOn(relation, field) {
  return every(relation, pair => some(field, x => some(field, y => ordered(x, y, pair))));
}

function wellOrders(relation, field) {
  const strictOrder = conjunction([
    relationOn(relation, field),
    every(field, x => neg(relates(relation, x, x))),
    every(field, x => every(field, y => every(field, z =>
      imp(and(relates(relation, x, y), relates(relation, y, z)), relates(relation, x, z))))),
    every(field, x => every(field, y => imp(neg(eq(x, y)),
      or(relates(relation, x, y), relates(relation, y, x))))),
  ]);
  const candidate = fresh();
  const leastElements = all(candidate, imp(and(subset(candidate, field), nonempty(candidate)),
    some(candidate, least => every(candidate, y => or(eq(y, least), relates(relation, least, y))))));
  return and(strictOrder, leastElements);
}

export function choiceSentence() {
  const field = fresh(), relation = fresh();
  return all(field, ex(relation, wellOrders(relation, field)));
}

function mapsInto(graph, domain, codomain) {
  return conjunction([
    every(graph, pair => some(domain, x => some(codomain, y => ordered(x, y, pair)))),
    every(domain, x => {
      const y = fresh(); return ex(y, and(mem(y, codomain), uniqueValue(graph, x, y)));
    }),
  ]);
}

function injective(graph, domain, codomain) {
  return and(mapsInto(graph, domain, codomain), every(domain, x => every(domain, y =>
    imp(some(codomain, z => and(value(graph, x, z), value(graph, y, z))), eq(x, y)))));
}

function bijective(graph, domain, codomain) {
  return and(injective(graph, domain, codomain), every(codomain, y => some(domain, x => value(graph, x, y))));
}

function equinumerous(left, right) {
  const graph = fresh(); return ex(graph, bijective(graph, left, right));
}

function cardinal(value_) {
  return and(ordinal(value_), every(value_, smaller => neg(equinumerous(smaller, value_))));
}

function infiniteCardinal(value_) {
  return and(cardinal(value_), neg(finiteOrdinal(value_)));
}

function successorCardinal(lower, upper) {
  const between = fresh();
  return conjunction([cardinal(upper), mem(lower, upper), all(between,
    imp(and(cardinal(between), and(mem(lower, between), mem(between, upper))), neg(eq(between, between))))]);
}

function powerSetOf(power, base) {
  const candidate = fresh();
  return all(candidate, iff(mem(candidate, power), subset(candidate, base)));
}

export function gchSentence() {
  const cardinal_ = fresh(), next = fresh(), power = fresh();
  return all(cardinal_, imp(infiniteCardinal(cardinal_), ex(next, ex(power, conjunction([
    successorCardinal(cardinal_, next), powerSetOf(power, cardinal_), equinumerous(power, next),
  ])))));
}

let cachedSelection = null;
export function selectedEncoding() {
  if (cachedSelection !== null) return cachedSelection;
  const domain = constructibilityFormula(0n), ac = choiceSentence(), gch = gchSentence();
  const domainCode = iterativeFormulaCode(domain), acCode = iterativeFormulaCode(ac), gchCode = iterativeFormulaCode(gch);
  cachedSelection = { domain, ac, gch, domainCode, acCode, gchCode };
  return cachedSelection;
}

export function uAxiomCertificate(formulaCode, certificate) {
  try {
    if (typeof formulaCode !== 'bigint' || formulaCode < 0n) return false;
    if (axiomCertificate(formulaCode, certificate)) return true;
    const fields = N.list(certificate), selected = selectedEncoding();
    return fields.length === 1 && ((fields[0] === 3n && formulaCode === selected.acCode)
      || (fields[0] === 4n && formulaCode === selected.gchCode));
  } catch { return false; }
}

export function selectedAxiomObligation(formulaCode, certificate) {
  if (!uAxiomCertificate(formulaCode, certificate)) return null;
  const selected = selectedEncoding();
  return translateFormulaEndpoint(selected.domainCode, formulaCode);
}

// A compact, exact endpoint program for cases where eagerly duplicating the
// 46k-node D formula at every quantifier is unsuitable for a JS BigInt. The
// descriptor denotes the same output as translateFormulaEndpoint, including
// its deterministic alpha-normalization; it is not an alternative syntax.
export function selectedAxiomEndpointDescriptor(formulaCode, certificate) {
  if (!uAxiomCertificate(formulaCode, certificate)) return null;
  const selected = selectedEncoding(), source = N.parse(formulaCode);
  if (source === null) return null;
  const atom = eq(0n, 0n), negOverhead = P.word(neg(atom)).length - P.word(atom).length;
  const andOverhead = P.word(and(atom, atom)).length - 2 * P.word(atom).length;
  const exOverhead = P.word(ex(0n, atom)).length - P.word(atom).length;
  const domainTokens = N.list(selected.domainCode).length;
  let quantifiers = 0, rawTokens = 0;
  const stack = [[source, false]];
  while (stack.length) {
    const [formula, visited] = stack.pop();
    if (!visited && formula[0] === 'neg') { stack.push([formula, true], [formula[1], false]); continue; }
    if (!visited && formula[0] === 'and') {
      stack.push([formula, true], [formula[2], false], [formula[1], false]); continue;
    }
    if (!visited && formula[0] === 'exists') {
      quantifiers++; stack.push([formula, true], [formula[2], false]); continue;
    }
    if (formula[0] === 'eq' || formula[0] === 'rel') rawTokens += P.word(formula).length;
    else if (formula[0] === 'neg') rawTokens += negOverhead;
    else if (formula[0] === 'and') rawTokens += andOverhead;
    else rawTokens += exOverhead + andOverhead + domainTokens;
  }
  const highwater = [...variables(selected.domain), ...variables(source)].reduce(
    (maximum, x) => x > maximum ? x : maximum, 0n) + 1n;
  return { version: 1, algorithm: 'raw-relativization-v1', domainCode: selected.domainCode,
    sourceCode: formulaCode, alphaBinderStart: highwater, quantifiers,
    exactOutputTokenCount: rawTokens };
}

function formulaStats(root) {
  let nodes = 0, depth = 0, stack = [[root, 1]];
  while (stack.length) {
    const [f, d] = stack.pop(); nodes++; depth = Math.max(depth, d);
    if (f[0] === 'neg') stack.push([f[1], d + 1]);
    else if (f[0] === 'and') stack.push([f[1], d + 1], [f[2], d + 1]);
    else if (f[0] === 'exists') stack.push([f[2], d + 1]);
  }
  return { nodes, depth, variables: variables(root).size };
}

function tests() {
  const selected = selectedEncoding();
  for (const [formula, code] of [[selected.domain, selected.domainCode], [selected.ac, selected.acCode],
    [selected.gch, selected.gchCode]]) {
    assert.deepEqual(N.parse(code), formula);
  }
  assert.deepEqual([...fv(selected.domain)], [0n]);
  assert.equal(fv(selected.ac).size, 0); assert.equal(fv(selected.gch).size, 0);
  assert(uAxiomCertificate(selected.acCode, P.pack([3n])));
  assert(uAxiomCertificate(selected.gchCode, P.pack([4n])));
  assert(!uAxiomCertificate(selected.gchCode, P.pack([3n])));
  assert(!uAxiomCertificate(selected.acCode + 1n, P.pack([3n])));
  const descriptors = [selected.acCode, selected.gchCode].map((code, i) =>
    selectedAxiomEndpointDescriptor(code, P.pack([BigInt(i + 3)])));
  assert(descriptors.every(x => x !== null && x.quantifiers > 0 && x.exactOutputTokenCount > 0));
  console.log(JSON.stringify({
    constructibility: { codeBits: selected.domainCode.toString(2).length, ...formulaStats(selected.domain) },
    choice: { codeBits: selected.acCode.toString(2).length, ...formulaStats(selected.ac) },
    gch: { codeBits: selected.gchCode.toString(2).length, ...formulaStats(selected.gch) },
    exactUCertificates: 2,
    endpointDescriptors: descriptors.map(x => ({ quantifiers: x.quantifiers,
      exactOutputTokenCount: x.exactOutputTokenCount })),
    adversarialRejections: 2,
  }, null, 2));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) tests();

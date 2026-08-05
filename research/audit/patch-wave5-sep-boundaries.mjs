// One-shot patch: anchor the boundary evidence that tools/proof-contract.mjs
// rejected as unanchored. Each rewrite names the item's own Statement or a
// numbered step, which is what the gate asks for; no disposition changes.
import fs from 'fs';

const FILE = 'research/audit/gen-wave5-sep-contracts.mjs';
const PAIRS = [
  ['the Remark states that the converse is left open and no reversal is asserted',
   'the statement claims one direction only, and the Remark records that the converse is left open'],
  ['the Remark records that neither converse is proved or asserted',
   'the statement makes three one-directional claims, and the Remark records that neither converse is proved or asserted'],
  ['the Remark records that the converse is not proved and not asserted',
   'the statement is a one-directional implication, and the Remark records that the converse is not proved and not asserted'],
  ['the Remark records the failure direction concretely',
   'the statement assumes separatedness, and the Remark records the failure direction concretely'],
  ['the Remark records what is deliberately not claimed, namely normality',
   'the statement lists four one-directional claims, and the Remark records what is deliberately not claimed, namely normality'],
  ['the first Remark records that only one non-separable pair is claimed, and that no regularity at any other pair is asserted',
   'the statement refutes regularity through one pair, and the first Remark records that no regularity at any other pair is asserted'],
  ['the Remark records that the converse implication is true and is proved elsewhere on the page, so the refutation is of one direction only',
   'the statement refutes one direction, and the Remark records that the converse implication is true and is proved elsewhere on the page'],
  ['the Remark records what does survive, that normality together with $T_1$ gives the whole descending chain, so only the stated direction is refuted',
   'the statement refutes one direction, and the Remark records what does survive, that normality together with $T_1$ gives the whole descending chain'],
  ['the Remark records that regularity does not imply Hausdorff either, with the indiscrete witness, so neither direction holds',
   'the statement refutes one direction, and the Remark records that regularity does not imply Hausdorff either, with the indiscrete witness, so neither direction holds'],
  ['the Remark records that the converse holds, in a Hausdorff space limits are unique, so only the stated direction is refuted',
   'the statement refutes one direction, and the Remark records that the converse holds, in a Hausdorff space limits are unique'],
  ['the first Remark records the direction that is left open here and names the later item that refutes it',
   'the statement makes four one-directional claims, and the first Remark records the direction left open here, naming the later item that refutes it'],
  ['the Remarks record what is not claimed, in particular that $\\overline{\\{p\\}} = X$ makes the particular point dense rather than separating',
   'the statement makes four one-directional claims, and the Remarks record what is not claimed, in particular that $\\overline{\\{p\\}} = X$ makes the particular point dense rather than separating'],
  ['the second Remark records the degenerate case: on a finite set the cofinite topology is discrete and satisfies every axiom, so the infinitude hypothesis is necessary',
   'the statement carries the infinitude hypothesis, and the second Remark records the degenerate case: on a finite set the cofinite topology is discrete and satisfies every axiom'],
  ['the third Remark records the direction that is true, that every $T_1$ topology on the set contains this one',
   'the statement makes two one-directional claims, and the third Remark records the direction that is true, that every $T_1$ topology on the set contains this one'],
  ['the third Remark records the degenerate case: on an at most countable set the cocountable topology is discrete, so the uncountability of $\\mathbb{R}$ is doing real work',
   'the statement fixes the uncountable carrier $\\mathbb{R}$, and the third Remark records the degenerate case: on an at most countable set the cocountable topology is discrete'],
  ['the first Remark records the direction that fails to carry information, uniqueness of sequential limits, which is why the space refutes the implication on the main page',
   'the statement makes three one-directional claims, and the first Remark records the direction that fails to carry information, uniqueness of sequential limits'],
  ['the second Remark records the reading these two spaces refute: no unnumbered adjective implies any separation of points',
   'the statement is a property list for two fixed spaces, and the second Remark records the reading they refute: no unnumbered adjective implies any separation of points'],
  ['the first Remark records the degenerate range: every ordinal at most $\\omega$ carries the discrete topology, so $\\omega + 1$ is the first ordinal space with a non-isolated point',
   'the statement works the two smallest interesting ordinal spaces, and the first Remark records the degenerate range: every ordinal at most $\\omega$ carries the discrete topology'],
  ['no reversal is claimed, and none holds: a subnet may converge where the net does not, which is exactly the content of the cluster-point theorem on the same page',
   'the statement claims preservation only, and no reversal holds: a subnet may converge where the net does not, which is the content of the cluster-point theorem on the same page'],
  ['the same two steps are read in the other direction, [A1] being an equivalence between eventual membership and filter membership',
   'steps 1.1 and 2.1 are read in the other direction as well, [A1] being an equivalence between eventual membership and filter membership'],
  ['the argument covers $S = \\varnothing$ and $S = Y$: the preimages are $\\varnothing$ and $X$, and [A1] applies to them as to any subset',
   'step 1.1 covers $S = \\varnothing$ and $S = Y$: the preimages are $\\varnothing$ and $X$, and [A1] applies to them as to any subset'],
  ['no converse is claimed: an image net can be universal without the original being so, and nothing above asserts otherwise',
   'the statement claims one direction only: an image net can be universal without the original being so, and nothing above asserts otherwise'],
  ['no converse is at issue: every net trivially has subnets, and the content is that one of them can be made universal',
   'the statement is an existence claim: every net trivially has subnets, and its content is that one of them can be made universal'],
  ['no converse is claimed here; the companion remark records that the relative strength of the two hypotheses is not asserted',
   'the statement claims compactness of the product only, and the companion remark records that the relative strength of the two hypotheses is not asserted'],
  ['neither converse is asserted, and the companion page exhibits both failures',
   'the statement asserts two implications and no converse, and the companion page exhibits both failures'],
  ['the converse direction is true and is not at issue: every subsequence is a subnet, since a strictly increasing index map is eventually cofinal by [A2]',
   'the statement refutes one direction; the converse is true and not at issue, every subsequence being a subnet because a strictly increasing index map is eventually cofinal by [A2]'],
  ['the index set is nonempty exactly because every neighbourhood of $p$ meets $A$ by [L1]; for $A = \\varnothing$ no such $p$ exists',
   'step 1.1 builds a nonempty index set exactly because every neighbourhood of $p$ meets $A$ by [L1]; for $A = \\varnothing$ no such $p$ exists'],
  ['the reverse reading, that such a net forces $p \\in \\overline{A}$, is the cited closure characterisation and is not restated here',
   'the statement is a construction, and the reverse reading, that such a net forces $p \\in \\overline{A}$, is the cited closure characterisation rather than a claim made here'],
  ['the empty index set gives the value $0$, which is the base of the net, and $I = \\varnothing$ makes the net constant at $0$',
   'step 1.1 starts the net at $\\varnothing$, whose sum is $0$, and for $I = \\varnothing$ the net is constant at $0$'],
  ['the singletons of $I$ give the values $a_i$, the first nonconstant stage of the net',
   'step 1.2 reads the singleton stages, where the net value is $a_i$, the first nonconstant values'],
  ['the equivalence with absolute convergence is the theorem that follows this item, not a claim made here',
   'the statement is a construction and a definition of summability; the equivalence with absolute convergence is the theorem that follows this item'],
  ['the case $S = \\varnothing$ is covered: every $a_i$ is zero, the net is constant at $0$ and the finite enumeration is empty, with sum $0$',
   'the statement covers $S = \\varnothing$ through its finite-enumeration clause: every $a_i$ is then zero, the net is constant at $0$ and the empty sum is $0$'],
  ['the reverse reading is refuted rather than asserted: the sequence has a convergent subnet and no convergent subsequence, so subnets and subsequences are not interchangeable',
   'the statement is a construction, and the reverse reading is refuted rather than asserted: the sequence has a convergent subnet and no convergent subsequence'],
  ['the space is the witness that the first countability implication does not reverse; nothing here claims the reverse',
   'the statement lists two one-directional properties, and the space is the witness that the first-countability implication does not reverse'],
  ['no choice principle is used: every threshold is a maximum and every listing is by least elements, using [L2]',
   'steps 1.1 and 1.2 use no choice principle: every threshold is a maximum and every listing is by least elements, using [L2]'],
  ['the space is the witness that sequential does not imply Frechet-Urysohn; the reverse implication is the theorem on the main page and is not restated here',
   'the statement lists two one-directional properties, and the space is the witness that sequential does not imply Frechet-Urysohn; the reverse implication is the theorem on the main page'],
];

let text = fs.readFileSync(FILE, 'utf8');
const problems = [];
for (const [from, to] of PAIRS) {
  const count = text.split(from).length - 1;
  if (count !== 1) { problems.push(`${count} occurrence(s): ${from.slice(0, 60)}`); continue; }
  text = text.replace(from, to);
}
fs.writeFileSync(FILE, text);
console.log(problems.length ? `PROBLEMS:\n${problems.join('\n')}` : `patched ${PAIRS.length} boundary evidences`);

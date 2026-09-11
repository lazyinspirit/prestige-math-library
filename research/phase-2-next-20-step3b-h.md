# Step 3b group h — batches 13 and 14

Dispatch step3b-h-10526659f3d887e0. Group handoff: 71 of 74 assigned items are fully authored and locally checked, all six A/B pages are written, and three preserved theorem targets remain escalated. This report is not an independent review or a completion certificate. Read CLAUDE.md, README.md, SCHEMA.md, current assigned manifests, design sections SET-11/13/23, owner authoring direction and current owner scope decisions. Owner scope approval preserves every claim; it does not resolve mathematics. Independent records and published content remain untouched.

Inherited source-retrieval histories are exhausted; retain them without resetting attempts or claiming stamps. Batch 13 finite satisfaction, HOD and Boolean recursive semantics require actual proofs. Batch 14 preparation and PMEA lack essential forcing suppliers; Laver anticipation, infinitary Henkin and reflection arguments require detailed verification. Tree-page dependency and critical-point rank-bound declaration are already repaired in the current manifest/design. Same-group forcing input remains open, since names alone cannot supply forcing, lifting, iteration or PMEA transfer. No new published defect has yet been established in this author pass.

The canonical plan remains for serial Step 4. Group-owned contracts cover the full preserved inventory; missing entries honestly report outstanding authoring.

## Checkpoint — lem-finite-tuple-satisfaction-is-absolute

Claim/conventions: Work in ZF. Let $N$ be a transitive set model of ZF, or a definable transitive class model interpreted formula by formula, and let $\varnothing\ne A\in N$. For every coded membership formula $\phi$ and finite tuple $a$ from $A$ assigning all its free variables, satisfaction of $\phi[a]$ in $(A,\in)$ computed in $N$ agrees with external satisfaction. This does not assert that $(A^\omega)^N=A^\omega$.

Examined direct dependencies: thm-set-structure-satisfaction-recursion, lem-satisfaction-coincidence, thm-ordinals-and-omega-are-absolute-in-transitive-models, thm-structural-recursion-on-set-coded-syntax.

Evidence: ZF; nonempty set A in a transitive ZF model. Finite tuples and syntax agree by transitivity and actual omega; constructor comparison transfers both witness directions without assuming agreement of infinite assignment spaces. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 1; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-finite-tuple-satisfaction-is-absolute.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

First-item numbering repair adopted as phases 1.1–4.1 in both text and contract; all three explicit checks rerun and passed. `lem-finite-tuple-satisfaction-is-absolute` acceptance recorded by CLI. Next: Def definition and absoluteness.

## Checkpoint — def-definable-subsets-of-a-membership-structure

Claim/conventions: Work in ZF. If $A\ne\varnothing$, define

$$\operatorname{Def}(A)=\{\{x\in A:(A,\in)\models\phi(x,a_1,\ldots,a_n)\}:n<\omega,\ a\in A^n,\ \operatorname{FV}(\phi)\subseteq\{v_0,\ldots,v_n\}\}.$$

Here $x$ is assigned to $v_0$ and $a_i$ to $v_i$; unused variables are allowed. Use the finite-tuple satisfaction convention of [[lem-finite-tuple-satisfaction-is-absolute]]. Formula codes and finite tuples form a set. Separation produces the uniquely specified subset for each pair of code and tuple, and Replacement collects their values; hence $\operatorname{Def}(A)$ is a set contained in $\mathcal P(A)$, uniformly definable from $A$.

Set $\operatorname{Def}(\varnothing)=\{\varnothing\}$ separately. This avoids treating the empty carrier as a first-order structure. Empty parameter tuples give parameter-free definitions. Parameters need not be distinct. Only satisfaction for a set structure is used; no truth predicate for the universe is asserted.

Examined direct dependencies: lem-finite-tuple-satisfaction-is-absolute.

Evidence: ZF. Set satisfaction supplies unique subsets; Separation and Replacement make Def a uniformly defined set operation, with a separate empty-carrier clause. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-definable-subsets-of-a-membership-structure.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-def-operation-is-absolute

Claim/conventions: In ZF, if $N$ is a transitive ZF model and $A\in N$, then $\operatorname{Def}^N(A)=\operatorname{Def}(A)$. Every subset externally definable over $(A,\in)$ with parameters from $A$ therefore belongs to $N$. This conclusion concerns definable subsets, not all subsets.

Examined direct dependencies: def-definable-subsets-of-a-membership-structure, lem-finite-tuple-satisfaction-is-absolute.

Evidence: ZF; transitive ZF model N containing A. Internal Separation and finite-tuple absoluteness identify each subset in both directions; Replacement assembles the identical Def set. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 1; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-def-operation-is-absolute.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

`lem-def-operation-is-absolute`: added step 1.1 as the input fixing the nonempty case in step 2.1. Precheck and strict contract rerun successfully; acceptance recorded. Next: hierarchy definition.

## Checkpoint — def-constructible-hierarchy-and-constructible-rank

Claim/conventions: In ZF define

$$L_0=\varnothing,\qquad L_{\alpha+1}=\operatorname{Def}(L_\alpha),\qquad L_\lambda=\bigcup_{\beta<\lambda}L_\beta\quad(\lambda\text{ a nonzero limit}).$$

The operation Def is [[def-definable-subsets-of-a-membership-structure]]. For each ordinal $\theta$, apply [[thm-transfinite-recursion]] on $\theta+1$: an empty history gives the empty set, a successor-length history gives Def of its last value, and a nonzero limit-length history gives the union of its range. Each operation returns a unique set. Uniqueness on the shorter interval proves agreement of any two histories on their overlap. Thus $L_\alpha$ is uniformly definable from $\alpha$, independently of the interval chosen. Replacement supplies the set of earlier levels at a limit. No choice is used.

Write $x\in L$ for $\exists\alpha\in\operatorname{Ord}\ (x\in L_\alpha)$. This defines a class, not a set union over all ordinals. For $x\in L$, the first stage containing $x$ is neither zero nor a limit (a member of a union already occurs in a summand). It is uniquely $\alpha+1$. Define the **constructible rank** $\rho_L(x)=\alpha$. This is a partial definable class function with domain $L$.

Examined direct dependencies: def-definable-subsets-of-a-membership-structure, thm-transfinite-recursion.

Evidence: ZF. Recursion on each ordinal interval uses a total uniquely valued rule; overlap uniqueness yields the uniform hierarchy and first-successor-stage rank. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-constructible-hierarchy-and-constructible-rank.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — prop-constructible-levels-transitivity-ordinals-and-rank

Claim/conventions: In ZF every $L_\alpha$ is transitive, and $\alpha\le\beta$ implies $L_\alpha\subseteq L_\beta$. Moreover

$$L_\alpha\subseteq V_\alpha,\qquad L_\alpha\cap\operatorname{Ord}=\alpha,\qquad L_\alpha,\alpha\in L_{\alpha+1}.$$

For $x\in L$, $x\in L_\alpha$ iff $\rho_L(x)<\alpha$. Thus $L$ is transitive and contains all ordinals.

Examined direct dependencies: def-constructible-hierarchy-and-constructible-rank, thm-ordinals-and-omega-are-absolute-in-transitive-models, prop-cumulative-hierarchy-transitivity-and-growth.

Evidence: ZF. Checked transitivity via parameter-defined members, successor power-set bounds, bounded ordinalhood on arbitrary transitive levels, and both least-rank implications. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/prop-constructible-levels-transitivity-ordinals-and-rank.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-finite-reflection-along-constructible-levels

Claim/conventions: In ZF, for each fixed finite family $\Phi$ of membership formulas and ordinal $\alpha$, there is a nonzero limit $\beta>\alpha$ such that, for every $\phi\in\Phi$ and tuple $a$ from $L_\beta$, $(L_\beta,\in)\models\phi[a]$ iff $\phi^L(a)$. This is a scheme for fixed formulas; it does not assume that $L$ satisfies ZF.

Examined direct dependencies: prop-constructible-levels-transitivity-ordinals-and-rank, thm-montague-levy-finite-reflection.

Evidence: ZF; fixed finite formula family. The general-class clause of published reflection is applicable before L models ZF; its full proof was read and its limit-stage and choice-free witness-bound construction checked. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-finite-reflection-along-constructible-levels.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-constructible-universe-basic-axioms

Claim/conventions: In ambient ZF, the class $L$ satisfies Extensionality, Foundation, Empty Set, Pairing, Union and Infinity, each interpreted by relativization to $L$.

Examined direct dependencies: prop-constructible-levels-transitivity-ordinals-and-rank.

Evidence: ZF. Actual Foundation witnesses lie in L by transitivity; pairs and unions are explicitly defined over one level; actual omega supplies Infinity without internal Replacement or Power Set. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-constructible-universe-basic-axioms.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-separation-in-the-constructible-universe

Claim/conventions: In ZF, for each fixed membership formula $\phi(x,p)$ and $a,p_1,\ldots,p_n\in L$, the set $\{x\in a:\phi^L(x,p)\}$ belongs to $L$. Thus every instance of Separation holds in $L$.

Examined direct dependencies: lem-finite-reflection-along-constructible-levels, def-definable-subsets-of-a-membership-structure.

Evidence: ZF; fixed formula, constructible set and finitely many constructible parameters. Reflection on a parameter-containing level makes the desired subset an actual Def subset. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-separation-in-the-constructible-universe.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-internal-power-set-in-the-constructible-universe

Claim/conventions: In ZF, for every $a\in L$, the ambient set $\mathcal P(a)\cap L$ belongs to $L$. It is the power set of $a$ computed internally in $L$.

Examined direct dependencies: thm-separation-in-the-constructible-universe, prop-constructible-levels-transitivity-ordinals-and-rank.

Evidence: ZF; a in L. Ambient Power Set and Replacement bound all constructible subsets; already proved internal Separation then produces the internal power set without circularity. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-internal-power-set-in-the-constructible-universe.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-replacement-in-the-constructible-universe

Claim/conventions: In ZF, fix a formula $\phi(x,y,p)$ and $a,p_1,\ldots,p_n\in L$. If for every $x\in a$ there is exactly one $y\in L$ with $\phi^L(x,y,p)$, its image $\{y\in L:\exists x\in a\ \phi^L(x,y,p)\}$ is an element of $L$. Thus Replacement holds in $L$, as a scheme.

Examined direct dependencies: thm-separation-in-the-constructible-universe, prop-constructible-levels-transitivity-ordinals-and-rank, lem-finite-reflection-along-constructible-levels.

Evidence: ZF; a fixed formula internally functional on a constructible set. Ambient Replacement gives the set image and a rank bound, then internal Separation or reflected Def puts that image in L. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-replacement-in-the-constructible-universe.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-constructibility-is-absolute-and-l-is-minimal

Claim/conventions: In ZF, if $N$ is a transitive model of ZF and $\alpha\in\operatorname{Ord}\cap N$, then $(L_\alpha)^N=L_\alpha$. If $N$ is a definable transitive class inner model containing every ordinal, then $L^N=L\subseteq N$. In particular $L^L=L$, and $L$ satisfies $V=L$.

Examined direct dependencies: lem-def-operation-is-absolute, thm-constructible-universe-basic-axioms, thm-internal-power-set-in-the-constructible-universe, thm-replacement-in-the-constructible-universe.

Evidence: ZF. External induction compares internal histories using Def absoluteness, not Power Set absoluteness. Minimality and idempotence are derived only after the previously authored ZF axioms license N=L. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-constructibility-is-absolute-and-l-is-minimal.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-canonical-well-order-of-finite-definition-codes

Claim/conventions: In ZF, fix a well-order $<$ of a set $A$. Fix a natural-number enumeration of pairs consisting of a membership formula and an allowed finite parameter arity. A valid definition code is $(e,a)$, where e specifies arity n and $a\in A^n$. Order codes first by $e\in\omega$, then lexicographically by their tuples of that fixed arity, using $<$. This well-orders the valid codes. For nonempty A every member of Def(A) has a unique least defining code. For empty A use instead one designated code decoding to empty.

Examined direct dependencies: def-definable-subsets-of-a-membership-structure, thm-transfinite-induction.

Evidence: ZF; a supplied well-order of A and fixed coded formula/arity enumeration. Finite-coordinate minimization establishes the well-order; formula-first ordering avoids the variable-length lexicographic defect. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-canonical-well-order-of-finite-definition-codes.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-canonical-definable-global-well-order-of-l

Claim/conventions: In ZF there is a parameter-free definable setlike class well-order $<_L$ of $L$. Each $L_\alpha$ is an initial segment, and its restriction is a set well-order. The canonical construction performed internally in $L$ gives the same relation. Fix once and for all the natural-number formula/arity coding of the preceding lemma.

Examined direct dependencies: lem-canonical-well-order-of-finite-definition-codes, def-constructible-hierarchy-and-constructible-rank, prop-constructible-levels-transitivity-ordinals-and-rank, thm-constructibility-is-absolute-and-l-is-minimal.

Evidence: ZF. Explicit recursion retains old levels as initial segments, orders only new sets by least fixed-arity codes, proves limit well-ordering and setlike predecessor bounds, and compares the internal construction stage by stage. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-canonical-definable-global-well-order-of-l.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-constructible-universe-satisfies-choice

Claim/conventions: ZF proves the Axiom of Choice relativized to $L$. Ambient Choice is not assumed: the dependency on [[def-axiom-of-choice]] specifies the conclusion, not an additional axiom of this proof.

Examined direct dependencies: thm-canonical-definable-global-well-order-of-l, thm-replacement-in-the-constructible-universe, thm-separation-in-the-constructible-universe, def-axiom-of-choice.

Evidence: ZF only. The canonical order is internally definable; its unique minima produce a choice graph by already proved internal Replacement. AC is a conclusion dependency only. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-constructible-universe-satisfies-choice.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-ordinal-definability-and-hod

Claim/conventions: In ZF a set $x$ is **ordinal definable**, written $x\in\mathrm{OD}$, if there are an ordinal $\theta>0$, finitely many ordinals $a_i<\theta$, and a membership formula code e such that $x\in V_\theta$ is the unique element satisfying that formula over $(V_\theta,\in)$ with those parameters. Here $V_\theta$ is precisely the cumulative hierarchy of [[def-cumulative-hierarchy-stages]], not an arbitrary transitive set closed under some operations. Set satisfaction, with finite tuples as in [[lem-finite-tuple-satisfaction-is-absolute]], makes OD a single first-order definable class.

Define

$$\mathrm{HOD}=\{x:\operatorname{TC}(\{x\})\subseteq\mathrm{OD}\}.$$

The TC convention is the least transitive superset, so it includes x itself when applied to its singleton, by [[prop-transitive-closure-minimality]]. Thus HOD requires x and every descendant to be OD.

This coded definition agrees, formula by formula, with unique definability in V from finitely many ordinals. If a fixed formula uniquely defines x in V from ordinal parameters, reflect that formula, its uniqueness assertion and their subformulas to a $V_\theta$ containing x and the parameters, using [[thm-montague-levy-finite-reflection]]. It defines exactly x there. Conversely the particular code e, theta and ordinal tuple witnessing the displayed definition give an ambient unique definition: use the uniformly definable set $V_\theta$ and its set satisfaction. The code e is a natural number, hence itself an ordinal parameter. This converse asserts definability for each witness; it does not introduce a truth predicate for V or quantify over arbitrary formulas evaluated in V.

Examined direct dependencies: lem-finite-tuple-satisfaction-is-absolute, def-cumulative-hierarchy-stages, prop-transitive-closure-minimality, thm-montague-levy-finite-reflection.

Evidence: ZF. Uniform set satisfaction defines OD; reflection proves the ambient-definition equivalence for each fixed formula, and TC of the singleton imposes hereditary OD. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-ordinal-definability-and-hod.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-hod-is-an-inner-model-containing-l

Claim/conventions: In ZF, HOD is a definable transitive class containing all ordinals, satisfying every ZFC axiom, and containing $L$. No ambient AC is assumed; [[def-axiom-of-choice]] specifies the internal conclusion. This does not assert HOD=L, idempotence of HOD, or absoluteness of HOD across inner models.

Examined direct dependencies: def-ordinal-definability-and-hod, thm-constructibility-is-absolute-and-l-is-minimal, lem-canonical-well-order-of-finite-definition-codes, def-axiom-of-choice.

Evidence: ZF only. Complete local argument composes ordinal definitions, verifies each axiom by hereditary closure, explicitly orders bounded witness codes, and proves the external least-element graph belongs to HOD before claiming internal AC; only then invokes L minimality. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-hod-is-an-inner-model-containing-l.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-constructible-inner-model-semantic-and-formal-schema

Claim/conventions: For each fixed axiom $\sigma$ of $\mathrm{ZFC}+V=L$, ZF proves $\sigma^L$. If M is a transitive set model of ZF, its internally defined constructible class $L^M$, viewed externally as a set with actual membership, satisfies $\mathrm{ZFC}+V=L$ and has exactly the ordinals of M. No existence of such M, or arithmetized consistency-transfer theorem, is asserted here.

Examined direct dependencies: thm-constructibility-is-absolute-and-l-is-minimal, thm-constructible-universe-satisfies-choice, thm-relativization-and-set-satisfaction.

Evidence: ZF. Collected the actual fixed-axiom derivations and compared guarded quantifier satisfaction with the external set L^M. Preserved the conditional set-model scope and excluded an unsupported Con-transfer claim. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-constructible-inner-model-semantic-and-formal-schema.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — ex-first-constructible-levels

Claim/conventions: In ZF,

$$L_0=\varnothing,\quad L_1=\{\varnothing\},\quad L_2=\{\varnothing,\{\varnothing\}\},\quad L_3=\mathcal P(L_2).$$

For every $n<\omega$, $L_n=V_n$, and therefore $L_\omega=V_\omega$.

Examined direct dependencies: prop-constructible-levels-transitivity-ordinals-and-rank, def-definable-subsets-of-a-membership-structure.

Evidence: ZF. Calculated the first four levels and explicitly defined every subset of a finite carrier; finite induction and the omega union give the promised V-level identities. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/ex-first-constructible-levels.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — ex-canonical-l-well-order-first-stages

Claim/conventions: The canonical $<_L$ puts $\varnothing$ first and $\{\varnothing\}$ second. In $L_3$, both precede the two new sets $\{\{\varnothing\}\}$ and $\{\varnothing,\{\varnothing\}\}$. Those two are compared by their least definition codes over $L_2$, under the fixed formula/arity enumeration.

Examined direct dependencies: thm-canonical-definable-global-well-order-of-l, ex-first-constructible-levels.

Evidence: ZF. Explicit differences of the first levels identify the first two elements and the two new L_3 elements; the calculation preserves dependence on the fixed code enumeration. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/ex-canonical-l-well-order-first-stages.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — ex-definable-subsets-of-omega-are-not-all-subsets

Claim/conventions: In ZF, $\operatorname{Def}(\omega)$ has a surjective enumeration by $\omega$, but no sequence lists every subset of $\omega$. Consequently $\operatorname{Def}(\omega)\ne\mathcal P(\omega)$.

Examined direct dependencies: def-definable-subsets-of-a-membership-structure.

Evidence: ZF. Explicit triangular pairing and length-coded finite tuples enumerate Def(omega); a calculated diagonal subset differs from every enumerated value at its own index. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/ex-definable-subsets-of-omega-are-not-all-subsets.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Constructibility pair checkpoint

All 20 original constructibility IDs authored; all item decisions recorded accept only after local checks. Both assigned A/B page files written and rendering passed. Original manifest IDs/dependencies retained. No supplier additions. Sources' inherited transport history remains unresolved; no new source stamp or source-drop approval was invented. Next: forcing definitions and generic-filter construction, then names, Boolean semantics and three examples. The earlier forcing-preorder supplier is mathematically suitable but still draft; report its publication state to the serial owner.

## Checkpoint — def-dense-open-sets-and-model-generic-filters

Claim/conventions: Use [[def-forcing-preorder-compatibility-and-filter]]: $q\le p$ means stronger, and a filter is nonempty, upward closed and internally downward directed. A subset $D\subseteq P$ is **dense** if $\forall p\in P\ \exists q\in D\ (q\le p)$, and **open** if $p\in D$ and $q\le p$ imply $q\in D$.

For a transitive ZF model M containing P and its order, a filter $G\subseteq P$ is **M-generic** if $G\cap D\ne\varnothing$ for every dense $D\subseteq P$ with $D\in M$. The displayed density condition is the same inside and outside M: all its quantifiers range over the identical sets P and D, with identical order relation. No largest condition, countability or existence of a generic filter is assumed by the definition. When M is called countable, this means countable externally; its natural numbers agree with actual omega by [[thm-ordinals-and-omega-are-absolute-in-transitive-models]].

Examined direct dependencies: def-forcing-preorder-compatibility-and-filter, thm-ordinals-and-omega-are-absolute-in-transitive-models.

Evidence: ZF; inherited stronger-is-smaller preorder convention. Bounded quantifiers make density absolute; genericity and external countability are kept separate. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-dense-open-sets-and-model-generic-filters.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-rasiowa-sikorski-with-explicit-choice

Claim/conventions: In ZFC, given a nonempty forcing preorder P, a sequence $(D_n)_{n<\omega}$ of dense subsets and $p\in P$, a filter G contains p and meets every $D_n$. If a surjection $e:\omega\to P$ is supplied, the conclusion has a ZF proof without AC.

Examined direct dependencies: def-dense-open-sets-and-model-generic-filters, def-axiom-of-choice, thm-transfinite-recursion.

Evidence: General branch assumes AC for the omega cross P refinement family; supplied-enumeration branch is ZF. Explicit descending sequence and upward closure verify nonemptiness, direction and all dense-set meetings. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-rasiowa-sikorski-with-explicit-choice.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — cor-generics-exist-over-countable-transitive-models

Claim/conventions: In ZF, let $e:\omega\to M$ be an external surjective enumeration of a transitive set model M of ZF. If M contains a forcing preorder P and its order, then for each $p\in P$ an M-generic filter through p exists. The existence of M and its enumeration are hypotheses.

Examined direct dependencies: def-dense-open-sets-and-model-generic-filters, thm-transfinite-recursion.

Evidence: ZF with supplied external enumeration of M. Enumerate all ground dense sets with P as fallback, refine by least e-indices, and verify the resulting filter directly; no AC-dependent theorem is consumed. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/cor-generics-exist-over-countable-transitive-models.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-forcing-names-and-name-rank

Claim/conventions: In ZF let P be the nonempty forcing preorder of [[def-forcing-preorder-compatibility-and-filter]]. A **P-name** is a set of pairs $\langle\sigma,p\rangle$, with name first and condition second, where $p\in P$ and every sigma is again a P-name. The empty set is a name. Formally use [[thm-transfinite-recursion]] to define

$$N_0=\varnothing,\qquad N_{\alpha+1}=\mathcal P(N_\alpha\times P),\qquad N_\lambda=\bigcup_{\beta<\lambda}N_\beta\quad(\lambda\text{ a nonzero limit}),$$

and call elements of the union of these levels names. The levels nest: $N_0\subseteq N_1$, successor inclusions follow by monotonicity of the product and power set, and at a limit each earlier member is already a set of pairs with first coordinate in the union, so belongs to its next power-set stage.

The first-coordinate predecessor relation on names is setlike: predecessors of tau are obtained from its pair entries by Replacement. It is well-founded because the actual membership rank of the first coordinate of a Kuratowski pair in tau is strictly less than the rank of tau. Hence [[thm-recursion-on-well-founded-setlike-relations]] defines the **name rank**

$$\operatorname{rk}_P(\tau)=\sup\{\operatorname{rk}_P(\sigma)+1:\exists p\in P\ (\langle\sigma,p\rangle\in\tau)\}.$$

The empty supremum is zero. Conversely a set of pairs whose first coordinates are names belongs to a level: Replacement collects their least containing-stage indices, a common ordinal bounds them, and the set of pairs belongs to the next stage. This verifies the recursive description without an unbounded set of names. Every descendant of a name is a name. These are definable classes and set-valued recursions, not class objects; no Choice is used. Name rank is distinct from the membership rank of a condition.

Examined direct dependencies: def-forcing-preorder-compatibility-and-filter, thm-transfinite-recursion, thm-recursion-on-well-founded-setlike-relations.

Evidence: ZF. Defined name stages, proved nesting and the bounded-stage converse, and justified name-rank recursion by the setlike subname relation descending in actual membership rank. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-forcing-names-and-name-rank.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-forcing-names-and-name-ranks-are-absolute

Claim/conventions: In ZF, let M be a transitive ZF model containing P. Its P-names are exactly the actual P-names that belong to M, and internal and external name ranks agree on these names. Equality of internal and external name-stage power sets is not asserted.

Examined direct dependencies: def-forcing-names-and-name-rank, thm-ordinals-and-omega-are-absolute-in-transitive-models, lem-bounded-definitions-of-basic-set-operations.

Evidence: ZF; transitive ZF M containing P. External membership-rank induction compares pair decoding, all subnames and the rank-supremum equations without asserting equality of name-stage power sets. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-forcing-names-and-name-ranks-are-absolute.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-forcing-name-valuation-and-generic-extension

Claim/conventions: In ZF, for any $G\subseteq P$ and P-name tau define

$$\operatorname{val}_G(\tau)=\{\operatorname{val}_G(\sigma):\exists p\in G\ (\langle\sigma,p\rangle\in\tau)\}.$$

The subname relation is well-founded and setlike, as in [[lem-forcing-names-and-name-ranks-are-absolute]] and its name definition. For a supplied set function on the predecessors, Separation selects those with a coefficient in G and Replacement takes their values. This is a uniquely valued set rule, so [[thm-recursion-on-well-founded-setlike-relations]] gives a unique definable valuation and all its set restrictions. The empty name evaluates to empty. Even G empty is permitted here; then every name evaluates to empty.

For a transitive set ground model M containing P, write

$$M[G]=\{\operatorname{val}_G(\tau):\tau\in M\text{ is a P-name}\}.$$

Separation on M and Replacement make this an external set. If M satisfies ZF, namehood in this display agrees with its internal namehood by [[lem-forcing-names-and-name-ranks-are-absolute]]. The notation asserts neither genericity of G nor that M[G] is a model of ZF. For a definable class ground model the same display is interpreted as a definable class.

Examined direct dependencies: lem-forcing-names-and-name-ranks-are-absolute, thm-recursion-on-well-founded-setlike-relations.

Evidence: ZF; arbitrary G subset P. The predecessor-set valuation rule is functional and set-valued; setlike recursion supplies existence and uniqueness and Replacement supplies the external extension set. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-forcing-name-valuation-and-generic-extension.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-check-names-and-the-canonical-generic-name

Claim/conventions: For a nonempty forcing preorder P in ZF, define

$$\check x=\{\langle\check y,p\rangle:y\in x,\ p\in P\},\qquad \dot G=\{\langle\check p,p\rangle:p\in P\}.$$

Membership recursion on sets is a well-founded setlike recursion, so [[thm-recursion-on-well-founded-setlike-relations]] supplies the unique class map $x\mapsto\check x$. The rule takes a product of the set of predecessor values with P, hence returns a set. Induction shows each output is a P-name; Replacement on P then shows that dot G is a name. The valuation convention is [[def-forcing-name-valuation-and-generic-extension]].

If M is a transitive ZF model containing P and x, perform the same recursion inside M. Induction on membership identifies its values with the external check names: all members of x and all conditions of P belong to M, and the set products and recursive values agree. Thus check x belongs to M, and internal Replacement on P puts dot G in M.

When P has a largest (weakest) condition 1, one may instead recurse using only pairs with coefficient 1. A nonempty forcing filter contains 1 by upward closure. Membership induction in the valuation equation then gives value x for that top-only check name, just as for the all-conditions version proved next. No largest condition is required for the displayed definition.

Examined direct dependencies: def-forcing-name-valuation-and-generic-extension, thm-recursion-on-well-founded-setlike-relations.

Evidence: ZF; P nonempty. All-conditions check names exist by membership recursion, dot G by Replacement, and internal construction agrees by transitivity; top-only check names require the stated filter/top condition. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-check-names-and-the-canonical-generic-name.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-check-name-evaluation-and-generic-reconstruction

Claim/conventions: In ZF, for every nonempty $G\subseteq P$, $\operatorname{val}_G(\check x)=x$ and $\operatorname{val}_G(\dot G)=G$. Hence for a transitive ZF model M containing P, $M\subseteq M[G]$ and $G\in M[G]$. The inclusion is not asserted to be elementary.

Examined direct dependencies: def-check-names-and-the-canonical-generic-name.

Evidence: ZF; G nonempty. Direct valuation calculations establish check recovery and dot G recovery, then ground membership of the names gives M subset M[G] and G in M[G]. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-check-name-evaluation-and-generic-reconstruction.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-generic-extension-transitivity-and-rank-bound

Claim/conventions: In ZF, for a transitive ZF ground model M and any $G\subseteq P$, $M[G]$ is transitive. For each name tau, $\operatorname{rank}(\operatorname{val}_G(\tau))\le\operatorname{rk}_P(\tau)$. No axiom satisfaction or no-new-ordinals theorem is asserted here.

Examined direct dependencies: def-forcing-name-valuation-and-generic-extension, def-membership-rank-of-a-set.

Evidence: ZF; arbitrary G subset P. Subname decoding in transitive M proves transitivity, and the two recursive supremum formulas prove the rank bound even for empty G. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-generic-extension-transitivity-and-rank-bound.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-names-for-pairs-functions-and-ordinals

Claim/conventions: In ZF, for a set T of P-names put $S(T)=T\times P$. For nonempty $G\subseteq P$ its value is $\{\tau_G:\tau\in T\}$, where $\tau_G=\operatorname{val}_G(\tau)$. Define

$$\operatorname{pairName}(\sigma,\tau)=S(\{S(\{\sigma\}),S(\{\sigma,\tau\})\}).$$

Its value is the Kuratowski pair $\langle\sigma_G,\tau_G\rangle$. If $i\mapsto\tau_i$ is a set function of names on I, then $S(\{\operatorname{pairName}(\check i,\tau_i):i\in I\})$ is a graph name whose value is the function $i\mapsto(\tau_i)_G$ on I. If the family and P belong to a transitive ZF model M, these constructed names belong to M. For every ground ordinal alpha, $(\check\alpha)_G=\alpha$.

Examined direct dependencies: thm-check-name-evaluation-and-generic-reconstruction, thm-generic-extension-transitivity-and-rank-bound.

Evidence: ZF; G nonempty and a set-indexed family of names. Explicit S and nested singleton calculations produce ordered pairs and function graphs, with internal construction and check-ordinal identities verified. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-names-for-pairs-functions-and-ordinals.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-boolean-valued-name-semantics

Claim/conventions: In ZF let B be a complete set Boolean algebra with $0\ne1$, using the abstract completeness clause of [[def-complete-boolean-algebra-and-regular-open-sets]]. Use the name construction of [[def-forcing-names-and-name-rank]] with coefficients in B, including zero. Write E(s,t) and I(s,t) for Boolean equality and membership values, prescribed by

$$I(s,t)=\bigvee_{\langle u,b\rangle\in t}(b\wedge E(s,u)),$$
$$E(s,t)=\left(\bigwedge_{\langle u,b\rangle\in s}(\neg b\vee I(u,t))\right)\wedge\left(\bigwedge_{\langle u,b\rangle\in t}(\neg b\vee I(u,s))\right).$$

Existence and uniqueness of this atomic recursion are proved in the following lemma using [[thm-recursion-on-well-founded-setlike-relations]] on sets of descendant pairs. Put $\|s\in t\|=I(s,t)$ and $\|s=t\|=E(s,t)$. Boolean connectives use the corresponding Boolean operations. For each fixed formula phi, define its existential value by

$$\|\exists x\,\phi(x,t)\|=\bigvee\{b\in B:\exists\text{ B-name }s\ (b=\|\phi(s,t)\|)\}.$$

The join ranges over the set of attained values, not over a set of all names. This is a formula-by-formula definition; it asserts neither a uniform truth predicate for V nor a generic truth theorem. Empty joins are zero and empty meets are one. Completeness inside a ground model refers only to its subsets of B; no external completeness or absoluteness of quantified Boolean values is asserted.

Examined direct dependencies: def-forcing-names-and-name-rank, def-complete-boolean-algebra-and-regular-open-sets, thm-recursion-on-well-founded-setlike-relations.

Evidence: ZF; complete nontrivial set Boolean algebra. Stated both atomic clauses and the set-of-attained-values existential clause, retaining the precise internal-completeness and fixed-formula conventions. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-boolean-valued-name-semantics.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-boolean-valued-semantics-is-well-defined

Claim/conventions: In ZF the atomic Boolean recursions and the interpretation of each fixed finite membership formula have unique values in the complete Boolean algebra B, definable from B and their name parameters. When constructed internally in a ground model, only completeness for subsets belonging to that model is used.

Examined direct dependencies: def-boolean-valued-name-semantics, def-forcing-names-and-name-rank, thm-recursion-on-well-founded-setlike-relations.

Evidence: ZF; complete set Boolean algebra. Proved atomic recursion on actual set descendant domains, checked each swapped-coordinate call lowers sorted-rank complexity, proved overlap uniqueness, then constructed each fixed existential value by Separation on B. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-boolean-valued-semantics-is-well-defined.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — prop-atomless-generics-are-not-ground-model-elements

Claim/conventions: In ZF, let M be a transitive ZF model containing an atomless forcing preorder P and its order: every condition has two incompatible stronger conditions. If G is M-generic then $G\notin M$. The atomless hypothesis cannot simply be omitted.

Examined direct dependencies: def-dense-open-sets-and-model-generic-filters.

Evidence: ZF. Complement of a filter is dense in atomless forcing because two incompatible refinements cannot both be in the filter; if G were ground-model, its complement would contradict genericity. Singleton forcing checks the missing-hypothesis boundary. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/prop-atomless-generics-are-not-ground-model-elements.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — ex-cohen-name-valuation-and-dense-set-meeting

Claim/conventions: In ZF let M be a transitive ZF model, $P=2^{<\omega}\in M$ ordered by extension (longer sequences are stronger), and G an M-generic filter. Then $c=\bigcup G$ is a total binary sequence distinct from every binary sequence in M. Its graph is the valuation of the name

$$\tau=\{\langle\operatorname{pairName}(\check n,\check i),s\rangle:s\in P,\ n<\operatorname{length}(s),\ i=s(n)\}.$$

The graph name belongs to M.

Examined direct dependencies: lem-names-for-pairs-functions-and-ordinals, def-dense-open-sets-and-model-generic-filters.

Evidence: ZF; M-generic Cohen filter. Explicit length extensions make the union total, bit flips separate it from each ground real, and valuation of the displayed ground-model pair-name set gives its exact graph. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/ex-cohen-name-valuation-and-dense-set-meeting.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — fs-a-generic-filter-belongs-to-the-ground-model

Claim/conventions: False claim, conditional on a supplied externally countable transitive ZF model M: every M-generic filter for a forcing notion in M belongs to M.

Examined direct dependencies: prop-atomless-generics-are-not-ground-model-elements, cor-generics-exist-over-countable-transitive-models, ex-cohen-name-valuation-and-dense-set-meeting.

Evidence: ZF conditional on the supplied countable transitive model and enumeration. Cohen splitting gives atomlessness, a generic exists by least-index recursion, and its failure to be ground-model follows both from the dense-complement theorem and the real-union calculation. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/fs-a-generic-filter-belongs-to-the-ground-model.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — ex-boolean-valued-one-bit-name

Claim/conventions: In the complete Boolean algebra $B=\mathcal P(\{0,1\})$, let $b=\{0\}$, let e be the empty name and let $t=\{\langle e,b\rangle\}$. Then

$$\|e\in t\|=b,\qquad\|t=e\|=\neg b=\{1\},\qquad\|t=t\|=1_B.$$

Valuation using the principal Boolean ultrafilter $U_0=\{a\subseteq\{0,1\}:0\in a\}$ gives $t_{U_0}=\{\varnothing\}$; using $U_1$ gives $t_{U_1}=\varnothing$.

Examined direct dependencies: lem-boolean-valued-semantics-is-well-defined, thm-check-name-evaluation-and-generic-reconstruction.

Evidence: ZF. Calculated all three Boolean values directly in the four-element algebra and both principal valuations; no generic truth theorem or Boolean completion is consumed. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/ex-boolean-valued-one-bit-name.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-13.proof-contracts.json exit 1.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

## Checkpoint — def-lc-inaccessible-and-mahlo-cardinals

Claim/conventions: Work in ZFC; [[def-axiom-of-choice]] is the ambient axiom used for arbitrary cardinality comparisons. Cardinals are initial ordinals as in [[def-cardinal]], regular means $\operatorname{cf}(\kappa)=\kappa$ as in [[def-cofinality]], and $2^\mu$ is the cardinality of the power set in [[def-cardinal-arithmetic]].

An **inaccessible** cardinal is an uncountable regular strong limit cardinal: $2^\mu<\kappa$ for every cardinal $\mu<\kappa$. A **weakly inaccessible** cardinal is an uncountable regular limit cardinal. Strong limit and limit cardinal are different conditions.

For a regular uncountable kappa, a subset S is **stationary** if it meets every club subset of kappa, using [[def-club-subsets-of-ordinals]]. An inaccessible kappa is **Mahlo** if $\{\alpha<\kappa:\alpha\text{ is an uncountable regular cardinal}\}$ is stationary. The equivalent formulation by stationarily many inaccessibles follows after the club of strong-limit cardinals is proved below; it is not assumed in this definition. None of these definitions asserts existence.

Examined direct dependencies: def-cardinal, def-cofinality, def-cardinal-arithmetic, def-club-subsets-of-ordinals, def-axiom-of-choice.

Evidence: ZFC conventions fixed explicitly: uncountable regular strong limit for inaccessible, regular limit for weakly inaccessible, and stationary uncountable regulars for Mahlo; no existence or unproved equivalence is stipulated. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-inaccessible-and-mahlo-cardinals.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-lc-inaccessible-size-and-rank-bounds

Claim/conventions: In ZFC let kappa be inaccessible. Then $|V_\alpha|<\kappa$ for every $\alpha<\kappa$, every $x\in V_\kappa$ has size less than kappa, and every set of fewer than kappa elements of $V_\kappa$ belongs to $V_\kappa$. For cardinals $\mu,\nu<\kappa$, $\mu^\nu<\kappa$, with $0^0=1$. The strong-limit cardinals below kappa contain a club subset of kappa.

Examined direct dependencies: def-lc-inaccessible-and-mahlo-cardinals, def-cumulative-hierarchy-stages, def-membership-rank-of-a-set, def-axiom-of-choice.

Evidence: ZFC. Supplied the cardinal-square proof and small-union estimate locally, identifying AC for simultaneous injections; then proved the rank, exponent and strong-limit club assertions with all zero and limit cases. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-inaccessible-size-and-rank-bounds.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-inaccessible-rank-segments-model-zfc

Claim/conventions: In ZFC, if kappa is inaccessible, $(V_\kappa,\in)$ satisfies every ZFC axiom. For each cardinal $\alpha<\kappa$, inaccessibility of alpha is absolute between $V_\kappa$ and V. No converse from $V_\kappa\models\mathrm{ZFC}$ to inaccessibility of kappa is asserted.

Examined direct dependencies: lem-lc-inaccessible-size-and-rank-bounds, prop-cumulative-hierarchy-transitivity-and-growth, thm-relativization-and-set-satisfaction, def-axiom-of-choice.

Evidence: ZFC. Verified every axiom directly by rank bounds and relativized formulas; AC gives the choice graph and image-size comparison. All functions and full small power sets witnessing inaccessibility tests lie in V_kappa, giving both absoluteness directions. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-inaccessible-rank-segments-model-zfc.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-lc-complete-ultrafilters-and-measurable-cardinals

Claim/conventions: For an infinite cardinal kappa, a proper filter U on I is **kappa-complete** if $\bigcap_{\xi<\eta}A_\xi\in U$ whenever $\eta<\kappa$ and each $A_\xi\in U$. The intersection with no factors is I. **Countably complete** means closed under countable intersections, equivalently omega_1-complete in ZFC. Ultrafilter and nonprincipal use [[def-ultrafilter]]; cardinals use [[def-cardinal]].

A **measurable cardinal** is an uncountable kappa carrying a nonprincipal kappa-complete ultrafilter on the full power set of kappa. Such a U is a **normal measure** if every function $f:S\to\kappa$ with $S\in U$, $0\notin S$ and $f(\alpha)<\alpha$ is constant on a set in U contained in S. A set in U is called measure one.

The associated zero-one set function is $m_U(A)=1$ if $A\in U$, and zero otherwise. It is not the definition of a real-valued measurable cardinal. The fixed-index filter and normality conditions are formulas of ZF and do not themselves use Choice. General cardinality language and the large-cardinal implications on this page use ZFC, with [[def-axiom-of-choice]] explicit. No ultrafilter or measurable-cardinal existence is asserted.

Examined direct dependencies: def-ultrafilter, def-cardinal, def-axiom-of-choice.

Evidence: ZF filter conditions with ZFC cardinality context. Distinguished kappa-completeness, countable completeness, nonprincipality and normality; regressive functions exclude zero and the indicator is not real-valued measurability. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-complete-ultrafilters-and-measurable-cardinals.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-lc-complete-measures-small-fibres-and-inaccessibility

Claim/conventions: In ZFC, let U be a nonprincipal kappa-complete ultrafilter on an uncountable cardinal kappa. No set of size less than kappa belongs to U, every map from kappa into an ordinal below kappa is constant on a member of U, and kappa is inaccessible.

Examined direct dependencies: def-lc-complete-ultrafilters-and-measurable-cardinals, thm-ultrafilter-characterisation, def-lc-inaccessible-and-mahlo-cardinals, def-axiom-of-choice.

Evidence: ZFC. Intersected singleton and fibre complements, ruled out singular cofinal partitions, and used the coordinate-decision argument to exclude an injection into a small power set; AC is used for cardinal comparison. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-complete-measures-small-fibres-and-inaccessibility.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-lc-set-ultraproduct

Claim/conventions: Work in ZFC. Let $(\mathcal M_i)_{i\in I}$ be a set family of nonempty structures in one set signature with finite-arity symbols, as in [[def-set-structures-and-variable-assignments]], and U a proper [[def-ultrafilter]] on nonempty I. [[def-axiom-of-choice]] supplies an element of the product of carriers. For product functions f,g put

$$f\sim_U g\quad\Longleftrightarrow\quad\{i:f(i)=g(i)\}\in U.$$

The **ultraproduct** has carrier $(\prod_i M_i)/\sim_U$. Interpret a constant c by the class of $i\mapsto c^{\mathcal M_i}$, a function symbol F by $([f_1],\ldots,[f_n])\mapsto[i\mapsto F^{\mathcal M_i}(f_1(i),\ldots,f_n(i))]$, and a relation R by

$$R([f_1],\ldots,[f_n])\quad\Longleftrightarrow\quad\{i:\mathcal M_i\models R(f_1(i),\ldots,f_n(i))\}\in U.$$

For zero-arity symbols the tuple is empty. The immediately following quotient lemma verifies equivalence, representative independence and the nonempty carrier. For a constant family write $\operatorname{Ult}(\mathcal M,U)$, and let $c_a(i)=a$; its diagonal map is $a\mapsto[c_a]$. Elementarity is the subsequent Los theorem, not part of this definition.

Examined direct dependencies: def-set-structures-and-variable-assignments, def-ultrafilter, def-axiom-of-choice.

Evidence: ZFC; set family in a finite-arity set signature and proper ultrafilter on nonempty I. Coordinate operations and relation predicates are specified, with AC for the nonempty product and well-definedness explicitly assigned to the following lemma. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-set-ultraproduct.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-lc-ultraproduct-quotient-well-defined

Claim/conventions: In ZFC the set ultraproduct has a nonempty set carrier; its equivalence relation, function and relation symbols are well-defined, independent of representatives. In a constant family the diagonal map is well-defined and injective.

Examined direct dependencies: def-lc-set-ultraproduct, thm-ultrafilter-characterisation, def-axiom-of-choice.

Evidence: ZFC. Proved equivalence, set quotient and nonemptiness, then used a finite U-large equality intersection to verify each interpreted symbol and both directions of relation independence. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-ultraproduct-quotient-well-defined.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-los-for-set-ultraproducts

Claim/conventions: In ZFC, for every first-order formula phi and product representatives $f_1,\ldots,f_n$,

$$\prod_i\mathcal M_i/U\models\phi([f_1],\ldots,[f_n])\quad\Longleftrightarrow\quad\{i:\mathcal M_i\models\phi(f_1(i),\ldots,f_n(i))\}\in U.$$

In particular the diagonal map into an ultrapower of a nonempty set structure is elementary.

Examined direct dependencies: lem-lc-ultraproduct-quotient-well-defined, thm-set-structure-satisfaction-recursion, thm-ultrafilter-characterisation, def-axiom-of-choice.

Evidence: ZFC. Term induction gives atomic compatibility, ultrafilter operations handle Booleans, and both existential directions are proved with AC spent on coordinate witnesses/defaults; constant truth sets prove elementarity. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-los-for-set-ultraproducts.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-lc-scott-ultrapower-and-class-embedding-convention

Claim/conventions: In ZF let U be a proper ultrafilter on nonempty I, with completeness conventions as in [[def-lc-complete-ultrafilters-and-measurable-cardinals]]. For set functions $f,g:I\to V$ put $f\sim_U g$ iff $\{i:f(i)=g(i)\}\in U$. Let rho(f) be the least membership rank of any function equivalent to f, and define the **Scott representative**

$$[f]_U=\{g:g:I\to V,\ g\sim_U f,\ \operatorname{rank}(g)=\rho(f)\}.$$

Use [[def-membership-rank-of-a-set]]. Existence as a nonempty set and quotient invariance are proved in the following lemma. The universe ultrapower is the definable class of these representatives, with

$$[f]_U\ E\ [g]_U\quad\Longleftrightarrow\quad\{i:f(i)\in g(i)\}\in U.$$

Its constant map is $x\mapsto[c_x]_U$, where $c_x(i)=x$. The class of all equivalent functions is not used as a set representative.

A supplied **definable elementary embedding** $j:V\to M$ means a definable class function into a definable transitive class M, with set parameters allowed, satisfying elementarity separately for each fixed first-order formula. Its restriction to every set is a set by Replacement. Relativization and class language use [[thm-relativization-and-set-satisfaction]]; there is no uniform satisfaction predicate for V and no quantification over arbitrary class embeddings. Converse embedding characterizations retain this definability and set-restriction convention. No Global Choice or class-set theory is assumed.

Examined direct dependencies: def-lc-complete-ultrafilters-and-measurable-cardinals, def-membership-rank-of-a-set, thm-relativization-and-set-satisfaction.

Evidence: ZF. Specified Scott minimum-rank set representatives and coordinate membership, and fixed definable-class, set-restriction and formula-by-formula embedding conventions to avoid class truth or Global Choice. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-scott-ultrapower-and-class-embedding-convention.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-lc-scott-quotients-are-sets-and-membership-is-setlike

Claim/conventions: In ZF the Scott representatives are nonempty sets, equality of representatives is equivalent to U-equivalence of functions, their coordinate membership relation E is well-defined, and every E-predecessor collection is a set.

Examined direct dependencies: def-lc-scott-ultrapower-and-class-embedding-convention, thm-ultrafilter-characterisation.

Evidence: ZF. Minimum attained rank yields a set representative, finite equality intersections give relation invariance, and deterministic patching into union ran(g) plus empty bounds every predecessor by a set of functions. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-scott-quotients-are-sets-and-membership-is-setlike.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-los-schema-for-universe-ultrapowers

Claim/conventions: In ZFC, for each fixed first-order membership formula $\varphi$ and set functions $f_1,\ldots,f_n:I\to V$, the Scott ultrapower satisfies

$$\varphi^E([f_1]_U,\ldots,[f_n]_U)\quad\Longleftrightarrow\quad\{i\in I:\varphi(f_1(i),\ldots,f_n(i))\}\in U.$$

Here the left side is the fixed formula relativized to the definable Scott domain, with E replacing membership. Thus the ultrapower is extensional and the constant map preserves and reflects every fixed first-order formula. This is a schema, not a uniform truth predicate for V.

Examined direct dependencies: lem-lc-scott-quotients-are-sets-and-membership-is-setlike, thm-lc-los-for-set-ultraproducts, def-axiom-of-choice.

Evidence: ZFC. Formula induction is proved with both existential directions; minimum witness ranks and Separation reduce coordinate class witnesses to a set family before AC. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-los-schema-for-universe-ultrapowers.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 1.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Universe Łoś checkpoint correction: initial strict contract failed because boundary evidence lacked step locators. Added actual step locators; strict per-item contract now passes. Precheck and rendering passed. Acceptance recorded only after that correction. Next: countable-completeness/collapse equivalence.

## Checkpoint — thm-lc-countable-completeness-and-well-founded-ultrapowers

Claim/conventions: In ZFC the Scott ultrapower of V is well-founded if and only if U is countably complete. In that case its membership relation collapses to a transitive definable class M containing all ordinals, and the collapsed constant map $j_U:V\to M$ is elementary, formula by formula.

Examined direct dependencies: thm-lc-los-schema-for-universe-ultrapowers, lem-lc-scott-quotients-are-sets-and-membership-is-setlike, thm-mostowski-collapse-for-extensional-relations, def-axiom-of-choice.

Evidence: ZFC. AC is used for set successor selections and sequence representatives; countable intersection gives Foundation contradiction, exit times prove the converse, and the verified collapse hypotheses yield M and its ordinals. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-countable-completeness-and-well-founded-ultrapowers.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 1: Step 3a must clear before item auditing
. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-lc-ultrapower-critical-point

Claim/conventions: In ZFC let U be a nonprincipal kappa-complete ultrafilter on an uncountable cardinal kappa, and let j be its collapsed universe ultrapower embedding. Then $j(\alpha)=\alpha$ for every $\alpha<\kappa$, and

$$\kappa\leq\pi([\mathrm{id}_\kappa]_U)<j(\kappa).$$

In particular the critical point, the least ordinal moved by j, is kappa. The embedding fixes $V_\kappa$ pointwise. Scott names in ordinal comparisons are understood through the collapse pi.

Examined direct dependencies: thm-lc-countable-completeness-and-well-founded-ultrapowers, lem-lc-complete-measures-small-fibres-and-inaccessibility, def-axiom-of-choice, lem-lc-inaccessible-size-and-rank-bounds.

Evidence: ZFC. Proved the exact predecessor set of every small constant class, derived ordinal fixing and the identity bound, then used rank induction and inaccessible sizes to fix V_kappa. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-ultrapower-critical-point.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 1: Step 3a must clear before item auditing
. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-measurability-normal-measures-and-embeddings

Claim/conventions: In ZFC, for an uncountable cardinal kappa, the following are equivalent: kappa is measurable; kappa carries a normal measure; kappa is the critical point of a definable elementary embedding $j:V\to M$ into a transitive class, under the set-restriction convention. For the ultrapower by a measure U on kappa, U is normal if and only if its collapsed identity class equals kappa. Normality is also equivalent to closure under diagonal intersections of kappa-sequences of measure-one sets.

Examined direct dependencies: lem-lc-ultrapower-critical-point, def-lc-scott-ultrapower-and-class-embedding-convention, thm-ultrafilter-characterisation, def-axiom-of-choice.

Evidence: ZFC. Derived a normal measure from the definable embedding seed kappa, checked all filter and completeness laws, and proved both identity-class and diagonal-intersection normality equivalences. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-measurability-normal-measures-and-embeddings.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 1: Step 3a must clear before item auditing
. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-lc-infinitary-syntax-and-compactness

Claim/conventions: Work in ZFC, with cardinality as in [[def-cardinal]] and [[def-axiom-of-choice]]. Fix a regular uncountable cardinal kappa, a set signature of finite-arity symbols, and variables $v_\xi$ for xi<kappa. Structures have nonempty set carriers and interpretations as in [[def-set-structures-and-variable-assignments]], now with assignments on the kappa variables.

An $L_{\kappa,\kappa}$ formula is a well-founded set syntax tree obtained from finite-term equality and relation atoms by negation, conjunctions or disjunctions of length less than kappa, and existential or universal blocks of fewer than kappa distinct variables. At each node there are fewer than kappa free variables. The empty conjunction is true, the empty disjunction false, and an empty quantifier block does nothing. Bound variables may be renamed to avoid capture. $L_{\kappa,\omega}$ restricts quantifier blocks to finite length. Trees are coded canonically by finite paths through the ordered children, with labels at those paths; different harmless variable or indexing presentations may denote equivalent formulas, without being identified as syntax.

For a set structure M, satisfaction assigns to each syntax node a subset of the set $M^\kappa$ of assignments. Atomic clauses use term evaluation; negation complements, conjunction intersects, and disjunction unions these subsets. At an existential block, an assignment belongs exactly when some replacement tuple in the set of tuples from M on that block puts it in the child subset; universal blocks use every such tuple. These are unique set operations on already computed child values. The proper-subtree relation is well-founded and setlike, so [[thm-recursion-on-well-founded-setlike-relations]] proves existence and uniqueness. Induction on the same trees shows that truth depends only on free variables, since each clause either preserves agreement or modifies only bound variables. Thus satisfaction is well-defined also with assignments specified just on the free variables. This is semantics for set structures, not truth for V.

A theory T is **less-than-kappa satisfiable** if every subset of T of cardinality less than kappa has a model. **Weak logical compactness at kappa** asserts that every such theory of size at most kappa in a language of size at most kappa has a model. **Strong logical compactness at kappa** allows arbitrary set sizes for the theory and language. One specifies whether the assertion concerns $L_{\kappa,\kappa}$ or $L_{\kappa,\omega}$. These define compactness properties; they do not assert any compactness theorem. The empty theory has a one-element model in every signature (all functions constant and relations, for example, empty).

Examined direct dependencies: def-set-structures-and-variable-assignments, thm-recursion-on-well-founded-setlike-relations, def-cardinal, def-axiom-of-choice.

Evidence: ZFC. Specified syntax, variable assignments, empty operations and size conventions; well-founded recursion on syntax gives actual unique set satisfaction and free-variable invariance. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-infinitary-syntax-and-compactness.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 1: Step 3a must clear before item auditing
. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-infinitary-los

Claim/conventions: In ZFC let kappa be regular uncountable and U a kappa-complete proper ultrafilter on I. For nonempty set structures M_i in a fixed finite-arity signature, their set ultraproduct satisfies Łoś's equivalence for every $L_{\kappa,\kappa}$ formula, with parameter tuples of any length less than kappa. In particular the truth value is independent of representatives.

Examined direct dependencies: def-lc-infinitary-syntax-and-compactness, thm-lc-los-for-set-ultraproducts, def-lc-complete-ultrafilters-and-measurable-cardinals, def-axiom-of-choice.

Evidence: ZFC. Extended formula induction by kappa-complete Boolean operations and proved both block-quantifier directions using AC only on sets, including representative invariance for long parameter tuples. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-infinitary-los.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 1: Step 3a must clear before item auditing
. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-lc-weakly-compact-cardinal

Claim/conventions: In ZFC a cardinal kappa is **weakly compact** when it is inaccessible in the sense of [[def-lc-inaccessible-and-mahlo-cardinals]] and has the tree property of [[def-kappa-tree-and-tree-property]]: every tree of height kappa with fewer than kappa nodes at each level has a cofinal branch. Cardinal comparisons use [[def-axiom-of-choice]].

The partition notation $\kappa\longrightarrow(\kappa)^2_\mu$ has the meaning in [[def-partition-arrow-notation]]: each coloring of unordered pairs by the nonzero cardinal mu has a homogeneous subset of cardinality kappa. Its equivalence with the tree property at an inaccessible is proved subsequently; it is not assumed here. Inaccessibility is part of this definition, so the tree property alone at a successor cardinal does not establish weak compactness. This is a property of a cardinal, with no asserted existence and no witness-selection definition to justify.

Examined direct dependencies: def-lc-inaccessible-and-mahlo-cardinals, def-kappa-tree-and-tree-property, def-partition-arrow-notation, def-axiom-of-choice.

Evidence: ZFC. Defined weak compactness with both inaccessible and tree hypotheses, preserving the nonzero-color and successor-cardinal qualifications. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-weakly-compact-cardinal.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 1: Step 3a must clear before item auditing
. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-lc-tree-partition-equivalence

Claim/conventions: In ZFC, at an inaccessible kappa, the tree property is equivalent to $\kappa\longrightarrow(\kappa)^2_2$, and equivalent to $\kappa\longrightarrow(\kappa)^2_\mu$ for every nonzero cardinal $\mu<\kappa$.

Examined direct dependencies: def-lc-weakly-compact-cardinal, lem-lc-inaccessible-size-and-rank-bounds, thm-transfinite-recursion, def-axiom-of-choice.

Evidence: ZFC. Replaced the scaffold insertion strategy by the explicit tree of coloring columns; verified lexicographic codes including limit splitting, and proved stabilization of small-level monotone projections. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-tree-partition-equivalence.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-lc-henkin-truth-tree

Claim/conventions: In ZFC let kappa be inaccessible and T a less-than-kappa satisfiable $L_{\kappa,\kappa}$ theory with $|T|\leq\kappa$. There is a kappa-tree of satisfiable partial truth assignments in an expanded fragment of size kappa such that every cofinal branch yields a model of T. Only the symbols occurring in T are needed; unused symbols of a larger ambient signature may subsequently be interpreted arbitrarily.

Examined direct dependencies: def-lc-infinitary-syntax-and-compactness, lem-lc-inaccessible-size-and-rank-bounds, def-kappa-tree-and-tree-property, def-axiom-of-choice.

Evidence: ZFC. Built the signature and full Henkin expansion in kappa stages, proved its set-size bounds and expansion property, then constructed realized truth levels and derived the quotient model by a complete infinitary truth induction. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-henkin-truth-tree.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-weak-compactness-infinitary-logic

Claim/conventions: In ZFC, at an inaccessible kappa, weak compactness is equivalent to compactness for less-than-kappa satisfiable $L_{\kappa,\kappa}$ theories in languages and theories of size at most kappa, and is also equivalent to the corresponding $L_{\kappa,\omega}$ compactness property.

Examined direct dependencies: def-lc-weakly-compact-cardinal, lem-lc-henkin-truth-tree, def-axiom-of-choice.

Evidence: ZFC. Applied the authored Henkin model construction in the forward direction and supplied a propositional tree encoding, small-subtheory models and the full branch extraction in the reverse direction. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-weak-compactness-infinitary-logic.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 1.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

## Checkpoint — lem-lc-nonreflection-regressive-injection

Claim/conventions: In ZFC let A be a set of infinite cardinals. Suppose that for every uncountable regular cardinal rho there is a club in rho disjoint from A intersect rho. Then there is an injective ordinal-valued function g on A such that $g(\alpha)<\alpha$ for every alpha in A. The ordinal omega is allowed in A; it needs no stationarity hypothesis at omega.

Examined direct dependencies: def-cofinality, def-club-subsets-of-ordinals, thm-transfinite-recursion, def-axiom-of-choice.

Evidence: ZFC. Supremum induction with a fully proved cardinal-preserving ordinal pairing handles successor, singular and regular-limit cases; endpoint indices use a separate pairing coordinate and interval shifts preserve cardinal regressiveness. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-nonreflection-regressive-injection.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-weakly-compact-stationary-reflection-and-mahlo

Claim/conventions: In ZFC, if kappa is weakly compact and S is stationary in kappa, then S reflects to some uncountable regular cardinal rho<kappa: S intersect rho is stationary in rho. Consequently kappa is Mahlo and the inaccessible cardinals below kappa form a stationary set.

Examined direct dependencies: def-lc-weakly-compact-cardinal, lem-lc-nonreflection-regressive-injection, lem-lc-inaccessible-size-and-rank-bounds, thm-fodor-pressing-down, def-axiom-of-choice, prop-basic-stationary-set-calculus.

Evidence: ZFC. Added the actual stationary-calculus supplier, built the restriction tree of regressive injections with all level bounds, then derived regular reflection, Mahloness and stationary inaccessibles. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-weakly-compact-stationary-reflection-and-mahlo.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-measurable-implies-weakly-compact

Claim/conventions: In ZFC every measurable cardinal is weakly compact.

Examined direct dependencies: thm-lc-measurability-normal-measures-and-embeddings, lem-lc-complete-measures-small-fibres-and-inaccessibility, lem-lc-tree-partition-equivalence, def-axiom-of-choice.

Evidence: ZFC. Normalized the measure, chose its unique tail colors, and used a measure-one diagonal intersection to calculate a kappa-sized homogeneous set. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-measurable-implies-weakly-compact.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-lc-fine-ultrafilters-strong-compactness-and-supercompactness

Claim/conventions: Work in ZFC, with [[def-axiom-of-choice]] for cardinal sizes, and fix a regular uncountable cardinal kappa as in [[def-cofinality]]. For a cardinal lambda>=kappa put

$$P_\kappa(\lambda)=\{x\subseteq\lambda:|x|<\kappa\}.$$

This is a set by Separation from the power set, and contains empty. A proper kappa-complete ultrafilter U on this index set, in the sense of [[def-lc-complete-ultrafilters-and-measurable-cardinals]], is **fine** if $\{x:\alpha\in x\}\in U$ for every alpha<lambda. It is **normal** if whenever S belongs to U and $f:S\to\lambda$ satisfies f(x) in x for every x in S, some fibre of f belongs to U. In particular such a domain cannot contain the empty index x. Fineness alone does not assert normality.

The cardinal kappa is **strongly compact** if every proper kappa-complete filter on every set extends to a kappa-complete ultrafilter on that same set. It is **lambda-supercompact** if P_kappa(lambda) carries a normal fine kappa-complete ultrafilter; it is **supercompact** if it is lambda-supercompact for every cardinal lambda>=kappa. These are existence properties, not assertions that such cardinals or measures exist. Lambda=kappa is allowed. No comparison between strong compactness and supercompactness is assumed in this definition.

Examined direct dependencies: def-lc-complete-ultrafilters-and-measurable-cardinals, def-cofinality, def-axiom-of-choice.

Evidence: ZFC. Defined the index set by Separation, fine and normal conventions, and distinct filter-extension and normal-fine-measure properties with exact cardinal endpoints. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-fine-ultrafilters-strong-compactness-and-supercompactness.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-strong-compactness-fine-measures-and-logic

Claim/conventions: In ZFC, for a regular uncountable cardinal kappa, the following are equivalent: kappa is strongly compact; every P_kappa(lambda), for a cardinal lambda>=kappa, carries a fine kappa-complete ultrafilter; every less-than-kappa satisfiable set-sized $L_{\kappa,\kappa}$ theory has a model; and the same compactness assertion holds for $L_{\kappa,\omega}$. Languages may have arbitrary set size.

Examined direct dependencies: def-lc-fine-ultrafilters-strong-compactness-and-supercompactness, thm-lc-infinitary-los, def-axiom-of-choice.

Evidence: ZFC. Proved cone-filter completeness, transported fine measures to small subtheories, selected local models via least ranks, applied infinitary Los, and supplied the complete propositional filter-extension converse. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-strong-compactness-fine-measures-and-logic.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — lem-lc-fine-ultrapower-seed-and-normality

Claim/conventions: In ZFC let kappa be regular uncountable, lambda>=kappa a cardinal, and U a fine kappa-complete ultrafilter on P_kappa(lambda). In its collapsed universe ultrapower $j:V\to M$, let $s=\pi([x\mapsto x]_U)$. Then $j``\lambda\subseteq s\subseteq j(\lambda)$ and M satisfies $|s|<j(\kappa)$. U is normal if and only if $s=j``\lambda$. In the normal case $\pi([x\mapsto\operatorname{otp}(x)]_U)=\lambda$ and $j(\kappa)>\lambda$.

Examined direct dependencies: def-lc-fine-ultrafilters-strong-compactness-and-supercompactness, thm-lc-countable-completeness-and-well-founded-ultrapowers, def-axiom-of-choice.

Evidence: ZFC. Evaluated the identity seed and its internal size by universe Los, proved both normality directions using Scott equality, and identified the normal seed order type externally and internally. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-fine-ultrapower-seed-and-normality.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-strong-compactness-covering-embeddings

Claim/conventions: In ZFC, for a regular uncountable cardinal kappa, strong compactness is equivalent to the following: for every cardinal lambda>=kappa there are a definable elementary embedding $j:V\to M$ into a transitive class with critical point kappa and a set s in M such that $j``\lambda\subseteq s\subseteq j(\lambda)$ and M satisfies $|s|<j(\kappa)$. Embeddings retain the formula-schema and set-restriction convention.

Examined direct dependencies: thm-lc-strong-compactness-fine-measures-and-logic, lem-lc-fine-ultrapower-seed-and-normality, lem-lc-ultrapower-critical-point, def-axiom-of-choice.

Evidence: ZFC. Proved ordinal fixing for fine-index ultrapowers locally, used the internal cover bound to force movement at kappa, and checked every law of the converse seed-derived fine measure. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-strong-compactness-covering-embeddings.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-supercompactness-closed-embedding-characterization

Claim/conventions: In ZFC let kappa be regular uncountable and lambda>=kappa a cardinal. Then lambda-supercompactness is equivalent to the existence of a definable elementary embedding $j:V\to M$ into a transitive class with critical point kappa, $j(\kappa)>\lambda$, and every ambient function from lambda to M belonging to M. For such an embedding the derived normal fine measure is

$$U=\{X\subseteq P_\kappa(\lambda):j``\lambda\in j(X)\}.$$

All embeddings use the stated definable-class and set-restriction convention.

Examined direct dependencies: lem-lc-fine-ultrapower-seed-and-normality, thm-lc-measurability-normal-measures-and-embeddings, def-axiom-of-choice.

Evidence: ZFC. Proved critical-point fixing for the fine index, selected representatives from Scott sets, represented the sequence graph on j``lambda and reindexed it internally; the converse checks seed size and every measure law. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-supercompactness-closed-embedding-characterization.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — cor-lc-large-cardinal-implication-ledger

Claim/conventions: In ZFC the following implications hold:

$$\text{supercompact}\ \Longrightarrow\ \text{strongly compact}\ \Longrightarrow\ \text{measurable}\ \Longrightarrow\ \text{weakly compact}\ \Longrightarrow\ \text{Mahlo}\ \Longrightarrow\ \text{inaccessible}.$$

They give the corresponding one-way relative consistency implications between the theories asserting existence of the displayed cardinals. An inaccessible also gives a transitive set model of ZFC. No consistency assertion, converse, strictness, equiconsistency, linear ordering of all large-cardinal notions, or identification of strong compactness with supercompactness is asserted.

Examined direct dependencies: thm-lc-supercompactness-closed-embedding-characterization, thm-lc-strong-compactness-fine-measures-and-logic, thm-lc-measurable-implies-weakly-compact, thm-lc-weakly-compact-stationary-reflection-and-mahlo, thm-lc-inaccessible-rank-segments-model-zfc, thm-set-language-first-order-soundness, def-axiom-of-choice.

Evidence: ZFC. Proved the supercompact-to-strongly-compact and co-small-filter-to-measurable arrows explicitly, composed authored implications, and separated finite-proof consistency transfer from actual consistency assertions. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/cor-lc-large-cardinal-implication-ledger.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — def-lc-laver-anticipation-function

Claim/conventions: Work in ZFC, with [[def-axiom-of-choice]], and suppose kappa is supercompact in the sense of [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]. A **Laver anticipation function** is a set function $\ell:\kappa\to V_\kappa$ such that for every set x and every cardinal lambda>=kappa there is a supercompactness embedding $j:V\to M$ with

$$\operatorname{crit}(j)=\kappa,\qquad j(\kappa)>\lambda,\qquad {}^\lambda M\subseteq M,\qquad j(\ell)(\kappa)=x.$$

Here the sequence-closure condition and embeddings have the precise definable-class, set-restriction and formula-by-formula meaning in [[thm-lc-supercompactness-closed-embedding-characterization]]. In particular no uniform truth predicate for V or unrestricted class quantifier is introduced: the witness is supplied by a definition with set parameters, and its elementarity is verified as a schema. Since j(ell) is a function with domain j(kappa) and kappa<j(kappa), its value at kappa is well-defined. The anticipated x can have rank at least kappa; only the original values ell(alpha), alpha<kappa, must lie in V_kappa. Lambda=kappa and x=empty are included. This definition asserts no existence of such ell; that is the separate existence theorem.

Examined direct dependencies: def-lc-fine-ultrafilters-strong-compactness-and-supercompactness, thm-lc-supercompactness-closed-embedding-characterization, def-axiom-of-choice.

Evidence: ZFC. Specified all anticipation quantifiers, the definable embedding convention and why evaluation at kappa is defined, retaining arbitrary-rank targets and the separate existence obligation. 

Checks: node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-laver-anticipation-function.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — thm-lc-laver-function-existence — OPEN

Preserved claim: In ZFC every supercompact cardinal has a Laver anticipation function.

The bounded-rank least-failure recursion has not been justified at its critical stage. In particular, no completed local proof establishes that a sufficiently closed target computes the same failure of anticipation, or that factoring a derived normal ultrapower preserves the chosen target and the value at kappa. The previously exhausted Laver source retrieval remains exhausted; no new full-text reading is claimed. Required proposed local supplier: lem-lc-derived-supercompact-ultrapower-factor, with an explicit derived measure, factor domain, factor critical-point bound and agreement on the anticipated object, followed by a full minimal-failure argument. This proposed ID is not an authored or usable supplier. The closed-embedding characterization alone does not prove anticipation. Owner resolution is required; the claim is preserved and is not complete.

Examined declared inputs: def-lc-laver-anticipation-function, thm-lc-supercompactness-closed-embedding-characterization, thm-transfinite-recursion, def-axiom-of-choice.

Rendering exit 0. Escalation command exit 0. Confidence 1 refers to the documented need to escalate, not to proof completion. Strict proof contract intentionally absent because there is no completed argument. Next: finish independent B items and batch checks.

## Checkpoint — thm-lc-supercompact-preparation-interface — OPEN

Preserved claim: Binding preparation target: from a ZFC ground model with a supercompact kappa, obtain a forcing extension in which kappa remains supercompact and its supercompactness is indestructible by further <kappa-directed-closed set forcing. Separate a semantic ground-model construction from any formal Con transfer.

The anticipation theorem remains unresolved. Independently, batch 13 proves names, valuation and basic generic-extension properties, but not the forcing theorem, an iteration theorem, embedding lifting or preservation of supercompactness. Required suppliers are an explicit reverse-Easton/Laver iteration and support definition, the factorization of j(P) at the anticipated forcing, directed-closed master condition, tail closure and generic construction, and an embedding-lifting proof checking all closure and cardinal bounds. Proposed placement in the existing SET-27 forcing development requires owner reconciliation; no new page or supplier is silently assumed here. The semantic construction must specify the external generic/model convention, and any formal consistency transfer requires a separate finite-proof argument. This substantial cross-page workload prevents proof completion; the binding claim remains unchanged.

Examined declared inputs: thm-lc-laver-function-existence, def-axiom-of-choice.

Rendering exit 0. Escalation command exit 0. Confidence 1 refers to the documented need to escalate, not to proof completion. Strict proof contract intentionally absent because there is no completed argument. Next: finish independent B items and batch checks.

## Checkpoint — thm-lc-strong-compactness-product-measure-extension-interface — OPEN

Preserved claim: Binding product-measure target: Con(ZFC + a strongly compact cardinal) implies Con(ZFC + PMEA), where for every cardinal lambda the standard fair-coin product measure on {0,1}^lambda extends to a countably additive measure on its full power set whose null ideal is closed under unions of fewer than continuum many sets. This is a relative-consistency interface, not a ground-model implication and not a zero-one measure on the index cardinal.

The authored covering-embedding theorem supplies only the large-cardinal input. No local proof supplies the random/product forcing, the Boolean-valued measure-extension construction on every full power set, countable additivity, the null-ideal closure below the resulting continuum, or the formal relative-consistency transfer. The inherited Fremlin 8B–8C, printed p.70 pointer to Fleissner (1984), Theorem 3.4, is not the required complete argument; the exhausted source transport is not reset. Required remedy: owner-authorized recovery/authoring of that full construction and its forcing and measure suppliers, proposed in the existing SET-28 development, retaining this precise PMEA assertion and distinguishing it from a zero-one index measure. This item is not proved by a fine ultrafilter or by the covering seed. The binding claim remains open.

Examined declared inputs: thm-lc-strong-compactness-covering-embeddings, def-axiom-of-choice.

Rendering exit 0. Escalation command exit 0. Confidence 1 refers to the documented need to escalate, not to proof completion. Strict proof contract intentionally absent because there is no completed argument. Next: finish independent B items and batch checks.

## Checkpoint — ex-lc-principal-ultrapower-calculation

Claim/conventions: In ZF, let I contain i_0, let $U=\{A\subseteq I:i_0\in A\}$, and let M be a nonempty set structure. The constant-family quotient is well-defined without AC, and

$$[f]_U\longmapsto f(i_0)$$

is an isomorphism from its ultrapower to M, sending $[c_a]_U$ to a.

Examined direct dependencies: def-lc-set-ultraproduct.

Evidence: ZF, conditional on the displayed data. Computed equality, every symbol and relation at the principal coordinate, with constant functions proving surjectivity and product nonemptiness without AC. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/ex-lc-principal-ultrapower-calculation.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — ex-lc-normal-measure-identity-and-successor

Claim/conventions: In ZFC, assume U is a normal measure on kappa and write Scott classes through their transitive collapse. For every alpha<kappa,

$$[c_\alpha]_U=\alpha,\qquad [\mathrm{id}]_U=\kappa,\qquad [\xi\mapsto\xi+1]_U=\kappa+1<j_U(\kappa).$$

Examined direct dependencies: thm-lc-measurability-normal-measures-and-embeddings, lem-lc-ultrapower-critical-point, def-axiom-of-choice.

Evidence: ZFC. Computed constant, identity and successor classes and verified the strict bound from all coordinate successors remaining below kappa. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/ex-lc-normal-measure-identity-and-successor.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — cex-lc-countably-incomplete-ultrapower

Claim/conventions: The assertion that every universe ultrapower is well-founded fails, conditional on a free ultrafilter U on omega. In ZF with that supplied U, the Scott classes of

$$g_m(n)=\max(n-m,0)\qquad(m,n\in\omega)$$

form an infinite descending membership chain of internal naturals in the universe ultrapower. No existence of a free ultrafilter is asserted in ZF.

Examined direct dependencies: lem-lc-scott-quotients-are-sets-and-membership-is-setlike.

Evidence: ZF with a supplied free ultrafilter. Calculated the exact cofinite truth sets for truncated-subtraction functions and exhibited their nonminimal Scott range without additional choice. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/cex-lc-countably-incomplete-ultrapower.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — ex-lc-first-inaccessible-is-not-mahlo

Claim/conventions: In ZFC, if an inaccessible cardinal exists, the least inaccessible is not Mahlo and therefore is not weakly compact.

Examined direct dependencies: thm-lc-weakly-compact-stationary-reflection-and-mahlo, lem-lc-inaccessible-size-and-rank-bounds, def-axiom-of-choice.

Evidence: ZFC conditional on an inaccessible. The club of infinite strong limits below the least one avoids every uncountable regular, explicitly witnessing non-Mahloness. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/ex-lc-first-inaccessible-is-not-mahlo.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

## Checkpoint — fs-zfc-proves-there-is-an-inaccessible-cardinal

Claim/conventions: False assertion: ZFC proves that a strongly inaccessible cardinal exists.

The refutation is conditional: if ZFC is consistent, there is no such proof. This makes no assertion of Con(ZFC).

Examined direct dependencies: thm-lc-inaccessible-rank-segments-model-zfc, thm-set-language-first-order-soundness, thm-relativization-and-set-satisfaction, def-axiom-of-choice.

Evidence: ZFC finite-proof metatheory. For a fixed purported proof, reflected its finite axiom list into the least inaccessible rank segment, checked actual cardinalhood of the internal witness, and built a contradiction without a CTM-from-consistency assumption. 

Checks: node tools/tsx-run.mjs tools/precheck.mts exit 0; node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/fs-zfc-proves-there-is-an-inaccessible-cardinal.md exit 0; node tools/proof-contract.mjs /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-next-20-batch-14.proof-contracts.json exit 0.

Source locators retained in the item and original coverage; no new full-text fetch or source stamp claimed.

Decision command exit 0: accept recorded. Next: next prerequisite-ordered manifest item; reread its dependencies.

### Batch 13 — explicit-path precheck

Command: `node tools/tsx-run.mjs tools/precheck.mts [all 36 owned item paths]`. Exit 0.

```text
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-finite-tuple-satisfaction-is-absolute.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-def-operation-is-absolute.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/prop-constructible-levels-transitivity-ordinals-and-rank.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-finite-reflection-along-constructible-levels.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-constructible-universe-basic-axioms.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-separation-in-the-constructible-universe.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-internal-power-set-in-the-constructible-universe.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-replacement-in-the-constructible-universe.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-constructibility-is-absolute-and-l-is-minimal.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-canonical-well-order-of-finite-definition-codes.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-canonical-definable-global-well-order-of-l.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-constructible-universe-satisfies-choice.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-hod-is-an-inner-model-containing-l.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-constructible-inner-model-semantic-and-formal-schema.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/ex-first-constructible-levels.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/ex-canonical-l-well-order-first-stages.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/ex-definable-subsets-of-omega-are-not-all-subsets.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-rasiowa-sikorski-with-explicit-choice.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/cor-generics-exist-over-countable-transitive-models.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-forcing-names-and-name-ranks-are-absolute.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-check-name-evaluation-and-generic-reconstruction.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-generic-extension-transitivity-and-rank-bound.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-names-for-pairs-functions-and-ordinals.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-boolean-valued-semantics-is-well-defined.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/prop-atomless-generics-are-not-ground-model-elements.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/ex-cohen-name-valuation-and-dense-set-meeting.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/fs-a-generic-filter-belongs-to-the-ground-model.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/ex-boolean-valued-one-bit-name.md ("direct")

28 checked, 0 failing — all clean
```

### Batch 13 — explicit-path rendering

Command: `node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/lem-finite-tuple-satisfaction-is-absolute.md [all 36 owned item paths and 4 owned page paths]`. Exit 0.

```text

OK — 40 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's YAML parser.
```

### Batch 13 — content policy

Command: `node tools/content-policy.mjs research/phase-2-next-20-batch-13.pages.json`. Exit 0.

```text
content-policy: 36 scoped item(s), 0 error(s), 0 warning(s)
```

### Batch 13 — strict proof contracts

Command: `node tools/proof-contract.mjs research/phase-2-next-20-batch-13.proof-contracts.json --strict`. Exit 0.

```text
proof-contract: 0 error(s), 0 warning(s), 36/36 item(s) checked
```

### Batch 13 — pre-splice canonical plan

Command: `node tools/validate-plan.mjs research/plan-spec.json`. Exit 0.

Pre-splice validation is run-wide. Owned findings:

-    675* the-constructible-hierarchy-and-inner-models           0 items  <- reflection-absoluteness-and-elementary-submodels
-    676* the-constructible-hierarchy-and-inner-models-examples   0 items  <- the-constructible-hierarchy-and-inner-models
-    677* condensation-gch-and-diamond-in-l                      0 items  <- arithmetization-incompleteness-and-relative-consistency, set-theoretic-trees-delta-systems-and-diamond, the-constructible-hierarchy-and-inner-models
-    679* forcing-orders-names-and-generic-extensions            0 items  <- reflection-absoluteness-and-elementary-submodels, boolean-algebras-stone-duality-and-the-prime-ideal-theorem
-    680* forcing-orders-names-and-generic-extensions-examples   0 items  <- forcing-orders-names-and-generic-extensions
-    681* the-forcing-theorem-and-formal-consistency-transfer    0 items  <- arithmetization-incompleteness-and-relative-consistency, forcing-orders-names-and-generic-extensions

Run summary: NOTE: 637 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

### Batch 14 — explicit-path precheck

Command: `node tools/tsx-run.mjs tools/precheck.mts [all 38 owned item paths]`. Exit 0.

```text
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-inaccessible-size-and-rank-bounds.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-inaccessible-rank-segments-model-zfc.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-complete-measures-small-fibres-and-inaccessibility.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-ultraproduct-quotient-well-defined.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-los-for-set-ultraproducts.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-scott-quotients-are-sets-and-membership-is-setlike.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-los-schema-for-universe-ultrapowers.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-countable-completeness-and-well-founded-ultrapowers.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-ultrapower-critical-point.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-measurability-normal-measures-and-embeddings.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-infinitary-los.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-tree-partition-equivalence.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-henkin-truth-tree.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-weak-compactness-infinitary-logic.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-nonreflection-regressive-injection.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-weakly-compact-stationary-reflection-and-mahlo.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-measurable-implies-weakly-compact.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-strong-compactness-fine-measures-and-logic.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/lem-lc-fine-ultrapower-seed-and-normality.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-strong-compactness-covering-embeddings.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/thm-lc-supercompactness-closed-embedding-characterization.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/cor-lc-large-cardinal-implication-ledger.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/ex-lc-principal-ultrapower-calculation.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/ex-lc-normal-measure-identity-and-successor.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/cex-lc-countably-incomplete-ultrapower.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/ex-lc-first-inaccessible-is-not-mahlo.md ("direct")
PASS /home/lazyinspirit/Projects/prestige-math-library/items/fs-zfc-proves-there-is-an-inaccessible-cardinal.md ("direct")

27 checked, 0 failing — all clean
```

### Batch 14 — explicit-path rendering

Command: `node tools/rendercheck.mjs /home/lazyinspirit/Projects/prestige-math-library/items/def-lc-inaccessible-and-mahlo-cardinals.md [all 38 owned item paths and 2 owned page paths]`. Exit 0.

```text

OK — 40 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's YAML parser.
```

### Batch 14 — content policy

Command: `node tools/content-policy.mjs research/phase-2-next-20-batch-14.pages.json`. Exit 0.

```text
content-policy: 38 scoped item(s), 0 error(s), 0 warning(s)
```

### Batch 14 — strict proof contracts

Command: `node tools/proof-contract.mjs research/phase-2-next-20-batch-14.proof-contracts.json --strict`. Exit 1.

```text
proof-contract: 3 error(s), 0 warning(s), 35/38 item(s) checked
ERROR scope-missing-contract [thm-lc-laver-function-existence]: thm-lc-laver-function-existence has no proof contract entry
ERROR scope-missing-contract [thm-lc-supercompact-preparation-interface]: thm-lc-supercompact-preparation-interface has no proof contract entry
ERROR scope-missing-contract [thm-lc-strong-compactness-product-measure-extension-interface]: thm-lc-strong-compactness-product-measure-extension-interface has no proof contract entry
```

### Batch 14 — pre-splice canonical plan

Command: `node tools/validate-plan.mjs research/plan-spec.json`. Exit 0.

Pre-splice validation is run-wide. Owned findings:

-    699* large-cardinals-measures-and-elementary-embeddings     0 items  <- reflection-absoluteness-and-elementary-submodels, boolean-algebras-stone-duality-and-the-prime-ideal-theorem, club-stationary-sets-and-pressing-down, set-theoretic-trees-delta-systems-and-diamond
-    700* large-cardinals-measures-and-elementary-embeddings-examples   0 items  <- large-cardinals-measures-and-elementary-embeddings
-    701* solovays-model-and-regularity-of-all-sets-of-reals     0 items  <- borel-analytic-sets-perfect-sets-and-determinacy, symmetric-collapse-and-ultrafilter-free-models, large-cardinals-measures-and-elementary-embeddings
-    705* prikry-forcing-and-gitiks-singular-cardinal-model      0 items  <- symmetric-collapse-and-ultrafilter-free-models, large-cardinals-measures-and-elementary-embeddings
-    707* proper-forcing-countable-support-iterations-and-pfa    0 items  <- finite-support-iterations-and-martins-axiom, large-cardinals-measures-and-elementary-embeddings
-   [redundant-prereq] page large-cardinals-measures-and-elementary-embeddings requires club-stationary-sets-and-pressing-down directly, but already reaches it through set-theoretic-trees-delta-systems-and-diamond

Run summary: NOTE: 637 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

Scope refresh the-constructible-hierarchy-and-inner-models: exit 0. Preserved pair inventory is sufficient after local authoring: actual Def/reflection/HOD and finite model-schema proofs.

Scope refresh forcing-orders-names-and-generic-extensions: exit 0. Preserved pair inventory is sufficient after local authoring: actual names, valuations and Boolean recursion proofs.

Scope refresh large-cardinals-measures-and-elementary-embeddings: exit 0. Preserved pair retains every claim; completed local ultrapower, compactness and embedding repairs are authored. The three Laver/preparation/PMEA item escalations and Scott scope-placement obligation remain owner workload; sufficient inventory is not proof completion.

Scope refresh the-constructible-hierarchy-and-inner-models: exit 0. Preserved pair inventory is sufficient after local authoring: actual Def/reflection/HOD and finite model-schema proofs.

Scope refresh forcing-orders-names-and-generic-extensions: exit 0. Preserved pair inventory is sufficient after local authoring: actual names, valuations and Boolean recursion proofs.

Scope refresh large-cardinals-measures-and-elementary-embeddings: exit 0. Preserved pair retains every claim; completed local ultrapower, compactness and embedding repairs are authored. The three Laver/preparation/PMEA item escalations and Scott scope-placement obligation remain owner workload; sufficient inventory is not proof completion.

## Exact-input decision refresh

After aggregate checks, refreshed changed or previously gate-blocked completed items with current deps and justified_by IDs. No unchanged argument was re-authored. Results:

- thm-constructible-inner-model-semantic-and-formal-schema: exit 1
- def-boolean-valued-name-semantics: exit 1
- lem-boolean-valued-semantics-is-well-defined: exit 1
- ex-boolean-valued-one-bit-name: exit 1
- def-lc-inaccessible-and-mahlo-cardinals: exit 1
- lem-lc-inaccessible-size-and-rank-bounds: exit 1
- thm-lc-inaccessible-rank-segments-model-zfc: exit 1
- def-lc-complete-ultrafilters-and-measurable-cardinals: exit 1
- lem-lc-complete-measures-small-fibres-and-inaccessibility: exit 1
- def-lc-set-ultraproduct: exit 1
- lem-lc-ultraproduct-quotient-well-defined: exit 1
- thm-lc-los-for-set-ultraproducts: exit 1
- def-lc-scott-ultrapower-and-class-embedding-convention: exit 1
- lem-lc-scott-quotients-are-sets-and-membership-is-setlike: exit 1
- thm-lc-los-schema-for-universe-ultrapowers: exit 1
- thm-lc-countable-completeness-and-well-founded-ultrapowers: exit 1
- lem-lc-ultrapower-critical-point: exit 1
- thm-lc-measurability-normal-measures-and-embeddings: exit 1
- def-lc-infinitary-syntax-and-compactness: exit 1
- thm-lc-infinitary-los: exit 1
- def-lc-weakly-compact-cardinal: exit 1
- lem-lc-tree-partition-equivalence: exit 1
- lem-lc-henkin-truth-tree: exit 1
- thm-lc-weak-compactness-infinitary-logic: exit 1
- lem-lc-nonreflection-regressive-injection: exit 1
- thm-lc-weakly-compact-stationary-reflection-and-mahlo: exit 1
- thm-lc-measurable-implies-weakly-compact: exit 1
- def-lc-fine-ultrafilters-strong-compactness-and-supercompactness: exit 1
- thm-lc-strong-compactness-fine-measures-and-logic: exit 1
- lem-lc-fine-ultrapower-seed-and-normality: exit 1
- thm-lc-strong-compactness-covering-embeddings: exit 1
- thm-lc-supercompactness-closed-embedding-characterization: exit 1
- cor-lc-large-cardinal-implication-ledger: exit 1
- def-lc-laver-anticipation-function: exit 1
- ex-lc-principal-ultrapower-calculation: exit 1
- ex-lc-normal-measure-identity-and-successor: exit 1
- cex-lc-countably-incomplete-ultrapower: exit 1
- ex-lc-first-inaccessible-is-not-mahlo: exit 1
- fs-zfc-proves-there-is-an-inaccessible-cardinal: exit 1

The three existing escalations were not overwritten. Adding the accurate same-group forcing requirement changes their recursive input hashes; the decision tool requires current owner decisions for those IDs. Their full unchanged unresolved obligations remain in the items and checkpoints.

## Structural closure check

Traversed current on-disk deps, justified_by and load-bearing forward_refs from all 74 assigned IDs: 831 distinct items, 0 paths to the Recorded catalogue item list, 0 missing item files. This is a metadata traversal, not a claim that all 831 proofs were read or independently audited. The explicitly documented missing forcing/factor/measure obligations remain real despite having no allocated supplier IDs.

Scope refresh the-constructible-hierarchy-and-inner-models: exit 0. Preserved pair inventory is sufficient after local authoring: actual Def/reflection/HOD and finite model-schema proofs.

Scope refresh forcing-orders-names-and-generic-extensions: exit 0. Preserved pair inventory is sufficient after local authoring: actual names, valuations and Boolean recursion proofs.

Scope refresh large-cardinals-measures-and-elementary-embeddings: exit 0. Preserved pair retains every claim; completed local ultrapower, compactness and embedding repairs are authored. The three Laver/preparation/PMEA item escalations and Scott scope-placement obligation remain owner workload; sufficient inventory is not proof completion.

## Exact-input decision refresh

After aggregate checks, refreshed changed or previously gate-blocked completed items with current deps and justified_by IDs. No unchanged argument was re-authored. Results:

- lem-finite-tuple-satisfaction-is-absolute: exit 0
- def-definable-subsets-of-a-membership-structure: exit 0
- lem-def-operation-is-absolute: exit 0
- def-constructible-hierarchy-and-constructible-rank: exit 0
- prop-constructible-levels-transitivity-ordinals-and-rank: exit 0
- lem-finite-reflection-along-constructible-levels: exit 0
- thm-constructible-universe-basic-axioms: exit 0
- thm-separation-in-the-constructible-universe: exit 0
- thm-internal-power-set-in-the-constructible-universe: exit 0
- thm-replacement-in-the-constructible-universe: exit 0
- thm-constructibility-is-absolute-and-l-is-minimal: exit 0
- lem-canonical-well-order-of-finite-definition-codes: exit 0
- thm-canonical-definable-global-well-order-of-l: exit 0
- thm-constructible-universe-satisfies-choice: exit 0
- def-ordinal-definability-and-hod: exit 0
- thm-hod-is-an-inner-model-containing-l: exit 0
- thm-constructible-inner-model-semantic-and-formal-schema: exit 0
- ex-first-constructible-levels: exit 0
- ex-canonical-l-well-order-first-stages: exit 0
- ex-definable-subsets-of-omega-are-not-all-subsets: exit 0
- thm-rasiowa-sikorski-with-explicit-choice: exit 0
- cor-generics-exist-over-countable-transitive-models: exit 0
- lem-forcing-names-and-name-ranks-are-absolute: exit 0
- def-forcing-name-valuation-and-generic-extension: exit 0
- def-check-names-and-the-canonical-generic-name: exit 0
- thm-check-name-evaluation-and-generic-reconstruction: exit 0
- thm-generic-extension-transitivity-and-rank-bound: exit 0
- lem-names-for-pairs-functions-and-ordinals: exit 0
- def-boolean-valued-name-semantics: exit 0
- lem-boolean-valued-semantics-is-well-defined: exit 0
- prop-atomless-generics-are-not-ground-model-elements: exit 0
- ex-cohen-name-valuation-and-dense-set-meeting: exit 0
- fs-a-generic-filter-belongs-to-the-ground-model: exit 0
- ex-boolean-valued-one-bit-name: exit 0
- def-lc-inaccessible-and-mahlo-cardinals: exit 0
- lem-lc-inaccessible-size-and-rank-bounds: exit 0
- thm-lc-inaccessible-rank-segments-model-zfc: exit 0
- def-lc-complete-ultrafilters-and-measurable-cardinals: exit 0
- lem-lc-complete-measures-small-fibres-and-inaccessibility: exit 0
- def-lc-set-ultraproduct: exit 0
- lem-lc-ultraproduct-quotient-well-defined: exit 0
- thm-lc-los-for-set-ultraproducts: exit 0
- def-lc-scott-ultrapower-and-class-embedding-convention: exit 0
- lem-lc-scott-quotients-are-sets-and-membership-is-setlike: exit 0
- thm-lc-los-schema-for-universe-ultrapowers: exit 0
- thm-lc-countable-completeness-and-well-founded-ultrapowers: exit 0
- lem-lc-ultrapower-critical-point: exit 0
- thm-lc-measurability-normal-measures-and-embeddings: exit 0
- def-lc-infinitary-syntax-and-compactness: exit 0
- thm-lc-infinitary-los: exit 0
- def-lc-weakly-compact-cardinal: exit 0
- lem-lc-tree-partition-equivalence: exit 0
- lem-lc-henkin-truth-tree: exit 0
- thm-lc-weak-compactness-infinitary-logic: exit 0
- lem-lc-nonreflection-regressive-injection: exit 0
- thm-lc-weakly-compact-stationary-reflection-and-mahlo: exit 0
- thm-lc-measurable-implies-weakly-compact: exit 0
- def-lc-fine-ultrafilters-strong-compactness-and-supercompactness: exit 0
- thm-lc-strong-compactness-fine-measures-and-logic: exit 0
- lem-lc-fine-ultrapower-seed-and-normality: exit 0
- thm-lc-strong-compactness-covering-embeddings: exit 0
- thm-lc-supercompactness-closed-embedding-characterization: exit 0
- cor-lc-large-cardinal-implication-ledger: exit 0
- def-lc-laver-anticipation-function: exit 0
- ex-lc-principal-ultrapower-calculation: exit 0
- ex-lc-normal-measure-identity-and-successor: exit 0
- cex-lc-countably-incomplete-ultrapower: exit 0
- ex-lc-first-inaccessible-is-not-mahlo: exit 0
- fs-zfc-proves-there-is-an-inaccessible-cardinal: exit 0

The three existing escalations were not overwritten. Adding the accurate same-group forcing requirement changes their recursive input hashes; the decision tool requires current owner decisions for those IDs. Their full unchanged unresolved obligations remain in the items and checkpoints.

## Published concerns for serial owner reconciliation

No published file was edited. The following findings are limited to the inspected statements, proof uses and metadata; they do not certify the whole published dependency closure.

- **Confirmed composition/status discrepancy, high confidence:** published page `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` lists `def-boolean-algebra-for-stone-duality`, `def-boolean-ideals-filters-and-primality`, `def-boolean-homomorphism-and-quotient`, `def-forcing-preorder-compatibility-and-filter` and `def-complete-boolean-algebra-and-regular-open-sets`, whose current files say `status: draft`. Evidence: page frontmatter and each item frontmatter; the forcing-preorder and complete-Boolean definitions were read for their actual local uses. This is not a confirmed defect in their mathematical clauses. Required suppliers: these exact existing definition IDs and, for the complete-Boolean construction, its declared `thm-regular-open-sets-form-a-complete-boolean-algebra`. Proposed repair: serial owner reconcile the item publication/review states with the published page after their current independent process finishes. Do not fabricate publication or review stamps. Batch 13 uses the actual definition clauses and does not infer soundness from their stamps.
- **Dependency-accounting concern, high confidence about the omission; not a mathematical counterexample:** `thm-fodor-pressing-down` on `club-stationary-sets-and-pressing-down` explicitly spends ambient AC in proof step 1.1 selecting a club for each fibre, but does not directly declare `def-axiom-of-choice`. `prop-basic-stationary-set-calculus` on the same page similarly selects an avoiding club for each small-family member in step 2.1 without that direct declaration. Both statements already say ZFC, and inherited dependencies may carry AC, so the inspected proofs are not refuted by this observation. Required supplier: existing published `def-axiom-of-choice`; proposed owner repair is a focused direct-dependency/assumption audit and declaration repair, preserving the ZFC statements and checking consumers. Our consuming items declare AC explicitly. The serial reconciler should deduplicate against the canonical published ledger rather than count these as new proven mathematical failures.

## Step 4 reconciliation amendments

All six owned canonical plan rows still have empty item lists. Splice the preserved 36-item batch-13 and 38-item batch-14 manifests only in the serial Step 4 process. The latest batch-14 A-page requirement additionally names `forcing-orders-names-and-generic-extensions`; this is the accurate same-group dependency for its retained forcing obligations, not evidence that names suffice for them. Carry the two declared item edges from preparation/PMEA to `def-forcing-name-valuation-and-generic-extension`, and the added stationary-calculus, soundness and Boolean well-definedness declarations from current manifests. Preserve the open status of those forcing edges.

Shared design prose should retain the complete Laver, preparation and PMEA targets and state their exact unresolved supplier workload from the three item checkpoints above. No target was moved, dropped or reduced, and no new A/B pair was created. No new item IDs were added: the necessary finite-satisfaction, reflection, Scott, Henkin, nonreflection and seed suppliers were already allocated on the assigned A pages and are now fully authored there.

## Source and scope evidence limits

All inherited failed-fetch and retry-exhaustion histories remain intact. No fresh successful source transport stamp or complete external chapter reading is claimed. Exact local source-section excerpts are recorded in proof contracts. The nonreflection search found an incomplete discussion on Mathematics Stack Exchange (question 5362, answer/comments at lines 97–134 of the browser extraction) and a search snippet for an older Monk chapter; neither was treated as a proof. The completed nonreflection argument is the local supremum induction with the explicitly proved cardinal-preserving pairing. Previously uncertain lexicographic, Henkin and seed-graph arguments likewise have complete local derivations in their items.

The group decline file `research/phase-2-next-20-alpha-h-scope-decisions.json` has 26 current `stands` decisions with item-specific evidence and one honest pending owner placement: decline `130d4c4a434fbc81befce2805d818d211903e922259b2821b4516e8e90ecc911`, Marks Theorem 23.11 (Scott: measurable implies V is not L). Batch 13 now supplies L, but no owner disposition for that extra result was invented. `scope-decisions.mjs check --run phase-2-next-20 --group h` exits 1 on precisely that pending row. This is distinct from the three incomplete assigned theorem proofs.

Proof provenance for the 55 completed proofs is `ai-generated`, since the actual arguments were newly written in this author pass. Original statement provenance is preserved; definitions retain `not-applicable` and the three open proofs retain `not-supplied`. Combined content-policy recheck after this correction: 74 scoped items, zero errors and zero warnings. No generated statement was promoted into a non-leaf role.

## Final group handoff

Final direct itemDecision inspection: 71 owned decisions closed; only the three original escalations remain open and require current owner decisions after the accurate dependency/provenance changes. All changed completed decisions were successfully refreshed through record-item, confidence 1, with concrete item evidence and current examined deps/justified_by; earlier global Step 3a gate failures are superseded by the successful refresh. No owner-held escalation was overwritten.

Final checks after provenance correction: all 80 explicit item/page paths render (exit 0); combined content policy checks all 74 items with zero errors/warnings; strict batch-13 contracts pass 36/36 (exit 0); strict batch-14 contracts check 35/38 with exactly three missing contracts for the open targets (exit 1). Earlier explicit-path precheck passed 28 batch-13 proofs and 27 batch-14 proofs. It skips definitions and not-supplied proofs, so that pass does not certify the three open theorems. Both requested canonical validate-plan runs exited 0, with empty owned item arrays and the missing new forcing-page requirement reported above for Step 4; no splicing was performed. Frontier dependency refresh succeeded. Decline check retains one pending owner row (exit 1).

### Completed batch 13 IDs (36)

- `lem-finite-tuple-satisfaction-is-absolute`
- `def-definable-subsets-of-a-membership-structure`
- `lem-def-operation-is-absolute`
- `def-constructible-hierarchy-and-constructible-rank`
- `prop-constructible-levels-transitivity-ordinals-and-rank`
- `lem-finite-reflection-along-constructible-levels`
- `thm-constructible-universe-basic-axioms`
- `thm-separation-in-the-constructible-universe`
- `thm-internal-power-set-in-the-constructible-universe`
- `thm-replacement-in-the-constructible-universe`
- `thm-constructibility-is-absolute-and-l-is-minimal`
- `lem-canonical-well-order-of-finite-definition-codes`
- `thm-canonical-definable-global-well-order-of-l`
- `thm-constructible-universe-satisfies-choice`
- `def-ordinal-definability-and-hod`
- `thm-hod-is-an-inner-model-containing-l`
- `thm-constructible-inner-model-semantic-and-formal-schema`
- `ex-first-constructible-levels`
- `ex-canonical-l-well-order-first-stages`
- `ex-definable-subsets-of-omega-are-not-all-subsets`
- `def-dense-open-sets-and-model-generic-filters`
- `thm-rasiowa-sikorski-with-explicit-choice`
- `cor-generics-exist-over-countable-transitive-models`
- `def-forcing-names-and-name-rank`
- `lem-forcing-names-and-name-ranks-are-absolute`
- `def-forcing-name-valuation-and-generic-extension`
- `def-check-names-and-the-canonical-generic-name`
- `thm-check-name-evaluation-and-generic-reconstruction`
- `thm-generic-extension-transitivity-and-rank-bound`
- `lem-names-for-pairs-functions-and-ordinals`
- `def-boolean-valued-name-semantics`
- `lem-boolean-valued-semantics-is-well-defined`
- `prop-atomless-generics-are-not-ground-model-elements`
- `ex-cohen-name-valuation-and-dense-set-meeting`
- `fs-a-generic-filter-belongs-to-the-ground-model`
- `ex-boolean-valued-one-bit-name`

### Completed batch 14 IDs (35)

- `def-lc-inaccessible-and-mahlo-cardinals`
- `lem-lc-inaccessible-size-and-rank-bounds`
- `thm-lc-inaccessible-rank-segments-model-zfc`
- `def-lc-complete-ultrafilters-and-measurable-cardinals`
- `lem-lc-complete-measures-small-fibres-and-inaccessibility`
- `def-lc-set-ultraproduct`
- `lem-lc-ultraproduct-quotient-well-defined`
- `thm-lc-los-for-set-ultraproducts`
- `def-lc-scott-ultrapower-and-class-embedding-convention`
- `lem-lc-scott-quotients-are-sets-and-membership-is-setlike`
- `thm-lc-los-schema-for-universe-ultrapowers`
- `thm-lc-countable-completeness-and-well-founded-ultrapowers`
- `lem-lc-ultrapower-critical-point`
- `thm-lc-measurability-normal-measures-and-embeddings`
- `def-lc-infinitary-syntax-and-compactness`
- `thm-lc-infinitary-los`
- `def-lc-weakly-compact-cardinal`
- `lem-lc-tree-partition-equivalence`
- `lem-lc-henkin-truth-tree`
- `thm-lc-weak-compactness-infinitary-logic`
- `lem-lc-nonreflection-regressive-injection`
- `thm-lc-weakly-compact-stationary-reflection-and-mahlo`
- `thm-lc-measurable-implies-weakly-compact`
- `def-lc-fine-ultrafilters-strong-compactness-and-supercompactness`
- `thm-lc-strong-compactness-fine-measures-and-logic`
- `lem-lc-fine-ultrapower-seed-and-normality`
- `thm-lc-strong-compactness-covering-embeddings`
- `thm-lc-supercompactness-closed-embedding-characterization`
- `cor-lc-large-cardinal-implication-ledger`
- `def-lc-laver-anticipation-function`
- `ex-lc-principal-ultrapower-calculation`
- `ex-lc-normal-measure-identity-and-successor`
- `cex-lc-countably-incomplete-ultrapower`
- `ex-lc-first-inaccessible-is-not-mahlo`
- `fs-zfc-proves-there-is-an-inaccessible-cardinal`

### Open obligations and next action

1. `thm-lc-laver-function-existence`: complete the exact factor-map/anticipation correctness and minimal-failure proof; the proposed factor supplier is not yet allocated or authored.
2. `thm-lc-supercompact-preparation-interface`: complete Laver first, then the iteration, factorization, master condition, tail generic and lifting arguments, with owner reconciliation of substantial forcing suppliers.
3. `thm-lc-strong-compactness-product-measure-extension-interface`: complete the precise random-product measure construction, additivity/null-ideal bounds and formal Con transfer, preserving the full PMEA target.
4. Owner disposition for the Scott measurable-implies-not-L decline and current owner receipts for the three escalated items; no invented owner ruling or source waiver.
5. Serial Step 4 plan/shared-prose and published-concern reconciliation, including the declared same-group forcing edges and exhausted source-evidence qualifications. Mathematical proof completion is not inferred from source transport metadata or mechanical checks.

The next worker must reread the relevant item, its completed suppliers and the exact source passage before attempting any open proof. The checkpoint summaries are navigation, not mathematical evidence. No additional unapproved source-retry cycle, published edit, pair addition or Recorded dependency is authorized by this handoff.

A final attempted `frontier-dependency-ledger.mjs check --run phase-2-next-20` returned usage (exit 1): this tool exposes `refresh`, not `check`. It provides no additional verification receipt. The successful refresh receipts and the explicitly open input rows above are the actual ledger evidence.

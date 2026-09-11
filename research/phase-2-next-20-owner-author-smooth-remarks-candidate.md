# Three owner-corrected remarks: complete candidates

Authority: the explicit OWNER DESIGN/KIND RESOLUTION18:41UTC in
`research/phase-2-next-20-owner-author-smooth.md`, read in full. This document
contains candidate file contents and item-specific contract evidence only.
It does not modify canonical items, fragments, decisions, coverage or scope.
The original false-audit note's unresolved demand for a model theorem is
superseded for these conditional formulations: no consistency assertion is
made or needed. All three are corrected design content, with ai-altered
statement/proof provenance. No generated theorem or fabricated source receipt
is introduced.

Read in full during this task: `def-axiom-of-choice`, `thm-zorn`,
`thm-every-independent-set-extends-to-a-basis`,
`cor-every-vector-space-has-a-basis`, `def-dependent-choice`,
`thm-baire-category-for-complete-metric-spaces`,
`lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis`,
`def-real-singular-chain-complex`, `def-real-singular-cochain-complex`,
`def-real-singular-cohomology`. The three candidates below are also supplied
in their dependency order. No new external source fetch was performed; the
previous audit's Solovay introduction is not a proof dependency or a source
for a consistency assertion.

## Candidate file 1

Destination: `items/rem-dualizing-real-vector-space-sequences-and-the-choice-boundary.md`.
Replaces original ID `fs-dualizing-every-short-exact-sequence-is-automatically-exact-in-zf` under the owner correction.

```markdown
---
id: rem-dualizing-real-vector-space-sequences-and-the-choice-boundary
kind: remark
title: "Dualizing real vector-space sequences and the choice boundary"
status: draft
origin: pipeline
provenance: {statement: ai-altered, proof: ai-altered}
deps: [def-axiom-of-choice, thm-every-independent-set-extends-to-a-basis, def-dependent-choice, thm-baire-category-for-complete-metric-spaces, lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis]
sources: {references: []}
---

## Statement

Write $V^*=\operatorname{Hom}_{\mathbb R}(V,\mathbb R)$ for the algebraic
real dual. Two separate axiom branches clarify the exactness issue.

* Under AC, every short exact sequence of real vector spaces
  $0\to A\xrightarrow{i}B\xrightarrow{q}D\to0$ dualizes to the short exact
  sequence $0\to D^*\xrightarrow{q^*}B^*\xrightarrow{i^*}A^*\to0$.
* Under ZF + DC and the additional hypothesis that **every subset of
  $P=\mathbb R^{\mathbb N}$ has the Baire property in its product topology**,
  let $E=\mathbb R^{(\mathbb N)}\subset P$ be the finitely supported
  sequences. The functional $\ell:E\to\mathbb R$ given by
  $\ell(x)=\sum_n x_n$ does not extend linearly to $P$. Consequently
  $0\to E\to P\to P/E\to0$ does not remain exact at $E^*$ after real
  dualization.

These are conditional assertions, not a consistency or nonprovability
theorem for ZF. AC is not assumed in the second branch. The canonical
extension of values on a supplied simplex basis is a different, choice-free
construction.

## Facts & Assumptions

[F1] Under AC, a linearly independent subset of a real vector space extends
to a basis; taking the empty subset also produces a basis
([[thm-every-independent-set-extends-to-a-basis]],
[[def-axiom-of-choice]]).

[F2] Under DC, a nonempty complete metric space has dense intersection of
every sequence of open dense sets
([[thm-baire-category-for-complete-metric-spaces]],
[[def-dependent-choice]]).

[F4] DC supplies a sequence starting at a specified element of a nonempty
set whenever the successor relation is entire
([[def-dependent-choice]]).

[F3] Extending a cochain by its prescribed values on the subspace-simplex
basis and by zero on the remaining supplied simplices requires no choice
([[lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis]]).

Here a set is **nowhere dense** if its closure has empty interior,
**meager** if it is contained in a countable union of nowhere dense sets,
and has the **Baire property** if its symmetric difference with some open
set is meager. The additional Baire-property hypothesis concerns $P$
itself; no theorem transferring such a hypothesis from another space is
used.

## Proof

1.1 Assume AC. For a subspace $A\subset B$, apply [F1] to the empty
independent set in $A$ to obtain a basis $S$, and then to $S\subset B$ to
obtain a basis $T$ of $B$ containing $S$. If $a\in A^*$, assign value
$a(s)$ at $s\in S$ and value zero at $t\in T\setminus S$. A vector of
$B$ has a unique finite expression in $T$, so the corresponding finite sum
defines a real-linear functional $b$ on $B$. For a vector in $A$, its
expression in $S$ is also its expression in $T$, and hence $b|_A=a$.
These two basis constructions are the exact AC use. If $A=0$, take the
zero extension directly; if $A=B$, take $b=a$. [F1]

2.1 For an arbitrary short exact sequence as stated, transport a functional
on $A$ to the subspace $i(A)$ using the inverse of the injective map $i$,
and apply step 1.1. Thus $i^*$ is surjective. Since $q$ is surjective,
$f\circ q=0$ implies $f=0$, so $q^*$ is injective. The composite
$i^*q^*$ is zero since $qi=0$. Conversely, if $b\circ i=0$, define
$\bar b(d)=b(x)$ for any $x$ with $q(x)=d$. Such an $x$ exists; two choices
differ by an element of $\ker q=i(A)$ on which $b$ vanishes. This uniquely
specifies $\bar b$ without selecting lifts. It is linear by applying $b$
to sums and scalar multiples of any lifts, and $q^*\bar b=b$. Hence
$\ker i^*=\operatorname{im}q^*$. Only the surjectivity argument used AC.
This also covers $B=0$ and the endpoint cases $A=0$ or $D=0$. [step 1.1]

3.1 For the second branch assume only ZF + DC and the stated Baire-property
hypothesis. On $P$ use the metric
$$d(x,y)=\sum_{n\ge0}2^{-n-1}\min(1,|x_n-y_n|).$$
The triangle inequality follows termwise from that of $\min(1,|s-t|)$;
positivity and symmetry are immediate. This metric induces the product
topology. Indeed a sufficiently small metric ball forces any prescribed
finite set of coordinate inequalities, by the individual positive weights.
Conversely a small restriction on finitely many initial coordinates makes
the corresponding partial sum small, while the geometric tail is arbitrarily
small. A metric Cauchy sequence is Cauchy in each real coordinate, so let
$x_n$ be its unique coordinate limit. These unique limits define $x\in P$.
For any $\epsilon>0$, bound the geometric tail by $\epsilon/2$ and use
convergence in the finitely many initial coordinates for the remaining
$\epsilon/2$. This proves convergence to $x$ in $d$, so $P$ is complete.
It is nonempty, containing the zero sequence. By [F2], no nonempty open
subset of $P$ is meager: replace the nowhere dense sets by their closed
closures and intersect their open dense complements with that open subset.
[F2]

4.1 We will use the fact that a countable union of meager sets is meager
under DC, and spell out its selection cost. If $M_j$ is meager, let
$\mathcal W_j$ be the nonempty set of sequences of nowhere dense subsets
covering $M_j$. The set of finite tuples $(w_0,\ldots,w_{k-1})$ with
$w_j\in\mathcal W_j$ contains the empty tuple, and extension by one more
coordinate is an entire relation: for that one index a witness exists.
DC starting at the empty tuple produces a chain of such extensions. Its
union gives one $w_j$ for every $j$. A fixed enumeration of
$\mathbb N\times\mathbb N$ now gives a single sequence of nowhere dense
sets covering $\bigcup_jM_j$. This is the only countable family of
meagerness witnesses selected below. [F4]

5.1 Let $L:P\to\mathbb R$ be any algebraic linear functional. The sets
$A_m=\{x:|L(x)|\le m\}$ for integers $m\ge1$ cover $P$. By steps 3.1
and 4.1, some $A_m$ is nonmeager. By the Baire-property hypothesis there
are an open set $O$ and a meager set $N$ with $A_m\mathbin\triangle O
\subseteq N$. The set $O$ is nonempty, since otherwise $A_m$ is meager.
Take $a\in O$ and a symmetric open neighborhood $V$ of zero with
$a+V+V\subseteq O$; such a $V$ is obtained by shrinking the finitely many
coordinate intervals of a basic neighborhood at $a$. For $t\in V$, the
nonempty open set $a+V$ lies in both $O$ and $O-t$. Translations preserve
nowhere density and meagerness since they are homeomorphisms. Hence
$N\cup(N-t)$ is meager and cannot cover $a+V$. There is therefore
$b\in(a+V)\setminus(N\cup(N-t))$. Then $b,b+t\in A_m$, giving
$|L(t)|=|L(b+t)-L(b)|\le2m$. This proves that $L$ is bounded on $V$.
For each $\epsilon>0$, choose an integer $k>2m/\epsilon$; on the open
neighborhood $k^{-1}V$ its absolute value is less than $\epsilon$.
Thus $L$ is continuous. No $b$ is chosen simultaneously for all $t$;
the argument proves the bound separately for each $t$.
[step 3.1, step 4.1]

6.1 Continuity supplies a basic product neighborhood $W$ of zero on which
$|L|<1$. Let $F\subset\mathbb N$ be the finite set of coordinates
restricted by $W$. If $y$ vanishes on $F$, then $ry\in W$ for every real
$r$, so $|rL(y)|<1$ for every $r$, which forces $L(y)=0$. In particular,
if $e_n$ is the sequence with its only nonzero coordinate equal to one at
$n$, then $L(e_n)=0$ for all $n\notin F$. But the well-defined finite-sum
functional $\ell:E\to\mathbb R$ satisfies $\ell(e_n)=1$ for every $n$.
The least integer outside $F$ supplies a contradiction to $L|_E=\ell$.
Thus restriction $P^*\to E^*$ is not surjective. The inclusion and quotient
give an exact sequence $0\to E\to P\to P/E\to0$ in ZF, so this is the
claimed failure of exactness after dualization. [step 5.1]

7.1 In this witness $E$ is nonzero because $e_0\in E$ is nonzero, and
$P/E$ is nonzero because the constant-one sequence has infinite support.
No quotient representatives are chosen to define the sequence. The zero
functional always extends, but the explicitly given $\ell$ does not in
this branch. The functional $\ell$ is well-defined on vectors with any
finite support, including empty support, and no sign or order of summation
is ambiguous because each sum is finite. The supplied-simplex construction
in [F3] instead already has a containing basis, so its zero extension
does not call on step 1.1 or on either additional axiom of this second
branch. [F3, step 1.1, step 6.1]
```

### Contract evidence for candidate 1

Exact citation excerpts and uses:

* F1, `thm-every-independent-set-extends-to-a-basis`, Statement: “Then there is a basis $B$ of $V$”; use 1.1 with empty set in A and then S in B. The same Statement begins “**Assume the Axiom of Choice**”; inherited only by the positive branch.
* F2, `thm-baire-category-for-complete-metric-spaces`, Statement: “Equivalently, the intersection of countably many open dense subsets of $X$ is dense.” Use 3.1 after proving complete metrizability. For 4.1 use `def-dependent-choice`, Definition: “$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$” Applied to finite witness tuples with empty initial tuple. This is the separate F4 citation for proof 4.1.
* F3, `lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis`, Statement: “The construction is choice-free in classical ZF.” Use 7.1 for the contrast in available supplied bases; its actual formula and full proof were read.

Derivations: 1.1 constructs a unique finite-sum extension from two bases
(F1); 2.1 proves injectivity, middle exactness and surjectivity of the dual
sequence (1.1 plus exactness hypotheses); 3.1 proves product metric
completeness and nonmeagerness of nonempty open sets (F2); 4.1 derives
countable-union closure for meager sets from DC (DC definition); 5.1 proves
automatic continuity by a nonmeager bounded strip and the explicit
difference-set argument (3.1,4.1,BP); 6.1 proves finite-coordinate support
of every functional and nonextension of ell (5.1); 7.1 checks witness
nontriviality and supplied-basis distinction (6.1,F3).

| Case | Status | Item-specific evidence |
|---|---|---|
| empty | checked | 1.1 uses the empty independent set to produce a basis; 4.1 starts DC at the empty finite tuple; 7.1 gives ell(0)=0 by the empty sum. |
| zero | checked | 1.1 handles A=0 by the zero extension; 2.1 handles B=0; 7.1 distinguishes the always extendible zero functional from ell. |
| one | checked | 6.1 computes ell(e_n)=1 and L(e_n)=0 beyond a finite set; 7.1 verifies e_0 is nonzero. |
| degenerate | checked | 1.1 treats A=B by identity extension; 2.1 treats zero quotient D=0 without choosing a complement. |
| endpoints | checked | 2.1 verifies both ends of the dual sequence, injectivity at D* and surjectivity at A*, while 6.1 pinpoints failure at E*. |
| nonempty-choice | checked | AC appears exactly in 1.1's two basis constructions; DC appears in Baire and 4.1; 5.1 selects b only for each fixed t; BP branch does not assume AC. |
| iff-forward | checked | 2.1 shows an element of im(q*) vanishes on i(A), proving im(q*) subset ker(i*). |
| iff-reverse | checked | 2.1 descends any b vanishing on i(A) uniquely through q, proving ker(i*) subset im(q*) without selected lifts. |

## Candidate file 2

Destination: `items/rem-dualizing-real-chain-complexes-requires-an-exactness-argument.md`.
Replaces original ID `fs-a-homology-isomorphism-of-chain-complexes-automatically-gives-a-cohomology-isomorphism-after-dualizing-without-further-machinery`.

```markdown
---
id: rem-dualizing-real-chain-complexes-requires-an-exactness-argument
kind: remark
title: "Dualizing real chain complexes requires an exactness argument"
status: draft
origin: pipeline
provenance: {statement: ai-altered, proof: ai-altered}
deps: [def-axiom-of-choice, def-dependent-choice, rem-dualizing-real-vector-space-sequences-and-the-choice-boundary]
sources: {references: []}
---

## Statement

Let $C_\bullet$ be a chain complex of real vector spaces, with
$d_n:C_n\to C_{n-1}$ and $d_nd_{n+1}=0$. Its real dual cochain complex
has $C^n=\operatorname{Hom}_{\mathbb R}(C_n,\mathbb R)$ and
$\delta^nf=f\circ d_{n+1}$.

Under AC, evaluation on cycles gives a natural isomorphism
$$\varepsilon_C^n:H^n(C^\bullet)\longrightarrow
\operatorname{Hom}_{\mathbb R}(H_n(C_\bullet),\mathbb R),\qquad
[f]\longmapsto([z]\longmapsto f(z)).$$
Consequently a real-linear chain map inducing homology isomorphisms in all
degrees induces cohomology isomorphisms after real dualization.

In the separate branch ZF + DC plus the hypothesis that every subset of
$P=\mathbb R^{\mathbb N}$ has the Baire property in its product topology,
the acyclic complex $E\to P\to P/E$ in homological degrees $2,1,0$,
where $E=\mathbb R^{(\mathbb N)}$, has nonzero real-dual cohomology in
degree 2. Thus dualization does not preserve quasi-isomorphisms in this
conditional setting. This is not a consistency or nonprovability theorem.

## Facts & Assumptions

[F1] Under AC ([[def-axiom-of-choice]]), a real-linear functional on a
subspace extends to the containing vector space, by the basis construction
in [[rem-dualizing-real-vector-space-sequences-and-the-choice-boundary]],
proof 1.1. In that item's separate DC branch ([[def-dependent-choice]]),
the functional $\ell(x)=\sum_nx_n$ on $E$ does not extend to $P$.

Write $Z_n=\ker d_n$, $B_n=\operatorname{im}d_{n+1}$ and $H_n=Z_n/B_n$.
The square-zero identity implies $B_n\subseteq Z_n$. Cohomology is
$H^n=\ker\delta^n/\operatorname{im}\delta^{n-1}$.

## Proof

1.1 If $f:C_n\to\mathbb R$ is a cocycle, then $f(d_{n+1}c)=0$ for
all $c$, so $f$ vanishes on $B_n$. Its restriction to $Z_n$ therefore
descends to $H_n$. If $f$ is replaced by $f+g\circ d_n$, its values on
cycles are unchanged. Likewise replacing $z$ by $z+d_{n+1}c$ leaves
$f(z)$ unchanged. Hence $\varepsilon_C^n$ is well-defined and linear.
This construction and these two representative checks use no choice.

2.1 Assume AC. Given $h:H_n\to\mathbb R$, compose it with the quotient
$Z_n\to H_n$ to obtain a functional on $Z_n$. By [F1] extend this to
$f:C_n\to\mathbb R$. It vanishes on $B_n$, since its restriction to
$Z_n$ does, and hence $f$ is a cocycle. Its image under
$\varepsilon_C^n$ is $h$. This proves surjectivity. The sole selection
in this step is the functional extension furnished under AC. [F1, step 1.1]

3.1 If a cocycle class is sent to zero, its representative $f$ vanishes
on $Z_n$. Define $b:B_{n-1}\to\mathbb R$ by $b(d_nc)=f(c)$.
If $d_nc=d_nc'$, then $c-c'\in Z_n$, so $f(c)=f(c')$; thus b is
well-defined. Applying this rule to sums and scalar multiples of any
preimages proves linearity, without selecting a family of preimages.
Extend $b$ to $g:C_{n-1}\to\mathbb R$ using [F1]. Then
$f=g\circ d_n=\delta^{n-1}g$, so its class is zero. Conversely every
coboundary vanishes on cycles, as already checked in step 1.1. This proves
injectivity and both directions of the zero-class criterion. [F1, step 1.1]

4.1 Let $u:C_\bullet\to D_\bullet$ be a real-linear chain map.
Precomposition defines $u^*:D^n\to C^n$ and commutes with coboundary,
because $u_nd_{n+1}^C=d_{n+1}^Du_{n+1}$. For a cocycle $f$ on D and a
cycle $z$ on C,
$$\varepsilon_C^n([f\circ u_n])([z])=f(u_nz)
=\big(\varepsilon_D^n([f])\circ H_n(u)\big)([z]).$$
This proves naturality. If $H_n(u)$ is an isomorphism, precomposition by
it is an isomorphism of real duals, with inverse precomposition by its
inverse. Steps 2.1 and 3.1 and this commuting identity show that $H^n(u^*)$
is an isomorphism. No bases are chosen to define the canonical evaluation
map or the naturality square. [step 1.1, step 2.1, step 3.1]

5.1 Now assume only the DC and Baire-property hypotheses of the second
branch. Put $C_2=E$, $C_1=P$, $C_0=P/E$, with $d_2$ the inclusion,
$d_1$ the quotient and every other group and differential zero. The
composite $d_1d_2$ is zero. The inclusion has zero kernel, the quotient
has kernel E, and the quotient is surjective. It follows directly that
$H_2(C)=H_1(C)=H_0(C)=0$, and all remaining homology groups vanish
because their chain groups are zero. Thus the unique chain map $C\to0$
is a quasi-isomorphism in every degree.

6.1 The dual complex in degrees $0,1,2$ is
$$(P/E)^*\xrightarrow{q^*}P^*\xrightarrow{i^*}E^*,$$
and its differential out of degree 2 is zero. Therefore
$$H^2(C^\bullet)=E^*/\operatorname{im}(P^*\to E^*).$$
By the second clause of [F1], the explicit functional $\ell$ is omitted
from that image; its class in this quotient is nonzero. The dual of
$C\to0$ is $0\to C^\bullet$, whose induced degree-2 map from zero
cannot be surjective. This is a conditional real-vector-space example,
with no change of coefficient field and no model-existence assertion.
[F1, step 5.1]

7.1 The zero complex satisfies the positive assertion with the unique
isomorphism $0\to0$ in every degree. For a nonnegative complex, at degree
zero $Z_0=C_0$; the kernel case of step 3.1 gives $f=0$ directly, and no
negative-degree extension is required. For a complex supported at one
degree with group $\mathbb R$ and zero differential, evaluation is the
usual map $\mathbb R^*\to\mathbb R^*$ and is the identity. The proof
does not assume injective differentials or nonzero chain groups: all zero
and repeated maps are governed by the displayed square-zero identity.
The abstract conditional complex of step 5.1 is not asserted to be a
singular chain complex of any space. [step 1.1, step 3.1, step 5.1]
```

### Contract evidence for candidate 2

Exact cited excerpts from candidate 1: positive branch, proof 1.1,
“defines a real-linear functional $b$ on $B$” and “hence $b|_A=a$.”
Uses 2.1 and 3.1. Conditional branch, proof 6.1, “Thus restriction
$P^*\to E^*$ is not surjective.” Together with the immediately preceding
identification of ell, this is the exact input at 6.1. These are candidate
citations, to be registered only against the final identical canonical
text, not represented as already published suppliers.

Derivations: 1.1 proves both representative invariances and linearity
(square-zero and quotient definitions); 2.1 constructs a cocycle lifting
a dual homology functional (F1,1.1); 3.1 proves the zero-class equivalence
by unique descent then extension (F1,1.1); 4.1 computes the naturality
square and the quasi-isomorphism implication (1.1–3.1,chain-map identity);
5.1 computes all homology of the conditional three-term complex (given
inclusion/quotient); 6.1 computes its nonzero H^2 class and failed dual
quasi-isomorphism (F1,5.1); 7.1 checks zero, one-degree and unaugmented
endpoint conventions (1.1,3.1,5.1).

| Case | Status | Item-specific evidence |
|---|---|---|
| empty | checked | 7.1 treats the zero complex, including absence of nonzero groups, with unique zero evaluation maps. |
| zero | checked | 3.1 proves the zero-class criterion; 5.1 calculates zero homology in every degree; 6.1 exhibits a nonzero dual class. |
| one | checked | 7.1 calculates the single-degree real complex's evaluation map as identity. |
| degenerate | checked | 7.1 allows zero differentials and zero groups; 5.1 verifies square-zero directly rather than assuming a nondegenerate complex. |
| endpoints | checked | 7.1 verifies degree zero without a negative extension; 6.1 uses the zero outgoing degree-2 differential in the witness. |
| nonempty-choice | checked | 2.1 and 3.1 use AC extensions; 1.1 and 4.1 define canonical maps without choice; 5.1–6.1 inherit only DC+BP from the conditional supplier clause. |
| iff-forward | checked | 1.1 and 3.1 show every coboundary evaluates to zero on cycles. |
| iff-reverse | checked | 3.1 descends f through d_n and extends the resulting functional to prove a zero evaluation class is a coboundary under AC. |

## Candidate file 3

Destination: `items/rem-hom-of-homology-is-not-the-definition-of-singular-cohomology.md`.
Replaces original ID `cex-hom-of-homology-is-not-used-as-the-definition-of-singular-cohomology`.

```markdown
---
id: rem-hom-of-homology-is-not-the-definition-of-singular-cohomology
kind: remark
title: "Hom of homology is not the definition of singular cohomology"
status: draft
origin: pipeline
provenance: {statement: ai-altered, proof: ai-altered}
deps: [def-real-singular-chain-complex, def-real-singular-cochain-complex, def-real-singular-cohomology, def-axiom-of-choice, rem-dualizing-real-chain-complexes-requires-an-exactness-argument]
sources: {references: []}
---

## Statement

For a topological space X, real singular cohomology is defined by
$$H^n_{\mathrm{sing}}(X;\mathbb R)=
\frac{\ker(\delta^n:C^n(X;\mathbb R)\to C^{n+1}(X;\mathbb R))}
{\operatorname{im}(\delta^{n-1}:C^{n-1}(X;\mathbb R)\to C^n(X;\mathbb R))},$$
where $C^n(X;\mathbb R)=\operatorname{Hom}_{\mathbb R}(C_n(X;\mathbb R),\mathbb R)$
and $\delta f=f\circ\partial$. This definition is choice-free.
Evaluation on cycles defines a natural real-linear map
$$H^n_{\mathrm{sing}}(X;\mathbb R)\longrightarrow
\operatorname{Hom}_{\mathbb R}(H_n(X;\mathbb R),\mathbb R).$$
Under AC this map is an isomorphism, by a theorem about functional
extensions, not by the definition of singular cohomology. This distinction
does not assert a counterexample to real-coefficient evaluation under AC.

## Facts & Assumptions

[F1] The real singular chain complex is unaugmented, with
$\partial_0=0$, zero negative groups, and $\partial^2=0$
([[def-real-singular-chain-complex]]).

[F2] Cochains are real-linear functionals, with differential
$\delta^nf=f\circ\partial_{n+1}$, and their cohomology is the displayed
kernel/image quotient ([[def-real-singular-cochain-complex]],
[[def-real-singular-cohomology]]).

[F3] For a real chain complex, evaluation on cycles is well-defined and
natural without choice; under AC it is an isomorphism by extension of
functionals on cycles and boundaries
([[rem-dualizing-real-chain-complexes-requires-an-exactness-argument]],
positive branch; [[def-axiom-of-choice]]).

## Proof

1.1 By [F1], $\partial_n\partial_{n+1}=0$, and hence for every cochain
$f$ one has $\delta^{n+1}\delta^nf=f\partial_{n+1}\partial_{n+2}=0$.
Thus the image in [F2] is a vector subspace of the kernel and the quotient
exists. Both kernel and image are specified sets, and forming their
quotient makes no selection of representatives. This verifies the
choice-free definition. [F1, F2]

2.1 If $f$ is a cocycle and $z$ a cycle, set
$\varepsilon([f])([z])=f(z)$. Replacing $z$ by $z+\partial c$ changes
this value by $f(\partial c)=(\delta f)(c)=0$. Replacing $f$ by
$f+\delta g$ changes it by $g(\partial z)=0$. Addition and scalar
multiplication commute with evaluation, so it defines the claimed linear
map on the two quotients. For a continuous map $u:X\to Y$,
postcomposition on simplices commutes with each face, and hence with the
signed boundary. Its chain map $u_\#$ therefore satisfies
$f(u_\#z)=(f\circ u_\#)(z)$, which is the naturality identity on classes.
Neither construction uses AC. [F1, F2]

3.1 Assume AC for this step. Apply the positive branch of [F3] to the
real complex [F1]. Concretely, any functional on $H_n$ pulls back to the
cycles and extends to $C_n$; the extension vanishes on boundaries, so
gives a cocycle mapping to that functional. If a cocycle vanishes on
cycles, the rule $b(\partial c)=f(c)$ is well-defined on the boundary
subspace in degree $n-1$ and extends to $C_{n-1}$, giving
$f=\delta b$ after that extension. These are exactly the surjectivity
and injectivity arguments in [F3]; both use its AC extension clause.
Conversely every coboundary vanishes on cycles by step 2.1. Thus
evaluation is the asserted natural isomorphism. It is not an alternative
definition, and no global family of cochain representatives was chosen.
[F3, step 2.1]

4.1 If $X=\varnothing$, all chain and cochain groups are zero and
evaluation is the unique isomorphism between zero spaces in every degree.
If $X$ is a point, there is one simplex in every nonnegative degree and
$\partial_k$ is multiplication by $\sum_{i=0}^k(-1)^i$ for $k>0$:
it is the identity in positive even degrees and zero in odd degrees,
with $\partial_0=0$. Therefore $H_0=\mathbb R$ and $H_k=0$ for $k>0$;
dually $H^0=\mathbb R$ and $H^k=0$ for $k>0$. Evaluation in degree
zero sends the constant scalar cochain a to the functional $r\mapsto ar$,
an isomorphism without choice. In negative degrees both sides vanish.
For general X at degree zero there is no incoming coboundary, so the
injectivity argument uses no negative-degree extension. Constant and
repeated simplices are retained in these unnormalized complexes; the
representative computations in step 2.1 apply to them as written.
[F1, F2, step 2.1]
```

### Contract evidence for candidate 3

Exact citation excerpts and uses:

* F1, `def-real-singular-chain-complex`, Definition: “$\partial_k=0\quad(k\le0)$” and “Thus $\partial^2=0$ on every generator and hence on every finite chain.” Uses 1.1,2.1,4.1.
* F2, `def-real-singular-cochain-complex`, Definition: “$\delta^k\varphi=\varphi\circ\partial_{k+1}$”; `def-real-singular-cohomology`, Definition: “$H^k_{\mathrm{sing}}(X;\mathbb R)=Z^k(X;\mathbb R)/B^k(X;\mathbb R)$.” Uses 1.1,2.1,4.1. Split into two citation records if required mechanically.
* F3, candidate 2, Statement: “Under AC, evaluation on cycles gives a natural isomorphism”; exact functional extensions are proof 2.1 and 3.1. Use 3.1, positive clause only; no BP assumption propagates to this assertion.

Derivations: 1.1 verifies square-zero, image containment and choice-free
quotient (F1,F2); 2.1 checks both representative changes, linearity and
naturality (F1,F2); 3.1 verifies both isomorphism directions through the
positive extension clause (F3,2.1); 4.1 explicitly calculates empty space,
point, negative degrees and unaugmented endpoint (F1,F2,2.1).

| Case | Status | Item-specific evidence |
|---|---|---|
| empty | checked | 4.1 gives zero chain/cochain groups and unique zero evaluation for the empty space. |
| zero | checked | 3.1 characterizes the kernel as coboundaries; 4.1 checks degree-zero injectivity without a negative extension. |
| one | checked | 4.1 computes the point's alternating chain/cochain differential and degree-zero scalar pairing r maps to ar. |
| degenerate | checked | 4.1 retains constant and repeated simplices, including the point's unique degenerate simplex in positive degrees. |
| endpoints | checked | 4.1 separates positive, zero and negative degrees and uses the unaugmented boundary convention. |
| nonempty-choice | checked | 1.1 and 2.1 construct quotients/evaluation without selected representatives; only 3.1 assumes AC for the two functional extensions. |
| iff-forward | checked | 2.1 shows coboundaries vanish on cycles, so their evaluation class is zero. |
| iff-reverse | checked | 3.1 uses the fully proved positive supplier to make a cocycle vanishing on cycles a coboundary under AC. |

## Integration notes

The exact citation excerpts, actual numbered derivations and eight case
receipts above can be serialized into the fragment contract schema.
The parent should insert the renamed first and second remarks in their
existing A positions and the third in its B position. The first remark's
additional basis-extension and Baire/DC supplier edges must be reconciled
with page prerequisites by the owner, with branch-sensitive assumptions.
No Solovay, model-construction, integer-coefficient or Recorded dependency
is used. Strict item/render/contract checks have not been run on this
research-only candidate; the author integrating actual canonical files
must run them and record their actual results.

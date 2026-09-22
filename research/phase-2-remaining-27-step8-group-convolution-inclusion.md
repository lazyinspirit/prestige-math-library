# LCA example: proposed inclusion under the owner's external-result authorization

**proof uses external results not yet established in this library**

This supersedes the prior recommendation to defer the entire example. It is a
proposal only; no canonical item, shared metadata, renderer, schema or engine
file has been edited. Read SCHEMA.md's recorded-result requirements and the
current `ex-gelfand-transform-of-ell-one-of-z` and `def-gelfand-transform`.

Re-read Williams, *Lecture Notes on the Spectral Theorem*, printed p.9,
Example 3.10, cached extraction `/tmp/prestige-batch5-sources/williams.txt`,
lines 716–762. Its PDF SHA-256 is recorded in the preceding investigation and
matches the successful coverage retrieval. No new retrieval or full-document
reading is claimed. Williams states the results below but does not prove the
LCA character-classification/topology theorem in this passage. This is honest
statement backing, not proof backing. The source uses the positive-sign
character convention; retaining it avoids a gratuitous convention change.

## Minimal recommended structure

Add the recorded prerequisite immediately before an ordinary example on the
existing Gelfand A page. The example has an ordinary `deps` edge to the
recorded prerequisite: it actually uses that result in its proof. Do not use
`external_refs` instead of this dependency, since that would conceal its
load-bearing status. Keep the literal label above in the example as well as
the renderer's derived external-result indication. Do not put
`proved_here: false` on an `example`; SCHEMA requires that flag's carrier to
be a remark.

The record contains the substantial unproved analytical package. The example
proves only the elementary unitization verification and the Fourier/Gelfand
evaluation identity from that package. It does not claim to prove Haar
existence, general convolution well-definedness, all-character classification
or topology agreement. Including the entire result as one sourced remark
would be still smaller, but would record the whole theorem without any local
proof; the two-item form distinguishes the bounded local argument clearly.

The proposed item text follows. No judge stamps or unearned precheck passes
are included. Integrating agent must register ownership/contracts and perform
the normal applicable checks; this proposal itself is not a certification.

## Proposed external prerequisite: rem-lca-group-algebra-and-character-space-external

```markdown
---
id: rem-lca-group-algebra-and-character-space-external
kind: remark
title: LCA group algebra and character-space results recorded externally
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
proved_here: false
deps: [def-axiom-of-choice, def-character-and-maximal-ideal-space]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Example 3.10, printed p.9 (statements; no complete proof there)"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
external_dependency:
  source_url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
  exact_statement: "Under AC, for a locally compact Hausdorff abelian group G with a fixed nonzero Haar measure m, convolution and conjugate-reflection make A=L1(G,m;C) a commutative Banach star algebra with norm bound ||f*g||1<=||f||1||g||1; A is unital iff G is discrete. If G is nondiscrete, for the scalar unitization B=C+A every character is uniquely either h_w(z,f)=z+integral f(t)w(t)dm(t), where w:G->T is a continuous homomorphism, or q(z,f)=z; the bijection from the one-point compactification of the compact-open dual group to Delta(B), sending w to h_w and infinity to q, is a homeomorphism for the pointwise-evaluation topology."
  local_proof_attempt: "Read Williams Example 3.10 and compared existing library interfaces. Current convolution theorems concern R^n or ell1(Z); the current unitization compactification theorem assumes a C*-algebra. No complete proof of the general LCA convolution, character-classification or compact-open topology assertions is supplied here. Williams's passage states these facts without a complete proof."
  necessity: "Supplies the explicitly external analytical and spectral inputs to ex-gelfand-transform-of-l-one-of-an-lca-group; the consumer proves its elementary unitization calculation and Gelfand evaluation formula conditionally on this record."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let G be a locally
compact Hausdorff abelian group, written additively, and fix a nonzero Haar
measure m: a translation-invariant regular Borel measure, finite on compact
sets. Let A=L1(G,m;C), with functions identified when equal almost everywhere.
The following results are recorded from Williams, Example 3.10; they are not
proved in this library here.

1. The formulas
   $$(f*g)(s)=\int_G f(t)g(s-t)\,dm(t),\qquad
   f^*(s)=\overline{f(-s)}$$
   define, in the first formula almost everywhere and independently of
   representatives, a commutative Banach star algebra on A, with
   $\|f*g\|_1\le\|f\|_1\|g\|_1$ and $\|f^*\|_1=\|f\|_1$.
   Its involution is conjugate-linear, squares to the identity and reverses
   products. The algebra A has an identity if and only if G is discrete.

2. Suppose G is nondiscrete. Define the scalar unitization B=C direct-sum A
   with multiplication
   $$(z,f)(v,g)=(zv,zg+vf+f*g).$$
   Let $\widehat G$ be the continuous homomorphisms from G to
   $\mathbb T=\{z\in\mathbb C:|z|=1\}$, with uniform convergence on compact
   subsets of G. Every character of B, meaning a nonzero multiplicative
   complex-linear map to C, is uniquely one of
   $$h_w(z,f)=z+\int_G f(t)w(t)\,dm(t)\quad(w\in\widehat G),
   \qquad q(z,f)=z.$$
   With the pointwise-evaluation topology of
   [[def-character-and-maximal-ideal-space]], the map
   $\widehat G\cup\{\infty\}\to\Delta(B)$ sending w to $h_w$ and
   infinity to q is a homeomorphism from the one-point compactification of
   the compact-open dual. In particular this assertion includes the local
   compactness of that dual and the agreement of these topologies.

## Remarks

This is a recorded external prerequisite, not a locally established theorem.
No global sigma-finiteness or product-Borel identification is being assumed.
The ordinary proofs consuming this record must retain the notice
“proof uses external results not yet established in this library”.
```

## Proposed example: ex-gelfand-transform-of-l-one-of-an-lca-group

```markdown
---
id: ex-gelfand-transform-of-l-one-of-an-lca-group
kind: example
title: Fourier transform as the Gelfand transform of an LCA group algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [rem-lca-group-algebra-and-character-space-external, def-gelfand-transform, def-axiom-of-choice, thm-complex-plane-is-complete]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Example 3.10, printed p.9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Example

**proof uses external results not yet established in this library**

Assume AC. Let G be a locally compact Hausdorff abelian group with a fixed
nonzero Haar measure m. With convolution and conjugate-reflection as in
[[rem-lca-group-algebra-and-character-space-external]], the space
A=L1(G,m;C) is a commutative Banach star algebra, unital exactly when G is
discrete. These analytical assertions are external inputs.

For nondiscrete G, put B=C direct-sum A and set
$$\|(z,f)\|=|z|+\|f\|_1,\qquad
(z,f)(v,g)=(zv,zg+vf+f*g),\qquad
(z,f)^*=(\overline z,f^*).$$
Then B is a commutative unital Banach star algebra. Under the external
identification of $\Delta(B)$ with the one-point compactification of
$\widehat G$, its Gelfand transform is
$$\Gamma_B(z,f)(w)=z+\widehat f(w),\qquad
\widehat f(w)=\int_G f(t)w(t)\,dm(t),\qquad
\Gamma_B(z,f)(\infty)=z.$$
Thus the Fourier transform with this character convention is precisely the
restriction of $\Gamma_B(0,f)$ to $\widehat G$. No C*-norm assertion is made.

## Facts & Assumptions

**Given:** G, m, A and, in the nondiscrete case, B as displayed, with
[[def-axiom-of-choice]].

[F1] The L1 convolution algebra, norm and involution facts, the unit criterion,
and the complete character/topology identification for B are recorded external
results ([[rem-lca-group-algebra-and-character-space-external]]).

[F2] For a commutative unital complex algebra the Gelfand transform is
$\Gamma_B(b)(\chi)=\chi(b)$ ([[def-gelfand-transform]]).

[F3] The complex numbers are complete ([[thm-complex-plane-is-complete]]).

## Verification

1.1 Use the algebra assertions of F1. For $b=(z,f)$ and $c=(v,g)$,
$\|bc\|\le |zv|+|z|\|g\|_1+|v|\|f\|_1+\|f\|_1\|g\|_1
=(|z|+\|f\|_1)(|v|+\|g\|_1)$. A Cauchy sequence in B has Cauchy scalar
and A coordinates; completeness of C from F3 and of A from F1 makes it
converge in the sum norm. [F1, F3, given, algebra]

1.2 Bilinearity and commutativity follow from those of convolution, and
(1,0) is the identity. For b=(z,f), c=(v,g), d=(u,k), either bracketing
of bcd has scalar part zvu and A part
$zv k+zu g+vu f+z(g*k)+v(f*k)+u(f*g)+(f*g)*k$,
using convolution associativity. Thus multiplication is associative.
Conjugate-linearity, involutivity and isometry of star follow coordinatewise
from F1; expanding the product and applying $(f*g)^*=g^**f^*$ gives
$(bc)^*=c^*b^*$. This proves the claimed Banach star algebra structure.
[F1, step 1.1, given, algebra]

2.1 By F1 every character of B is one of the displayed $h_w$ or q, and the
specified parametrization has the asserted topology. These are the external
classification and topology inputs, not conclusions of steps 1.1–1.2.
Applying F2 gives
$\Gamma_B(z,f)(h_w)=h_w(z,f)=z+\widehat f(w)$ and
$\Gamma_B(z,f)(q)=q(z,f)=z$. Taking z=0 and restricting to the dual gives
the Fourier/Gelfand identity. The initial algebra and unit criterion were
also supplied by F1. [F1, F2, step 1.2, algebra] ∎
```

## Integration cautions

The example declares scalar completeness separately from the external package.
Retain the explicit AC assumption.
All ordinary local norm/algebra calculations above are elementary and checked;
the external analytical package has not been independently reconstructed.

No arbitrary nonabelian group assertion is included. The existing ell1(Z)
example remains unchanged. The proposed example is a consumer of an external
record on the same existing A page, not a supplier inferred from an unbuilt
future page. The future FR-16 planning correction should cite this result as
conditional on its recorded prerequisites, never as an unconditional locally
proved replacement for those missing foundations.

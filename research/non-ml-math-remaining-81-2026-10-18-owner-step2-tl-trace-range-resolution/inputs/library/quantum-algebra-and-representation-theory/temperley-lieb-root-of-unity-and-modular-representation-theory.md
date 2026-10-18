---
page: temperley-lieb-root-of-unity-and-modular-representation-theory
title: "Temperley–Lieb Root-of-Unity and Modular Representation Theory"
status: draft
items:
  - def-temperley-lieb-complex-critical-labels-and-reflection
  - lem-temperley-lieb-critical-standard-modules-are-simple
  - lem-temperley-lieb-zero-loop-perfect-matching-standard-module-is-simple
  - lem-temperley-lieb-annular-central-element-and-reflection-maps
  - lem-temperley-lieb-root-gram-rank-and-reflection-dimensions
  - lem-temperley-lieb-root-noncritical-radicals-and-simple-heads
  - thm-temperley-lieb-root-interstandard-hom-spaces
  - thm-temperley-lieb-root-projective-covers
  - def-temperley-lieb-spencer-digit-support
  - lem-temperley-lieb-critical-gram-unit-interval
  - lem-temperley-lieb-exact-truncation-reduces-decomposition-to-trivial-factors
  - lem-temperley-lieb-spencer-support-binomial-and-reflection-calculus
  - lem-temperley-lieb-signed-forest-candidates-and-their-composition
  - lem-temperley-lieb-support-character-carry-and-simple-extras
  - thm-temperley-lieb-spencer-decomposition-numbers-over-arbitrary-fields
  - lem-temperley-lieb-jones-wenzl-ring-descent
  - def-temperley-lieb-negligible-morphisms
  - lem-temperley-lieb-negligible-morphisms-form-tensor-ideal
  - def-temperley-lieb-negligible-quotient-category
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - def-temperley-lieb-closure-trace-and-partial-trace
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
  - lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
  - def-negligible-morphism-in-a-pivotal-category
  - lem-temperley-lieb-closure-trace-component-identities
  - lem-temperley-lieb-rank-one-tilting-character-and-dimension
  - lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series
  - lem-temperley-lieb-boundary-tensor-ideal-has-the-embedded-components
  - lem-temperley-lieb-general-theta-net-evaluation
  - lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings
  - thm-temperley-lieb-rank-one-tilting-quotient-fusion-category
  - thm-temperley-lieb-root-negligible-quotient-is-semisimple
  - thm-temperley-lieb-rank-one-pivotal-ribbon-conversion
examples: []
requires:
  - temperley-lieb-semisimplicity-and-generic-structure
  - divided-powers-integral-forms-and-quantum-highest-weights
  - yang-baxter-operators-and-quantum-braid-representations

---

This page keeps three separate subjects: complex root-of-unity standard modules, Spencer’s arbitrary-characteristic decomposition theory, and the negligible quotient/TLJ category. A result in one subject is not used to fill a proof gap in another.

Companion: [[temperley-lieb-root-of-unity-and-modular-representation-theory-examples]].

## Reading prerequisite

The controlling plan requires [[temperley-lieb-semisimplicity-and-generic-structure]]. The earlier cellularity page is useful reading context, but the current plan does not declare it as a direct requires edge.

## 1. Complex roots of unity

Fix $q\in\mathbb C^\times$, $\delta=q+q^{-1}$, rank $n\ge0$, and arc count $p$ with $0\le p\le\lfloor n/2\rfloor$; the defect count is $t=n-2p$. The critical parameter is $\kappa=\operatorname{ord}(q^2)$, kept distinct from the recurrence quantum characteristic $\ell$. In particular at $q=\pm1$, $\kappa=1$ but $\ell=\infty$. The exact critical and reflected-label conventions are [[def-temperley-lieb-complex-critical-labels-and-reflection]].

The supplied local results establish that every critical complex standard module has nondegenerate capping form and is simple ([[lem-temperley-lieb-critical-standard-modules-are-simple]]). This includes the $\kappa=1$ case and all critical labels at $\kappa=2$. The exceptional $\delta=0$, $n=2p>0$ perfect-matching standard module has identically zero ordinary form, but its actual module is simple by a separately proved renormalized-pairing and generator argument ([[lem-temperley-lieb-zero-loop-perfect-matching-standard-module-is-simple]]). Its zero form quotient is not used to infer its head.

The full complex classification is supplied by [[lem-temperley-lieb-root-noncritical-radicals-and-simple-heads]]. A noncritical standard has a simple radical at the adjacent reflected label when that label is present; otherwise its radical is zero. The nonsplit radical/head sequence gives the composition factors and reflection linkage. The separate zero-loop perfect-matching result is retained: its ordinary form quotient is zero, while its actual simple module is the neighboring nonzero simple head. The proofs include $\kappa=1,2,3$, all higher finite orders, and the non-root regime.

The explicit annular central element and induced link-state basis construct the reflection maps ([[lem-temperley-lieb-annular-central-element-and-reflection-maps]]), and the regular orthogonal Gram-block calculation gives their exact kernel/image dimensions ([[lem-temperley-lieb-root-gram-rank-and-reflection-dimensions]]). All inter-standard maps are classified in [[thm-temperley-lieb-root-interstandard-hom-spaces]], including the exceptional reverse rank-two map at $\delta=0$. Projective covers and their exact standard filtrations, together with their repeated-induction realization, are proved in [[thm-temperley-lieb-root-projective-covers]]. These are complex-field results; the separate Spencer and tilting-category statements below retain their own hypotheses.

## 2. Arbitrary characteristic and Spencer digits

For a field $K$ of characteristic $P$ (with $P=\infty$ in characteristic zero), a loop value $\delta\in K$, and recurrence quantum characteristic $\ell$, the exact digit and support-set convention is defined in [[def-temperley-lieb-spencer-digit-support]]. The support calculation in [[ex-temperley-lieb-spencer-support-digits-eleven]] is purely arithmetic.

The full Spencer composition claim is retained with its source conventions: write $S(n,m)=W_{n,m}(K,\delta)$, with the left/right convention converted by diagram reflection, for the standard module with $m$ propagating strands, and let $D(n,r)$ denote the nonzero simple cell-form quotient of $W_{n,r}$. Here $m,r$ are admissible defect labels: $0\le m,r\le n$ and $n-m,n-r$ are even. With $\operatorname{Supp}_{\ell,P}(r)$ defined from the digits of $r+1$, the claim is that $D(n,r)$ is a composition factor of $S(n,m)$ exactly when $m\in\operatorname{Supp}_{\ell,P}(r)$, with multiplicity one. The full arbitrary-field formula is proved in [[thm-temperley-lieb-spencer-decomposition-numbers-over-arbitrary-fields]], including characteristic two, the loop values $\delta=\pm2$, and the zero-form standard $W_{n,0}$ when $\delta=0$.

The separate field-level normalized Jones–Wenzl claim is also retained: over a field, index $N$ has a normalized annihilating Jones–Wenzl idempotent exactly when $N<\ell$, or when $N=a\,s_i-1$ for $i\ge1$ and a finite scale $s_i$ with $1\le a<P$. In characteristic zero this includes every $N=a\ell-1$ with $a\ge1$; when $\ell=\infty$, every finite $N$ lies in the first branch. The field criterion [[thm-temperley-lieb-spencer-jones-wenzl-existence-criterion]] is proved on its owning A page using a split integral diagram representation, the quantum-binomial existence test, and a complete digit reduction; this does not establish the separate full composition-factor classification. The separate coefficient-ring theorem [[lem-temperley-lieb-jones-wenzl-ring-descent]] proves existence over every commutative ring exactly when every polynomial quantum-binomial in the row is a unit. It proves necessity by an explicit word-space kernel and unit descent through a free quadratic extension, and sufficiency by an integral linear retraction followed by coefficient projection of the normalized annihilation equations.

The decomposition proof supplies its prerequisites locally: exact diagram truncation reduces multiplicities to trivial factors, signed forest candidates and their composition give every support factor by a submodule-functional induction, and a digit-carry recurrence with Gram-determinant units gives the upper bound. The hook weights use the argument $-\delta$ to match the positive-loop diagram convention. The separate field-level Jones–Wenzl theorem remains on its owning page, and coefficient-ring descent is supplied by [[lem-temperley-lieb-jones-wenzl-ring-descent]].

## 3. Negligible quotient and root tilting centralizers

For every complex loop value $\delta$, negligible morphisms are defined by the unnormalized closure pairing and are proved to form a two-sided composition ideal and tensor ideal ([[def-temperley-lieb-negligible-morphisms]], [[lem-temperley-lieb-negligible-morphisms-form-tensor-ideal]]). At $q=e^{\pi i/\ell}$, $\ell\ge3$, the locally defined $\mathcal{TLJ}_\ell$ is the additive idempotent completion of the quotient ([[def-temperley-lieb-negligible-quotient-category]]).

The quotient completion is semisimple with simple labels $0,\ldots,\ell-2$ represented by the retained Jones–Wenzl projectors. The complete truncated fusion rule, including both endpoints and the negligible boundary object, is proved in [[thm-temperley-lieb-root-negligible-quotient-is-semisimple]]. Its proof identifies the full embedded boundary ideal with the trace kernel through all-rank fusion paths and their nonzero pairings. The distinction between trace radical and Jacobson radical at the first boundary is retained.

The same theorem gives the dimension generating function directly. Let $A$ be the adjacency matrix of the finite path with vertices $0,\ldots,\ell-2$, and let $Q_n$ be the Jones quotient. The matrix blocks give $\dim Q_n=\sum_a((A^n)_{0a})^2=(A^{2n})_{00}$, since $A$ is symmetric. In formal power series, coefficientwise multiplication proves $(I-zA^2)\sum_{n\ge0}z^nA^{2n}=I$. Consequently
$$\sum_{n\ge0}(\dim Q_n)z^n=\bigl((I-zA^2)^{-1}\bigr)_{00}.$$
This is rational: the constant term of the determinant is $1$, and cofactor expansion gives the inverse as its adjugate divided by its determinant. No analytic convergence is assumed.


The full reduced rank-one tilting category, including all tiltings and their negligible summands, is constructed in [[def-temperley-lieb-rank-one-lusztig-tilting-category]], [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]], and [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]]. Its semisimple ribbon quotient and truncated fusion are [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]]. For every $\ell\ge3$, including even $\ell$, [[thm-temperley-lieb-rank-one-pivotal-ribbon-conversion]] identifies the positive-loop Jones quotient with the endomorphism algebra of the reduced tensor power of $\Delta(1)$ and proves the exact image and boundary kernel. The unreduced action does not kill the boundary projector.

The categorical sign convention is explicit: quantum self-duality has loop $-\delta$, the diagram category used for the full ribbon comparison is $\mathrm{TL}(-\delta)$ with its pivotal structure corrected by tensor parity, and its endomorphism algebras correspond to positive-loop TL by $U_i=-e_i$. This yields the retained pivotal dimensions and twists. No equivalence with the unmodified positive-loop unoriented pivotal category is asserted. The Iohara–Lehrer–Zhang generators $f_i$ satisfy $f_i^2=-\delta f_i$ and correspond to $d_i=-f_i$ at the algebra level. The Jones quotient and reduced centralizer remain distinct from the unreduced TL action and generic Schur–Weyl assertions.

## Scope of the results

The complex standard-module classification is over $\mathbb C$ with its stated order convention. The Spencer decomposition theorem applies over every field with the recurrence quantum characteristic; the coefficient-ring Jones–Wenzl criterion instead requires the entire polynomial quantum-binomial row to consist of units. The reduced tilting and ribbon conclusions use $q=e^{\pi i/\ell}$, $\ell\ge3$, and the signed, parity-corrected categorical convention stated above. These hypotheses are kept separate throughout the proofs.

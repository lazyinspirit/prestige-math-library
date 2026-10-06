---
id: cex-blowup-arbitrary-base-change-failure
kind: counterexample
title: "Nonflat base change of a blowup can fail"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-blowup-base-change-flat
  - def-blowup-scheme-along-ideal
  - def-rees-algebra-ideal-sheaf
  - def-base-change-morphism-schemes
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - lem-blowup-plane-origin-incidence-equations
  - thm-relative-proj-base-change
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.3 (tag 0805, flatness is needed) and its discussion of the failure"
    - title: "The Stacks Project, Commutative Algebra, Section 10.70 (Blow up algebras)"
      url: "https://stacks.math.columbia.edu/tag/052P"
      locator: "Definition 10.70.1 and Lemma 10.70.2 (tag 07Z3), affine blowup normal form"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercise 19.2.B on locality and Exercise 19.4.G on nonreduced centers, pp. 382, 392"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-2.md"
      - "research/frontier-38-owner-30-alpha-batch-2-5a.md"
      - "research/frontier-38-owner-30-step5-hash-2-post-5a.json"
    content_sha256: "65f7da72192851386889d5bcea8d338ef172358c8f64ff09195307efac8dff09"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement refuted

**False claim:** the flatness hypothesis in [[thm-blowup-base-change-flat]] can
be dropped, i.e. for every morphism $g\colon X'\to X$ and every quasi-coherent
ideal sheaf $\mathcal I$ of finite type the canonical comparison morphism
$\operatorname{Bl}_{g^{-1}\mathcal I}X'\to\operatorname{Bl}_{\mathcal I}X\times_XX'$
is an isomorphism.

## Facts & Assumptions

**Given:** The polynomial ring $A=k[x,y]$ over a field $k$, the maximal ideal
$I=(x,y)$, the quotient $g\colon A\to B=A/(y)=k[x]$, the ideal
$g^{-1}I=(x)\subseteq B$, the Rees algebras $R(I)=\bigoplus_{n\ge0}I^nt^n$ and
$R(Bx)$, the blowups $\operatorname{Bl}_I\operatorname{Spec}A$ and
$\operatorname{Bl}_{(x)}\operatorname{Spec}B$
([[def-blowup-scheme-along-ideal]],
[[def-rees-algebra-ideal-sheaf]]), and the base change
$\operatorname{Bl}_I\operatorname{Spec}A\times_{\operatorname{Spec}A}\operatorname{Spec}B$
([[def-base-change-morphism-schemes]]).

[F1] [[lem-blowup-plane-origin-incidence-equations]]: With homogeneous
coordinates $u,v$ on $\mathbb P^1_k$, the blowup of $\mathbb A^2_k$ at the
origin is $V(xv-yu)\subseteq\operatorname{Spec}A\times\mathbb P^1_k$, and its
two charts are $\operatorname{Spec}k[x,T]$ with $T=v/u$, $y=xT$, and
$\operatorname{Spec}k[y,U]$ with $U=u/v$, $x=yU$, glued by $TU=1$.

[F2] [[thm-affine-blowup-standard-charts]] and
[[lem-affine-blowup-algebra-properties]]: The standard charts of a blowup
$\operatorname{Bl}_{(f)}\operatorname{Spec}C$ along a principal ideal generated
by a nonzerodivisor $f$ are the spectra of the affine blowup algebras
$C[(f)/f]=C$; they cover the blowup.

[F3] [[thm-relative-proj-base-change]]: The relative Proj base changes
canonically along arbitrary morphisms, so
$\operatorname{Bl}_I\operatorname{Spec}A\times_{\operatorname{Spec}A}\operatorname{Spec}B
=\operatorname{Proj}_B\bigl(g^*R(I)\bigr)$, and a morphism of graded algebras
$g^*R(I)\to R(g^{-1}I)$ induces the canonical comparison morphism of the Proj
schemes.

[F4] [[def-flat-and-faithfully-flat-modules-and-ring-maps]]: A ring map is
flat when the target is flat as a module over the source, i.e. when tensoring
by it preserves exact sequences.

## Counterexample

1.1 The quotient $g\colon A\to B=A/(y)$ is not flat: the sequence $0\to A\xrightarrow{\cdot y}A\to B\to0$ is exact because $y$ is a nonzerodivisor of the polynomial ring $A$, so if $B$ were flat over $A$ the sequence $0\to B\xrightarrow{\cdot y}B\to B\to0$ would be exact by [F4]; but $y=0$ in $B$, so the first map is the zero map with kernel $B=k[x]\ne0$, and injectivity of the first map would force $B=0$, a contradiction. [F4]

1.2 The comparison of Rees algebras is not an isomorphism. Its degree-two source is $I^2\otimes_AB=I^2/yI^2$. The class of $xy$ is nonzero: if $xy=yh$ with $h\in I^2$, cancellation of $y$ in $A$ would give $x=h\in I^2$, a contradiction. It maps to zero in $(IB)^2=(x)^2B$ and is killed by $x$, since $x^2y\in yI^2$. Thus it is a nonzero torsion kernel class. The generators $x^2,xy,y^2$ are not an $A$-basis; no freeness of $I^2$ is used. [given]

1.3 The source $\operatorname{Bl}_{(x)}\operatorname{Spec}B$ is $\operatorname{Spec}B$: the pullback ideal $(x)\subseteq k[x]$ is principal generated by the nonzerodivisor $x$, and by [F2] its single standard chart is $\operatorname{Spec}B[(x)/x]=\operatorname{Spec}B$; since that chart covers the blowup, the blowup is the identity on $\operatorname{Spec}B$. [F2]

1.4 By relative Proj base change the target is $T=\operatorname{Proj}_B(B\otimes_AR(I))$. The incidence presentation identifies it with $V(xv)\subset\mathbb P^1_B$. Its two components are the section $V(v)\cong\operatorname{Spec}B$ and the closed fiber $V(x)\cong\mathbb P^1_k$ over the origin. On $D_+(u)$ the ring is $k[x,T]/(xT)$, with component ideals $(T)$ and $(x)$ and their intersection point $(x,T)$. The other chart is $k[U]$ with $x=0$, extending the latter affine-line piece to $\mathbb P^1_k$ and adding no further component. Thus the target has two irreducible components. [F1, F3]

2.1 The canonical comparison sends the ratio $T=y/x$ to zero on the first chart, so its image is the section $V(v)$. Its source is $\operatorname{Spec}B$ by step 1.3. The source fiber over $x=0$ is $\operatorname{Spec}k$, while the target fiber is $\mathbb P^1_k$ by step 1.4; hence this morphism over $\operatorname{Spec}B$ is not an isomorphism. This proves the failure without flatness, independently of any assertion that the degree-two generators form a basis. [F1, F3, step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Remarks

- The failure is visible already in degree two of the Rees algebras, where the
  relation $xy=0$ in $B$ cuts the quotient $I^2\otimes_AB$ down to
  $(x)^2B$; the lost degree is exactly the torsion of the base change of the
  Rees algebra.
- Geometrically, the source keeps only the strict transform of the axis,
  whereas the base-changed target retains the whole exceptional curve over the
  origin as an additional irreducible component.

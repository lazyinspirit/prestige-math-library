---
id: ex-plane-cubic-canonical-trivial
kind: example
title: "Adjunction on a smooth plane cubic: the canonical bundle is trivial"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-degree-three-line-bundle-embeds-genus-one-plane-cubic
  - cor-degree-zero-line-bundle-section-trivial
  - cor-genus-degree-smooth-plane-curve
  - cor-h0-canonical-differentials-genus
  - def-axiom-of-choice
  - def-complete-linear-system
  - def-dependent-choice
  - def-canonical-line-bundle-curve
  - def-degree-divisor-proper-curve
  - def-degree-projective-hypersurface
  - def-invertible-sheaf
  - def-relative-projective-space-standard-charts
  - thm-base-point-free-linear-system-morphism
  - thm-adjunction-smooth-plane-curve
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-genus-one-canonical-bundle-trivial
  - thm-line-bundle-rational-section-cartier-divisor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02

---

## Example

Assume the Axiom of Choice; it supplies Dependent Choice through
[[thm-choice-implies-dependent-implies-countable-choice]].
Let $k$ be a field and let $C=V_+(F)\subseteq\mathbb P^2_k$ be a smooth plane
cubic: a smooth projective plane curve of degree $d=3$, so $C$ is a smooth
projective geometrically integral curve over $k$.

Adjunction for smooth plane curves gives
$$\omega_C\cong\mathcal O_C(d-3)=\mathcal O_C(0)=\mathcal O_C,$$
and the genus formula gives $g(C)=(d-1)(d-2)/2=1$, consistently with
$\deg_k\omega_C=d(d-3)=0=2g-2$. Since $h^0(C,\omega_C)=g=1$ and $\omega_C$ has
degree $0$ with a nonzero global section, $\omega_C$ is trivial; equivalently,
every canonical divisor of $C$ is a principal divisor, and the canonical class
is the zero element of $\operatorname{Pic}^0(C)$.

The complete canonical linear system therefore has dimension $0$ and its
associated canonical morphism has target $\mathbb P^0_k$. Thus the complete
canonical linear system has no positive-dimensional projective target. This is
the exceptional case of the genus-one behaviour: the degree-three line bundle
$\mathcal O_C(3p_0)$ at a
$k$-rational point $p_0$ is what embeds such a curve as a plane cubic,
conversely to the computation above.

## Facts & Assumptions

**Given:** the Axiom of Choice and its consequence Dependent Choice; a field
$k$ and a smooth plane cubic $C=V_+(F)\subseteq\mathbb P^2_k$ of degree
$d=3$.

[F1] For a smooth plane curve $C=V_+(F)\subseteq\mathbb P^2_k$ of degree $d$,
adjunction gives $\omega_C\cong\mathcal O_C(d-3)$, and the genus is
$(d-1)(d-2)/2$; the degree of the degree-$d$ hypersurface is
$\deg F=d$. ([[thm-adjunction-smooth-plane-curve]],
[[cor-genus-degree-smooth-plane-curve]], [[def-degree-projective-hypersurface]])

[F2] For a smooth proper geometrically integral curve of genus $g$,
$\deg_k\omega_C=2g-2$ and $h^0(C,\omega_C)=g$, with
$\omega_C=\mathcal O_C(K_C)$ the canonical bundle.
([[cor-canonical-degree-two-g-minus-two]],
[[cor-h0-canonical-differentials-genus]],
[[def-canonical-line-bundle-curve]], [[def-degree-divisor-proper-curve]])

[F3] An invertible sheaf of degree $0$ on a smooth proper curve that has a
nonzero global section is trivial; equivalently, an effective divisor of degree
$0$ is $0$, so a degree-zero divisor whose sheaf has a section is principal.
([[cor-degree-zero-line-bundle-section-trivial]],
[[thm-line-bundle-rational-section-cartier-divisor]], [[def-invertible-sheaf]])

[F4] A genus-one curve over $k$ with a $k$-rational point $p_0$ embeds as a
smooth plane cubic via the degree-three very ample invertible sheaf
$\mathcal O_C(3p_0)$; and on a genus-one curve the canonical bundle is trivial.
([[cor-degree-three-line-bundle-embeds-genus-one-plane-cubic]],
[[thm-genus-one-canonical-bundle-trivial]])

[F5] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F6] In ZF, the Axiom of Choice implies Dependent Choice; this supplies the
Dependent Choice premise of the Cartier-to-Weil dictionary used in [F3] and
the cited genus-one and degree suppliers. ([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-dependent-choice]])

## Verification

**Proof technique:** specialize adjunction and the genus formula to $d=3$, then
apply the degree-zero triviality criterion.

1.1 By [F1] with $d=3$, $\omega_C\cong\mathcal O_C(0)=\mathcal O_C$ and $g(C)=(3-1)(3-2)/2=1$. [F1]

2.1 By [F2] with $g=1$, $\deg_k\omega_C=0$ and $h^0(C,\omega_C)=g=1$; the unique one-dimensional space of sections is nonzero, so [F3] applies to the degree-zero invertible sheaf $\omega_C$ and shows $\omega_C\cong\mathcal O_C$; equivalently every canonical divisor is principal and the canonical class is $0$ in $\operatorname{Pic}^0(C)$. [F2, F3, step 1.1]

2.2 Conversely, if $C$ is a genus-one curve over $k$ with a $k$-rational point $p_0$, then $\mathcal O_C(3p_0)$ has degree $3=2g+1$, so by [F4] it is very ample and embeds $C$ as a plane cubic; thus every genus-one curve with a rational point has a smooth plane-cubic model. The forward calculation applies to every smooth plane cubic without assuming a rational point: its canonical class is zero in $\operatorname{Pic}^0$. This proves the stated converse implication and does not imply that every smooth plane cubic has a rational point. [F4, step 1.1]

3.1 Since $h^0(C,\omega_C)=1$, the complete canonical linear system has dimension $\ell(K_C)-1=0$ and its associated complete canonical morphism has target $\mathbb P^0_k$; it supplies no positive-dimensional canonical target. This matches the direct computation $\omega_C\cong\mathcal O_C$ of Step 2.1 and the general genus-one statement [F4]. [F2, F4, step 2.1]

4.1 The Axiom of Choice is used through the cohomology, degree, and divisor suppliers; [F6] supplies the Dependent Choice premise used by the Cartier-to-Weil divisor dictionary. [F5, F6, F1, F2, F3, F4, step 2.2] ∎

---
id: prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant
kind: proposition
title: "The associated variety is a closed conical coadjoint-invariant cone"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-associated-graded-variety-of-a-two-sided-ideal, lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal, thm-classical-affine-zero-loci-form-zariski-closed-sets, def-classical-affine-algebraic-set-with-empty-boundaries, lem-exponential-series-has-infinite-radius, cor-complex-power-series-sums-have-derivatives-of-all-orders, cor-complex-power-series-sums-are-analytic, thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition, thm-complex-analytic-functions-are-holomorphic, thm-taylor-expansion-holomorphic-function, thm-chain-rule-for-complex-derivatives, thm-algebra-of-complex-derivatives]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 3.3, printed pp.10-11"
    - title: "D. A. Vogan, The orbit method and primitive ideals for semisimple Lie algebras (CMS Conf. Proc. 1986)"
      url: "https://math.mit.edu/~dav/vogan86CMS.pdf"
      locator: "Section 3"
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra and let
$I\subseteq U(\mathfrak g)$ be a two-sided ideal. Then
$\mathcal V(I)\subseteq\mathfrak g^*$ is a closed cone: for $\xi\in\mathcal V(I)$
and $t\in\mathbb C$ one has $t\xi\in\mathcal V(I)$. Moreover $\mathcal V(I)$ is
invariant under the coadjoint action: for every $x\in\mathfrak g$ and
$\xi\in\mathcal V(I)$ the curve $t\mapsto\xi\circ e^{-t\operatorname{ad}_x}$
(using the matrix exponential on $\mathfrak g$, whose dual maps form a
one-parameter group of linear automorphisms of $\mathfrak g^*$) stays inside $\mathcal V(I)$. In particular
the same conclusions hold for every primitive ideal.

## Facts & Assumptions

**Given:** A finite-dimensional complex Lie algebra $\mathfrak g$, a two-sided ideal $I\mathrel{\trianglelefteq}U(\mathfrak g)$, the associated graded ideal $\operatorname{gr}I\subseteq S(\mathfrak g)=\mathbb C[\mathfrak g^*]$, and the associated variety $\mathcal V(I)=\{\xi\in\mathfrak g^*:f(\xi)=0\text{ for all }f\in\operatorname{gr}I\}$.

[F1] $\mathcal V(I)$ is the zero locus of the family $\operatorname{gr}I$ in the polynomial algebra on $\mathfrak g^*$, hence a Zariski closed classical affine algebraic set; $\operatorname{gr}I$ is a graded ideal of $S(\mathfrak g)$ ([[def-associated-graded-variety-of-a-two-sided-ideal]], [[thm-classical-affine-zero-loci-form-zariski-closed-sets]], [[def-classical-affine-algebraic-set-with-empty-boundaries]]).

[F2] For every $x\in\mathfrak g$, the derivation $D_x$ of $S(\mathfrak g)$ extending $y\mapsto[x,y]$ satisfies $D_x(\operatorname{gr}I)\subseteq\operatorname{gr}I$; hence $D_x^k(\operatorname{gr}I)\subseteq\operatorname{gr}I$ for all $k\ge0$ ([[lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal]]).

[F3] Fix a basis of $\mathfrak g$ and use its maximum-coordinate norm and the induced submultiplicative operator norm on $\operatorname{End}(\mathfrak g)$. The exponential series for $-t\operatorname{ad}_x$ is dominated on every compact $t$-disc by the scalar series $\sum_{k\ge0}(|t|\|\operatorname{ad}_x\|)^k/k!$, which converges for every $t$ ([[lem-exponential-series-has-infinite-radius]]); it therefore converges locally uniformly, may be differentiated termwise, and has entire matrix entries ([[cor-complex-power-series-sums-have-derivatives-of-all-orders]], [[cor-complex-power-series-sums-are-analytic]], [[thm-complex-analytic-functions-are-holomorphic]]). Composing those entries with the polynomial $f$ and evaluating at $\xi$ shows $\varphi(t)=f(\xi\circ e^{-t\operatorname{ad}_x})$ is entire ([[thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition]]). Put $E(t)=e^{-t\operatorname{ad}_x}$ and $\xi_t=\xi\circ E(t)$. Termwise differentiation gives $E'(t)=-E(t)\operatorname{ad}_x$. On a linear polynomial $y\in\mathfrak g$, this yields $\frac{d}{dt}y(\xi_t)=-(D_xy)(\xi_t)$; the product and sum rules extend the identity to every polynomial. Iteration gives $\varphi^{(k)}(0)=(-1)^k(D_x^kf)(\xi)$ ([[thm-algebra-of-complex-derivatives]]). Absolute convergence permits multiplying the exponential series entrywise; collecting total degree and using the binomial formula gives $E(s)E(t)=E(s+t)$, so $E(0)=1$ and $E(-t)=E(t)^{-1}$. Thus the dual maps $\xi\mapsto\xi_t$ form the asserted one-parameter group. Finally, an entire function is equal on $\mathbb C$ to its Taylor series at $0$, so if all these derivatives vanish then $\varphi\equiv0$ ([[thm-taylor-expansion-holomorphic-function]]).

## Proof

**Proof technique:** direct.

1.1 That $\mathcal V(I)$ is closed is [F1]. For the cone property, write an arbitrary $f\in\operatorname{gr}I$ as a finite sum $f=\sum_df_d$ of its homogeneous components $f_d\in\operatorname{gr}I$ of degree $d$, which lie in $\operatorname{gr}I$ because it is graded. For $t\in\mathbb C$ and $\xi\in\mathcal V(I)$ one has $f_d(t\xi)=t^df_d(\xi)=0$: by homogeneity for $d>0$, while for $d=0$ the degree-zero part of $\operatorname{gr}I$ is $0$ whenever $I$ is proper, since $(I\cap F^0U(\mathfrak g))/0=I\cap\mathbb C\cdot1=0$; if $I=U(\mathfrak g)$ then $\operatorname{gr}I=\operatorname{gr}U(\mathfrak g)$ contains $1$ and $\mathcal V(I)=\varnothing$, so the assertion is vacuous. Hence $f(t\xi)=0$ for every $f$, that is $t\xi\in\mathcal V(I)$. [F1, given, algebra]

1.2 Let $x\in\mathfrak g$, $\xi\in\mathcal V(I)$ and $f\in\operatorname{gr}I$ homogeneous, and put $\varphi(t)=f(\xi\circ e^{-t\operatorname{ad}_x})$. By [F2] each $D_x^kf$ lies in $\operatorname{gr}I$, so [F3] gives $\varphi^{(k)}(0)=(-1)^k(D_x^kf)(\xi)=0$ for every $k\ge0$. By [F3] again $\varphi$ is entire, so $\varphi\equiv0$; as $f$ was an arbitrary homogeneous element of $\operatorname{gr}I$, the whole curve $t\mapsto\xi\circ e^{-t\operatorname{ad}_x}$ lies in $\mathcal V(I)$. [F2, F3, algebra]

2.1 Every primitive ideal of $U(\mathfrak g)$ is a two-sided ideal, so steps 1.1 and 1.2 apply to it; no primitivity-specific hypothesis is used in the argument, and the same conclusions therefore hold for every primitive ideal. [given, step 1.1, step 1.2] ∎

## Remarks

- **Only the ideal property and the derivation invariance enter.** Closedness comes from the definition of the associated variety as a zero locus, conicality from gradedness of $\operatorname{gr}I$, and coadjoint invariance from the derivation invariance $D_x(\operatorname{gr}I)\subseteq\operatorname{gr}I$. Nothing about primitivity, semisimplicity, or nilpotent orbits is used; the deep Borho-Brylinski/Joseph statement that this cone is a single nilpotent orbit closure is not asserted here.
- **The exponential curve.** The statement is about the orbit of $\xi$ under the one-parameter group $t\mapsto e^{-t\operatorname{ad}_x}$ in the linear automorphism group of $\mathfrak g$, transported to $\mathfrak g^*$ by duality; the analytic input is the convergence of the finite-dimensional exponential series, recorded in [F3].

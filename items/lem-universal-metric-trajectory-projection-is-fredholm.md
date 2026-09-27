---
id: lem-universal-metric-trajectory-projection-is-fredholm
kind: lemma
title: "The universal metric--trajectory projection is Fredholm"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, def-parametrized-morse-trajectory-space, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian, lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, cor-finite-dimensional-subspaces-are-complemented, thm-bounded-inverse-theorem, thm-implicit-function-theorem-for-banach-spaces]
proof_strategy: direct
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Lemmas 2.23--2.24"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. Let $M$ be a closed smooth manifold, let
$f:M\to\mathbb R$ be a smooth Morse function, and fix distinct critical
points $p,q$. Let $h\ge3$ be finite, fix a smooth reference metric $g_0$
and disjoint sufficiently small closed neighbourhoods of the critical
points, and let $\mathcal G^h$ be the open Banach manifold of positive
$C^h$ metrics agreeing with $g_0$ on those neighbourhoods. Near every
nonconstant negative-gradient trajectory from $p$ to $q$, the zero set of
the universal gradient-flow section is a $C^{h-1}$ Banach manifold. Its
projection to $\mathcal G^h$ is Fredholm of index
$\lambda(p)-\lambda(q)$. The free time-translation quotient of this
zero set is a Banach manifold, and its induced projection is Fredholm of
index $\lambda(p)-\lambda(q)-1$. If no such trajectory exists, the
claims about its zero set are vacuous.

## Facts & Assumptions

**Given:** AC, the compact $M$, smooth Morse $f$, distinct $p,q$, finite
$h\ge3$, and the fixed-near-critical metric Banach manifold in the statement.

[F1] The fixed-metric linearized operator on $E=C^1_0$ and $F=C^0_0$ is
bounded Fredholm of index $\lambda(p)-\lambda(q)$
([[lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator]]).

[F2] Fredholm maps and their indices have the stated Banach-manifold meaning ([[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]]).

[F3] Linear matrix ODEs have invertible fundamental matrices on finite
intervals ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[F4] A finite-dimensional kernel of a bounded Banach-space operator has a
bounded complement, and a bounded bijection between Banach spaces has a
bounded inverse under the assumed AC
([[cor-finite-dimensional-subspaces-are-complemented]],
[[thm-bounded-inverse-theorem]], [[def-axiom-of-choice]]).

[F5] The Banach implicit-function theorem applies to a $C^{h-1}$ map
with an invertible derivative in a complemented variable
([[thm-implicit-function-theorem-for-banach-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The affine space of $C^h$ symmetric tensors vanishing on the specified critical neighbourhoods is a closed Banach subspace $K$ of the $C^h$ tensor space on compact $M$. Positivity is open, giving $\mathcal G^h$. Near a connecting trajectory $\gamma$, use a fixed smooth background exponential map to represent nearby curves as small sections of $E=C^1_0(\mathbb R,\gamma^*TM)$, and parallel transport to identify their equation values with $F=C^0_0(\mathbb R,\gamma^*TM)$. The resulting universal section is $\Psi(g,\eta)=\dot\eta+\operatorname{grad}_g f(\eta)$ in these charts. It is $C^{h-1}$: on the compact target $M$, derivatives of the finite-dimensional exponential and gradient maps through order $h-1$ are uniformly bounded, so their Taylor remainders are uniform in the supremum norms; tensor variations vanish on the critical neighbourhoods and curve variations decay at both ends, so every derivative takes values in $F$. [given, algebra]

2.1 At a zero $(g,\gamma)$, differentiation gives $L(k,\xi)=Ak+D_\gamma\xi$, where $D_\gamma$ is [F1] and $Ak=-g^{-1}k(\operatorname{grad}_g f,\cdot)$ along $\gamma$. The tensor term follows by differentiating $g^{-1}$: $\delta(g^{-1})=-g^{-1}kg^{-1}$. Since $D_\gamma$ is Fredholm, its range $R$ is closed and its quotient $Q=F/R$ is finite-dimensional. To prove $L$ onto it suffices to prove that the image of $A:K\to F$ spans $Q$. [F1, step 1.1, algebra]

3.1 Suppose $A(K)$ did not span $Q$. A nonzero functional on the finite-dimensional quotient annihilating its image would lift to a nonzero bounded $\ell\in F^*$ with $\ell D_\gamma=0$ and $\ell A=0$. In a parallel frame write $D_\gamma z=z'+H(t)z$, and let $\Phi'=-H\Phi$, $\Phi(0)=I$. By [F3], $\Phi(t)$ is invertible for every finite $t$. For any compactly supported continuous vector function $\psi$ with $\int\psi=0$, its compactly supported $C^1$ primitive $v(t)=\int_{-\infty}^t\psi(s)ds$ satisfies $D_\gamma(\Phi v)=\Phi\psi$, so $\ell(\Phi\psi)=0$. Subtracting a fixed compactly supported scalar function of integral one shows that $\ell(\Phi\psi)=c\cdot\int\psi$ for a fixed vector $c$. Hence on compactly supported $w$, $\ell(w)=\int a(t)\cdot w(t)dt$ with $a(t)=\Phi(t)^{-T}c$. Compactly supported functions are dense in $F$, so $c\ne0$; thus $a(t)$ is continuous and nowhere zero. [F3, step 2.1, algebra]

4.1 Since $p\ne q$, strict descent makes $\gamma$ injective and gives a point $x=\gamma(t_0)$ outside the fixed critical neighbourhoods with $v=\operatorname{grad}_g f(x)\ne0$. A small regular-value slab about $f(x)$ meets this orbit only in a short compact time interval. For any target vector $b$ a symmetric endomorphism sending $v$ to $b$ is $$B=\frac{b\otimes v+v\otimes b}{|v|^2}-\frac{\langle b,v\rangle}{|v|^4}v\otimes v.$$ Choose a tensor $k_0$ at $x$ for which $a(t_0)\cdot Ak_0>0$, extend it smoothly, and multiply by a nonnegative bump supported in a small ball inside the slab. Shrinking the ball preserves nonnegative pairing along the entire short orbit segment and positive pairing near $t_0$. The resulting $k\in K$ has $Ak$ compactly supported along $\gamma$ and $\ell(Ak)=\int a\cdot Ak>0$, contradicting $\ell A=0$. Thus $A(K)$ spans $Q$ and $L$ is onto. [step 2.1, step 3.1, algebra]

5.1 Choose finitely many tensors whose $A$-images form a basis of $Q$, giving a bounded lift $J:Q\to K$ with $\pi_QAJ=I_Q$. By [F4] split $E=\ker D_\gamma\oplus E_1$, and let $B_R:R\to E_1$ be the bounded inverse of $D_\gamma|_{E_1}$. Then $$S(w)=\bigl(J\pi_Qw,\ B_R(w-AJ\pi_Qw)\bigr)$$ is a bounded right inverse of $L$. Consequently $I-SL$ is a bounded projection onto $\ker L$, and [F5] makes the local universal zero set a $C^{h-1}$ Banach manifold with tangent $\ker L$. For the projection $\pi(g,\gamma)=g$, its tangent kernel is $\ker D_\gamma$ and its image is $\ker(\pi_QA)$, a closed subspace of codimension $\dim Q$. Therefore $d\pi$ is Fredholm with index $\dim\ker D_\gamma-\dim Q=\lambda(p)-\lambda(q)$ by [F1]. [F1, F2, F4, F5, step 4.1, algebra]

6.1 Time translation of a nonconstant trajectory is free because $f\circ\gamma$ is strictly decreasing. Fix any $c$ with $f(q)<c<f(p)$. Each connecting trajectory crosses $f=c$ exactly once, and at that crossing $\frac d{dt}f(\gamma(t))=-|\operatorname{grad}_g f|_g^2<0$. Evaluation $\gamma\mapsto f(\gamma(0))$ is $C^{h-1}$ in the trajectory charts. The ordinary implicit-function theorem therefore gives a local $C^{h-1}$ slice $f(\gamma(0))=c$ transverse to the translation direction $\dot\gamma\in\ker D_\gamma$. Since solutions of the $C^{h-1}$ gradient ODE depend smoothly on initial data and time on compact intervals, translating solutions to their unique crossing varies smoothly in these zero-set charts. The slices are compatible and identify the free translation quotient with a Banach manifold. Its projection to $\mathcal G^h$ is the restriction of $\pi$ to a codimension-one tangent hyperplane that removes the one-dimensional translation line from $\ker d\pi$ while leaving the image of $d\pi$ unchanged. Its Fredholm index is therefore $\lambda(p)-\lambda(q)-1$. [F1, F2, step 5.1, algebra] ∎

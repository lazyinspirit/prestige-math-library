---
id: cex-o-minus-one-no-global-generators
kind: counterexample
title: "O(-1) has no global generator"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-globally-generated-sheaf
  - thm-twisting-sheaf-invertible-standard-graded
  - thm-projective-space-as-proj
  - def-twisting-sheaf-proj
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Counterexample

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and let $\mathcal O(-1)$ be the twisting sheaf on
$\mathbb P^1_k=\operatorname{Proj}k[x_0,x_1]$
([[thm-twisting-sheaf-invertible-standard-graded]],
[[thm-projective-space-as-proj]]). Then
$$\Gamma\bigl(\mathbb P^1_k,\mathcal O(-1)\bigr)=0,$$
so the evaluation morphism
$$\Gamma(\mathbb P^1_k,\mathcal O(-1))\otimes_{\mathbb Z}\mathcal O_{\mathbb P^1_k}\longrightarrow\mathcal O(-1)$$
is the zero morphism, which is not surjective because $\mathcal O(-1)$ is a
nonzero sheaf. Hence $\mathcal O(-1)$ is **not globally generated**
([[def-globally-generated-sheaf]]), even though it is invertible.

## Facts & Assumptions

**Given:** The Axiom of Choice, A field $k$, the graded ring $S=k[x_0,x_1]$ with $\deg x_i=1$, the scheme $\mathbb P^1_k=\operatorname{Proj}S$ with charts $U_0=D_+(x_0)$, $U_1=D_+(x_1)$, and the sheaf $\mathcal O(-1)=\widetilde{S(-1)}$.

[F1] $U_0=\operatorname{Spec}k[t]$ with $t=x_1/x_0$ and $U_1=\operatorname{Spec}k[t^{-1}]$; the overlap is $D_+(x_0x_1)=\operatorname{Spec}k[t,t^{-1}]$, and restriction of sections is the canonical localisation. ([[thm-projective-space-as-proj]], [[def-twisting-sheaf-proj]])

[F2] On $U_0$ one has $\Gamma(U_0,\mathcal O(-1))=S(-1)_{(x_0)}=k[t]\cdot x_0^{-1}$ and on $U_1$ one has $\Gamma(U_1,\mathcal O(-1))=S(-1)_{(x_1)}=k[t^{-1}]\cdot x_1^{-1}$: in the localisation, $x_0^{-1}$ and $x_1^{-1}$ are units of degree $(-1)$, with $x_1^{-1}=t^{-1}x_0^{-1}$. ([[def-twisting-sheaf-proj]])

[F3] $\mathcal O(-1)$ is invertible, in particular nonzero on the nonempty scheme $\mathbb P^1_k$: its restriction to $U_i$ is free of rank one with frame $x_i^{-1}$. ([[thm-twisting-sheaf-invertible-standard-graded]])

[F4] A global section of a sheaf on $\mathbb P^1_k$ is exactly a pair of chartwise sections on $U_0$ and $U_1$ whose restrictions to $U_0\cap U_1$ agree; the global section is zero exactly when both chartwise sections are zero. ([[def-twisting-sheaf-proj]])

[F5] A sheaf $M$ is globally generated if the evaluation morphism $\Gamma(X,M)\otimes_{\mathbb Z}\mathcal O_X\to M$ is surjective; the zero morphism out of a zero module is not surjective onto a sheaf with a nonzero stalk. ([[def-globally-generated-sheaf]])

[F6] The Axiom of Choice is the choice-function principle ([[def-axiom-of-choice]]). It licenses the AC-qualified supplier used at step 1.1.

## Refutation

**Proof technique:** direct: compute both chartwise modules of global sections of $\mathcal O(-1)$ and show that agreement on the overlap forces both to vanish.

1.1 A global section has two chart expressions. Let $s\in\Gamma(\mathbb P^1_k,\mathcal O(-1))$. Under the AC premise [F6], by [F2] its restriction to $U_0$ has the form $s_0=a(t)\,x_0^{-1}$ with $a\in k[t]$, and its restriction to $U_1$ has the form $s_1=b(t^{-1})\,x_1^{-1}$ with $b\in k[t^{-1}]$; these are finite polynomials $a(t)=\sum_{m\ge0}\alpha_mt^m$ and $b(u)=\sum_{m\ge0}\beta_mu^m$ with $u=t^{-1}$. [F1, F2, F6]
1.2 Agreement on the overlap. By [F4] the two expressions agree on $U_0\cap U_1$, where $x_1=tx_0$ is invertible. Substituting $x_1^{-1}=t^{-1}x_0^{-1}$ turns the agreement into the identity $$b(t^{-1})=t\,a(t)$$ in $k[t,t^{-1}]$. The right-hand side is a finite sum of monomials $t^{m+1}$ with $m\ge0$, so it involves only strictly positive powers of $t$; the left-hand side $\sum_{m\ge0}\beta_mt^{-m}$ involves only nonpositive powers of $t$. Comparing coefficients in the basis $\{t^j:j\in\mathbb Z\}$ of $k[t,t^{-1}]$ gives $\alpha_m=0$ for all $m$ and $\beta_m=0$ for all $m$. [F1, F2, algebra]
2.1 Vanishing of all global sections. By step 1.1 every global section is given by its two chart expressions, and by step 1.2 those expressions have $a=0$ and $b=0$; hence $s_0=0$ and $s_1=0$, so $s=0$ by [F4]. Therefore $\Gamma(\mathbb P^1_k,\mathcal O(-1))=0$. [F2, F4, step 1.1, step 1.2]
3.1 Failure of global generation. With $\Gamma(\mathbb P^1_k,\mathcal O(-1))=0$ the evaluation morphism of [F5] is the zero morphism; since $\mathcal O(-1)$ is invertible and $\mathbb P^1_k\neq\varnothing$, it has a nonzero stalk at every point and the zero morphism is not surjective. Hence $\mathcal O(-1)$ is not globally generated, although it is invertible by [F3]. This is the standard contrast with the positive twists: $\mathcal O(1)$ is generated by its two coordinate sections $x_0,x_1$. [F3, F5, step 2.1]
\qed

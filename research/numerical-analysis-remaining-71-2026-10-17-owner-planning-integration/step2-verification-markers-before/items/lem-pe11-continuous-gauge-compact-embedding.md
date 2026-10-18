---
id: lem-pe11-continuous-gauge-compact-embedding
kind: lemma
title: Compact embedding and curl Poincare inequality for the continuous PEC quotient
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-na-pe11-maxwell-cavity-eigenproblem
  - def-na-hcurl-space
  - def-na-zero-tangential-hcurl
  - def-wkp-zero-as-a-sobolev-closure
  - thm-na-regular-decomposition-zero-tangential-hcurl
  - thm-rellich-compactness-from-w-one-p-zero-to-lp
  - lem-pe11-hcurl-weak-limit
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Peter Monk, Finite Element Methods for Maxwell's Equations, Oxford University Press, 2003
      url: https://djvu.online/file/jcJa2PquKRPxA
      locator: "§4.4.1, Theorem 4.7 and Corollary 4.8: continuous Maxwell compactness and the associated Poincare estimate."
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving, ETH Research Report 2019-18
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
      locator: "§2.1, Theorem 2 and proof, printed pp. 3–8: the H(curl) regular decomposition and its stated domain and boundary assumptions."
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Let
$\Omega\subset\mathbb R^3$ be a bounded contractible Lipschitz polyhedron
with connected boundary, and let $X$ be the full-kernel orthogonal gauge of
[[def-na-pe11-maxwell-cavity-eigenproblem]]. Every sequence in $X$ bounded in
$H(\operatorname{curl};\Omega)$ has a subsequence converging strongly in
$L^2(\Omega;\mathbb R^3)$. Equivalently, the inclusion of $X$, with its
$H(\operatorname{curl})$ graph norm, into $L^2$ is compact. Moreover there
is a constant $C_\Omega$ such that
$$\|u\|_{L^2(\Omega)}\le C_\Omega\|\operatorname{curl}u\|_{L^2(\Omega)} \qquad(u\in X).$$
Thus the curl form is coercive on $X$ in its $H(\operatorname{curl})$ graph
norm.

## Facts & Assumptions

**Given:** the three stated choice axioms, the domain, the constant $\epsilon>0$ from the Maxwell definition, a bounded sequence $(u_n)_{n\ge1}$ in $X$, and the definitions of $H(\operatorname{curl})$ and $H_0(\operatorname{curl})$.

[A1] The Axiom of Choice is used by the imported Rellich compactness theorem's translation estimate. ([[def-axiom-of-choice]])

[A2] Countable Choice selects the regular decompositions for sequences and is used, together with Dependent Choice, by the imported Rellich theorem's Fréchet–Kolmogorov compactness extraction. ([[def-countable-choice]], [[def-dependent-choice]])

[F1] For every $u\in H_0(\operatorname{curl};\Omega)$ there are $z\in H_0^1(\Omega;\mathbb R^3)$ and $p\in H^1(\Omega)$ such that $u=z+\nabla p$, with $\|z\|_{H^1}+\|p-p_\Omega\|_{H^1}\le C_\Omega\|u\|_{H(\operatorname{curl})}$. ([[thm-na-regular-decomposition-zero-tangential-hcurl]])

[F2] On every bounded open set, bounded subsets of $W_0^{1,2}$ have subsequences converging in $L^2$; the theorem states the Axiom of Choice and its proof dependencies Countable Choice and Dependent Choice. ([[thm-rellich-compactness-from-w-one-p-zero-to-lp]], [[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

[F3] $H_0^1$ is the graph-norm closure of compactly supported smooth fields; the $H(\operatorname{curl})$ norm is bounded by the $H^1$ norm, and $H_0(\operatorname{curl})$ is the graph-norm closure of compactly supported smooth vector fields. ([[def-wkp-zero-as-a-sobolev-closure]], [[def-na-hcurl-space]], [[def-na-zero-tangential-hcurl]])

[F4] Real $L^2(\Omega;\mathbb R^3)$ is complete with its integral inner product. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]])

[F5] A strongly $L^2$-convergent sequence in $H_0(\operatorname{curl})$ with bounded curls has a subsequence whose limit remains in $H_0(\operatorname{curl})$ and has the weak limit of those curls. ([[lem-pe11-hcurl-weak-limit]])

[F6] Since $\epsilon$ is a positive constant scalar, $K^{\perp_\epsilon}=K^\perp$ in ordinary $L^2$; thus this statement's full-kernel gauge is the unweighted gauge used below. ([[def-na-pe11-maxwell-cavity-eigenproblem]])

## Proof

**Given:** the Statement's Axiom of Choice, Countable Choice and Dependent Choice, the bounded domain, and an arbitrary sequence $(u_n)_{n\ge1}\subset X$ with $\sup_n\|u_n\|_{H(\operatorname{curl})}<\infty$.

1.1 By [F1] and Countable Choice [A2], choose for each $n$ $z_n\in H_0^1(\Omega;\mathbb R^3)$ and $p_n\in H^1(\Omega)$ with $u_n=z_n+\nabla p_n$ and $\|z_n\|_{H^1}\le C_\Omega\|u_n\|_{H(\operatorname{curl})}$. Hence $(z_n)$ is bounded in $W_0^{1,2}(\Omega;\mathbb R^3)$. [A2, F1, given, choose]

1.2 Set $g_n:=\nabla p_n=u_n-z_n$. By [F3], $z_n\in H_0(\operatorname{curl})$; since $u_n\in H_0(\operatorname{curl})$, their difference is in that space. Its distributional curl is zero: for every compactly supported smooth vector test $\varphi$, integration by parts in the weak-derivative definition gives $\langle\operatorname{curl}\nabla p_n,\varphi\rangle =-\int_\Omega p_n\,\operatorname{div}(\operatorname{curl}\varphi)\,dx=0$, because $\operatorname{div}(\operatorname{curl}\varphi)=0$. Thus $g_n\in K$ for the kernel $K$ defining $X$. [F3, given, algebra]

2.1 Apply [F2] componentwise and take the finite successive subsequence to obtain indices $n_j$ for which $z_{n_j}$ converges strongly, and therefore is Cauchy, in $L^2(\Omega;\mathbb R^3)$. The finite product of the three component $L^2$ norms is the vector $L^2$ norm. [A1, A2, F2, step 1.1, choose]

3.1 For any $j,k$, $u_{n_j}-u_{n_k}\in X=K^\perp$ and $g_{n_j}-g_{n_k}\in K$, so their $L^2$ inner product is zero. Since $u_{n_j}-u_{n_k}=(z_{n_j}-z_{n_k})+(g_{n_j}-g_{n_k})$, it follows that $\|u_{n_j}-u_{n_k}\|_2^2=\langle u_{n_j}-u_{n_k},z_{n_j}-z_{n_k}\rangle_{L^2}$. Cauchy–Schwarz implies $\|u_{n_j}-u_{n_k}\|_2\le\|z_{n_j}-z_{n_k}\|_2$ (with the zero case immediate). Step 2.1 therefore makes $(u_{n_j})$ Cauchy in $L^2$; [F4] gives its strong $L^2$ limit. This proves compactness. [F1, F4, F6, step 2.1, step 1.2, algebra]

4.1 If the curl Poincare inequality failed, Countable Choice [A2] selects for each $n$ $v_n\in X$ with $\|v_n\|_2=1$ and $\|\operatorname{curl}v_n\|_2<1/n$. The graph norms are bounded, so compactness proved in steps 1.1–3.1 gives a subsequence converging strongly in $L^2$ to some $v$. By [F5], after a further subsequence $v\in H_0(\operatorname{curl})$ and $\operatorname{curl}v=0$. For each $k\in K$, strong convergence and $v_n\perp K$ give $(v,k)_{L^2}=0$, so $v\in X\cap K=\{0\}$. But strong convergence preserves $\|v\|_2=1$, a contradiction. Therefore a uniform constant $C_\Omega$ exists. [A2, F5, F6, step 1.1, step 3.1, given, choose]

5.1 The estimate in step 4.1 makes $\|u\|_{H(\operatorname{curl})}^2=\|u\|_2^2+\|\operatorname{curl}u\|_2^2$ bounded by a constant times $\|\operatorname{curl}u\|_2^2$ on $X$. Hence the curl form is coercive in the graph norm. [step 4.1, algebra] ∎

## Source notes

The local argument writes the orthogonal-kernel cancellation explicitly. The Hiptmair–Pechstein report supplies the regular-decomposition interface only; its quoted extension operators are not treated here as proved results. The local regular-decomposition theorem is used with its stated $p\in H^1$ contract. Membership of the gradient remainder in $H_0(\operatorname{curl})$ follows from $\nabla p=u-z$, rather than from an unstated zero-boundary condition on $p$.

---
id: "thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace"
kind: "theorem"
title: "Weak Neumann solvability on the mean-zero subspace"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "cor-components-of-open-subsets-of-rn-are-polygonally-connected"
  - "thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain"
  - "def-axiom-of-choice"
  - "def-bounded-linear-operator"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-dual-space-of-a-normed-space"
  - "def-hk-and-hk-zero-notation"
  - "def-integral-over-a-measurable-set"
  - "def-linear-subspace"
  - "def-sobolev-extension-domain-and-extension-operator"
  - "def-sobolev-space-wkp-and-its-norm"
  - "lem-classical-derivatives-are-weak-derivatives"
  - "lem-closed-subspace-of-a-banach-space-is-banach"
  - "lem-euclidean-balls-have-positive-finite-lebesgue-measure"
  - "lem-w-one-two-is-a-hilbert-space"
  - "thm-bounded-linear-operator-equivalences"
  - "thm-holder-inequality-for-integrals"
  - "thm-lax-milgram"
  - "thm-poincare-wirtinger-on-bounded-connected-extension-domains"
  - "thm-zero-weak-gradient-implies-componentwise-constancy"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, Exercise 5.1: the weak Neumann problem is solvable exactly when $\\int_Uf=0$, with uniqueness up to constants and a mean-zero normalisation, printed pp. 105–106"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.5, Example 4 (homogeneous Neumann problem) and its weak formulation, printed pp. 295–297"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.4, the Poincar'e inequality used for the coercivity constant, printed pp. 98–99"
---

## Statement

Assume the Axiom of Choice, inherited through the Poincaré supplier named below, together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$, $n\ge1$, be a nonempty bounded connected $W^{1,2}$-extension domain ([[def-sobolev-extension-domain-and-extension-operator]]), let $H^1(\Omega)$ carry the inner product of [[lem-w-one-two-is-a-hilbert-space]], and let $F$ be a bounded conjugate-linear functional on $H^1(\Omega)$ with $$F(\mathbf 1)=0,\qquad \mathbf 1\text{ the constant function }1 .$$ Then there is a unique $u\in H^1(\Omega)$ with $\int_\Omega u\,dx=0$ and $$\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx=F(v)\qquad\text{for every }v\in H^1(\Omega),$$ the weak form of the homogeneous Neumann problem $-\Delta u=F$ with $\partial_\nu u=0$; the full solution set is $\{u+c\mathbf 1 : c\in\mathbb K\}$, and with $C_W$ the Poincar\'e--Wirtinger constant of [[thm-poincare-wirtinger-on-bounded-connected-extension-domains]], $$\|u\|_{H^1}\le(1+C_W^2)\|F\| .$$ The compatibility $F(\mathbf 1)=0$ is necessary: constants lie in the kernel of the form, so if $F(\mathbf 1)\ne0$ no solution exists. On a disconnected bounded $W^{1,2}$-extension domain there are finitely many connected components $\Omega_k$. Solvability is equivalent to $F(\mathbf 1_{\Omega_k})=0$ for each component, with a unique solution having zero mean on each component; steps 1.3 and 4.2 prove this extension separately from the connected-domain Poincar\'e--Wirtinger supplier.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; a bounded connected extension domain $\Omega\subseteq\mathbb R^n$, $n\ge1$, with $\Omega\ne\emptyset$; the Hilbert space $H^1(\Omega)$ with inner product $(u,v)_{H^1}=(u,v)_{L^2}+\sum_i(D_iu,D_iv)_{L^2}$; the form $a(u,v)=\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx$; a bounded conjugate-linear functional $F$ on $H^1(\Omega)$ with $F(\mathbf 1)=0$ for the constant class $\mathbf 1$; and $V:=\{v\in H^1(\Omega):\int_\Omega v\,dx=0\}$.

[F1] $H^1(\Omega)$ is a Hilbert space for the displayed inner product, whose induced norm is $\|v\|_{H^1}^2=\|v\|_{L^2}^2+\|Dv\|_{L^2}^2$ with $\|Dv\|_{L^2}^2=\sum_i\|D_iv\|_{L^2}^2$ ([[lem-w-one-two-is-a-hilbert-space]], [[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]]).

[F2] The linear functional $\ell(v)=\int_\Omega v\,dx$ is bounded on $H^1(\Omega)$: $|\ell(v)|\le|\Omega|^{1/2}\|v\|_{L^2}\le|\Omega|^{1/2}\|v\|_{H^1}$ by H\"older, and $0<|\Omega|<\infty$ because $\Omega$ is nonempty, open and bounded ([[thm-holder-inequality-for-integrals]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[def-integral-over-a-measurable-set]]).

[F3] Poincar\'e--Wirtinger with constant $C_W:=C(\Omega,2)$: $\|v\|_{L^2}\le C_W\|Dv\|_{L^2}$ for every $v\in V$ ([[thm-poincare-wirtinger-on-bounded-connected-extension-domains]], [[def-sobolev-extension-domain-and-extension-operator]]).

[F4] The constant class $\mathbf 1$ lies in $H^1(\Omega)$ with weak gradient $0$: its classical derivatives vanish and are its weak derivatives, and it is bounded on the finite-measure domain ([[lem-classical-derivatives-are-weak-derivatives]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F5] Lax--Milgram: on a Hilbert space, a bounded coercive sesquilinear form with constant $\alpha$ and a bounded conjugate-linear functional have a unique solution $u$ with $a(u,v)=F(v)$ for all $v$, and $\alpha\|u\|\le\|F\|$ ([[thm-lax-milgram]], [[def-bounded-linear-operator]], [[def-dual-space-of-a-normed-space]]).

[F6] Zero weak gradient implies componentwise constancy on each connected component; for the connected $\Omega$ this says $\nabla w=0$ a.e. implies $w$ is a constant class ([[thm-zero-weak-gradient-implies-componentwise-constancy]]).

[F7] A closed linear subspace of a Hilbert space is a Hilbert space for the restricted inner product ([[lem-closed-subspace-of-a-banach-space-is-banach]], [[def-linear-subspace]], [[thm-bounded-linear-operator-equivalences]]).



[F8] On a bounded $W^{1,2}$-extension domain every $H^1$-bounded sequence has an $L^2$-convergent subsequence ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]]). Components of an open Euclidean set are open, and their indicators are locally constant smooth functions with zero weak gradient ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]], [[lem-classical-derivatives-are-weak-derivatives]]).

## Proof

1.1 $V$ is a closed subspace: $V=\ker\ell$ for the bounded linear functional $\ell$ of [F2], hence closed; being a linear subspace of the Hilbert space $H^1(\Omega)$, it is itself a Hilbert space for the restricted inner product by [F7]. [F2, F7]

1.2 Coercivity on $V$: for $v\in V$, Poincar\'e--Wirtinger gives $\|v\|_{H^1}^2=\|v\|_{L^2}^2+\|Dv\|_{L^2}^2\le(1+C_W^2)\|Dv\|_{L^2}^2$, so $\operatorname{Re}a(v,v)=\|Dv\|_{L^2}^2\ge\frac{1}{1+C_W^2}\|v\|_{H^1}^2$; also $|a(u,v)|\le\|Du\|_{L^2}\|Dv\|_{L^2}\le\|u\|_{H^1}\|v\|_{H^1}$, so $a$ is bounded on $V$ with bound $1$. [F1, F3, algebra]

1.3 Finiteness of components in the disconnected case. For a nonempty bounded $W^{1,2}$-extension domain, every component $C$ has positive measure by [F2] and its indicator belongs to $H^1$ with zero gradient by [F8]. If there were infinitely many components, AC would select distinct $C_j$, $j\ge1$; the normalized indicators $e_j=|C_j|^{-1/2}\mathbf 1_{C_j}$ have $H^1$ norm $1$ and pairwise $L^2$ distance $\sqrt2$, contradicting [F8]. Hence the components are $C_1,\ldots,C_m$. On the closed subspace $V_c=\{v:\int_{C_k}v=0\text{ for every }k\}$ there is a constant $C_c$ with $\|v\|_2\le C_c\|Dv\|_2$. Otherwise AC selects $v_j\in V_c$, $j\ge1$, with $\|v_j\|_2=1$ and $\|Dv_j\|_2<1/j$. By [F8] a subsequence converges in $L^2$; it is Cauchy in $H^1$, so [F1] gives an $H^1$ limit $v$ with $Dv=0$ and $\|v\|_2=1$. Each component integral passes to the limit by H\"older, so $v\in V_c$; [F6] makes it constant on each component, hence zero by its componentwise mean, a contradiction. [F1, F2, F6, F8, given]

2.1 Solution on $V$: the restriction $F|_V$ is a bounded conjugate-linear functional on the Hilbert space $V$ and $a$ is bounded and coercive there with constant $\alpha:=1/(1+C_W^2)$; Lax--Milgram gives a unique $u\in V$ with $a(u,v)=F(v)$ for every $v\in V$, satisfying $\alpha\|u\|_{H^1}\le\|F|_V\|\le\|F\|$. [F5, step 1.1, step 1.2]

3.1 Extension to all test functions: let $v\in H^1(\Omega)$ and put $c:=|\Omega|^{-1}\int_\Omega v\,dx$ and $v_0:=v-c\mathbf 1$, so that $\int v_0=0$ and $v_0\in V$, while $\mathbf 1\in H^1$ has zero weak gradient by [F4]. Then $a(u,v)=a(u,v_0)+a(u,c\mathbf 1)=a(u,v_0)$, and conjugate-linearity of $F$ together with $F(\mathbf 1)=0$ gives $F(v)=F(v_0)+\overline c\,F(\mathbf 1)=F(v_0)$; hence $a(u,v)=F(v)$ for every $v\in H^1(\Omega)$. [F4, step 2.1, algebra]

3.2 Uniqueness in $V$: if $u_1,u_2\in V$ both solve, then $w:=u_1-u_2\in V$ satisfies $a(w,v)=0$ for all $v\in V$; testing $v=w$ and using step 1.2 gives $\alpha\|w\|_{H^1}^2\le\operatorname{Re}a(w,w)=0$, so $w=0$. [step 1.2, step 2.1]

3.3 Estimate: from step 2.1, $\|u\|_{H^1}\le(1+C_W^2)\|F|_V\|\le(1+C_W^2)\|F\|$, the last inequality because the supremum over the smaller set $V$ is at most the supremum over $H^1(\Omega)$. [F5, step 2.1, algebra]

4.1 Full solution set and necessity: if $u'$ is any solution of $a(u',v)=F(v)$ on $H^1(\Omega)$, then $w:=u'-u$ satisfies $a(w,v)=0$ for all $v$; testing $v=w$ gives $\|Dw\|_{L^2}^2=0$, so $\nabla w=0$ a.e. and, $\Omega$ being connected, [F6] makes $w$ a constant class; hence the solution set is $u+\mathbb K\mathbf 1$, and conversely every $u+c\mathbf 1$ solves because $\mathbf 1$ has zero weak gradient. Testing $v=\mathbf 1$ in the equation gives $a(u,\mathbf 1)=0=F(\mathbf 1)$, so the compatibility $F(\mathbf 1)=0$ is necessary. [F1, F6, step 3.1, algebra]

4.2 Componentwise solvability. The inequality of step 1.3 gives coercivity on $V_c$ with constant $1/(1+C_c^2)$, so the argument of steps 1.1–2.1 gives a unique $u\in V_c$ solving there. Every $v\in H^1$ decomposes as $v=v_0+\sum_k c_k\mathbf 1_{C_k}$, where $c_k=|C_k|^{-1}\int_{C_k}v$ and $v_0\in V_c$. Thus if $F(\mathbf 1_{C_k})=0$ for every $k$, the equation extends to all tests as in step 3.1; conversely testing each indicator makes these conditions necessary. Testing the difference of two solutions with itself and using [F6] shows that all solutions differ by componentwise constants, so zero mean on each component specifies the unique normalized solution. [F5, F6, F8, step 1.3, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 This proves the connected-domain assertion and its displayed estimate, and establishes the stated componentwise compatibility and normalization on disconnected bounded $W^{1,2}$-extension domains. [step 4.1, step 3.3, step 1.3, step 4.2] ∎

---
id: thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian
kind: theorem
title: Weak global $W^{2,p}$ regularity for the Dirichlet Laplacian
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 5
deps: [thm-global-w-two-p-dirichlet-estimate, thm-higher-order-sobolev-embedding, def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-weak-dirichlet-solution-for-a-divergence-form-operator, thm-extension-theorem-for-bounded-smooth-domains, def-laplacian-of-a-c2-function, def-countable-choice, def-bounded-c-k-domain-and-boundary-charts, thm-locally-integrable-functions-embed-in-distributions, def-axiom-of-choice]
sources:
  references:
    - title: "Robert Haller-Dintelmann, Partial Differential Equations lecture notes (WiSe 2021/22; version January 7, 2022)"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/PDESkriptWiSe22.pdf"
      locator: "§19, Theorem 19.7 and its proof: the shifted problem $\\lambda u-Lu=f$ with $u\\in W^{2,p}\\cap W^{1,p}_0$ is uniquely solvable for $\\mathrm{Re}\\,\\lambda\\ge\\lambda_0$, with the weighted estimate (19.6), printed pp. 148-155 (statement and complete proof)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "Theorem 3.8, Parts II-III, the a priori $W^{2,p}$ estimate applied only after weak-to-strong regularity is established, printed pp. 105-111 (read in full)"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $n\ge2$, $n<p<\infty$, and let $\Omega\subset\mathbb R^n$ be a bounded $C^{2,\alpha}$ domain for some $0<\alpha<1$. If $u\in H^1_0(\Omega)$ is a weak solution of $-\Delta u=f$ with $f\in L^p(\Omega)$, then $u\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$ and
$$\|u\|_{W^{2,p}(\Omega)}\le C\bigl(\|f\|_{L^p(\Omega)}+\|u\|_{L^p(\Omega)}\bigr),$$
where $C=C(n,p,\Omega)$. This is a weak-to-strong regularity theorem; the estimate applies to the weak solution only after its $W^{2,p}$ membership has been established, and the assumption $p>n$ is the range in which the bootstrap of Sobolev exponents terminates at $p$.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice, $n\ge2$, $n<p<\infty$, the bounded $C^{2,\alpha}$ domain $\Omega$, $f\in L^p(\Omega)$ and a weak solution $u\in H^1_0(\Omega)$ of $-\Delta u=f$.

[A1] Countable Choice is used for the measure-theoretic and Sobolev interfaces; the Axiom of Choice is inherited by the extension, embedding and a priori estimate interfaces and assumed for the quoted solvability input. ([[def-countable-choice]])

[F1] Weak formulation ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-laplacian-of-a-c2-function]]): for the Laplacian the Dirichlet form is $a(v,\varphi)=\int_\Omega\nabla v\cdot\nabla\varphi$, and $u\in H^1_0(\Omega)$ is a weak solution of $-\Delta u=f$, $f\in L^2(\Omega)$, precisely when $\int_\Omega\nabla u\cdot\nabla\varphi=\int_\Omega f\varphi$ for every $\varphi\in H^1_0(\Omega)$. Equivalently, for every $\lambda\in\mathbb R$, $$\int_\Omega\nabla u\cdot\nabla\varphi+\lambda\int_\Omega u\varphi=\int_\Omega(f+\lambda u)\varphi\qquad(\varphi\in H^1_0(\Omega)).$$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]])

[F2] Shifted strong solvability (quoted, Haller-Dintelmann Theorem 19.7): let $\Omega\subset\mathbb R^d$ be open and bounded with $C^2$ boundary and let $L$ have symmetric elliptic principal matrix $a\in C(\bar\Omega)$, $b,c\in L^\infty$. For each fixed $1<q<\infty$ there exists $\lambda_0(q)\ge0$ such that for every $\lambda\ge\lambda_0(q)$ (indeed $\operatorname{Re}\lambda\ge\lambda_0$) and every $h\in L^q(\Omega)$ the problem $\lambda z-Lz=h$ in $\Omega$, $z=0$ on $\partial\Omega$, has a unique solution $z\in W^{2,q}(\Omega)\cap W^{1,q}_0(\Omega)$ with $\|z\|_{W^{2,q}(\Omega)}\le C(\lambda,n,q,a,b,c,\Omega)\|h\|_{L^q(\Omega)}$. For $L=\Delta$ ($a$ the identity matrix, $b=c=0$) this is the solvability of $(\lambda-\Delta)z=h$ in $W^{2,q}\cap W^{1,q}_0$; the constant may depend on $q$, and only finitely many exponents $q$ are used below.

[F3] Higher-order Sobolev embedding ([[thm-higher-order-sobolev-embedding]]): on a bounded extension domain, with $k\ge1$ and $1\le q<\infty$, (a) if $kq<n$ then $W^{k,q}\hookrightarrow L^r$ for every $1\le r\le nq/(n-kq)$; (b) if $kq=n$ then $W^{k,q}\hookrightarrow L^r$ for every finite $r$; (c) if $kq>n$ then $W^{k,q}$ embeds into $L^\infty$ and into $C^{0,\beta}(\bar\Omega)$ for $0<\beta<\min\{1,k-n/q\}$.

[F4] $\Omega$ is a bounded $C^k$ domain for $k=2$ ([[def-bounded-c-k-domain-and-boundary-charts]]), hence a $W^{k,q}$-extension domain for every $k\le2$ and every $1\le q\le\infty$ by [[thm-extension-theorem-for-bounded-smooth-domains]]; in particular [F3] applies with $k=1,2$ and all exponents used below. ([[def-sobolev-extension-domain-and-extension-operator]])

[F5] A priori estimate ([[thm-global-w-two-p-dirichlet-estimate]]): for the bounded $C^{1,1}$ domain $\Omega$ (a $C^{2,\alpha}$ domain is $C^{1,1}$) there is $C_0=C_0(n,p,\Omega)$ with $\|v\|_{W^{2,p}(\Omega)}\le C_0(\|\Delta v\|_{L^p(\Omega)}+\|v\|_{L^p(\Omega)})$ for every $v\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$.

[F6] Energy uniqueness ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]): if $w\in H^1_0(\Omega)$ satisfies $\int_\Omega\nabla w\cdot\nabla\varphi+\lambda\int_\Omega w\varphi=0$ for every $\varphi\in H^1_0(\Omega)$ and $\lambda>0$, then $w=0$: testing with $\varphi=\overline w$ (or $w$ for real scalars) gives $\int|\nabla w|^2+\lambda\int|w|^2=0$.

[F7] Under Countable Choice, the map from $L^1_{\mathrm{loc}}(\Omega)$ classes to distributions given by $g\mapsto(\varphi\mapsto\int_\Omega g\varphi)$ is injective; equal regular distributions therefore come from functions equal almost everywhere ([[thm-locally-integrable-functions-embed-in-distributions]]).

## Proof

**Proof technique:** direct.

1.1 Initial integrability and the exponent list. Since $u\in H^1_0(\Omega)=W^{1,2}_0(\Omega)$ and $\Omega$ is a bounded extension domain for $W^{1,2}$ by [F4], the embedding [F3] with $k=1$, $q=2$ gives $u\in L^r(\Omega)$ for every $2\le r\le\frac{2n}{n-2}$ if $n>2$, and for every finite $r$ if $n=2$. Put $$q_0:=\min\Bigl\{p,\frac{2n}{n-2}\Bigr\}\ (n>2),\qquad q_0:=p\ (n=2),$$ so that $2\le q_0\le p$ and $u\in L^{q_0}(\Omega)$. If $q_0=p$, take the exponent list to be the singleton $Q=\{p\}$ and set $m=0$. Otherwise define a strictly increasing finite list $q_0<q_1<\cdots<q_m=p$ by $q_{i+1}:=\min\{p,\frac{nq_i}{n-2q_i}\}$ when $2q_i<n$ and $q_{i+1}:=p$ when $2q_i\ge n$. The list is finite and depends only on $n,p$: while $q_i<p$ and $2q_i<n$ one has $\frac1{q_{i+1}}=\frac1{q_i}-\frac2n$ (unless the minimum is $p$, which ends the list), so the reciprocals decrease by the fixed positive amount $\frac2n$ and the process reaches either $p$ or the region $2q_i\ge n$ after at most $\lceil\frac n2(\frac1{q_0}-\frac1p)\rceil$ steps, after which it reaches $p$ in one more step. [F3, F4, algebra, A1]

2.1 Choice of the shift and the first solve. Let $Q:=\{q_i:0\le i\le m\}$ be the finite set of exponents in the list, so $p\in Q$ and this definition also covers the case $q_0=p$ (then $m=0$ and $Q=\{p\}$). For each $q\in Q$, apply [F2] to $L=\Delta$ and let $\lambda_0(q)$ be its threshold; choose $\lambda>\max(\{0\}\cup\{\lambda_0(q):q\in Q\})$. Since $f\in L^p(\Omega)\subseteq L^{q_0}(\Omega)$ and $u\in L^{q_0}(\Omega)$ by step 1.1, the datum $h_0:=f+\lambda u$ lies in $L^{q_0}(\Omega)$; by [F2] there is $z_0\in W^{2,q_0}(\Omega)\cap W^{1,q_0}_0(\Omega)$ with $(\lambda-\Delta)z_0=h_0$ strongly, hence weakly by [F1] (test against compactly supported smooth functions and use density). The weak solution $u$ satisfies the same shifted weak equation with datum $h_0$, as recorded in [F1]. Since $q_0\ge2$, the space $W^{1,q_0}_0(\Omega)$ is contained in $H^1_0(\Omega)$ (bounded $\Omega$ gives $W^{1,q_0}(\Omega)\subseteq W^{1,2}(\Omega)$ and the closures transfer), so $z_0-u\in H^1_0(\Omega)$ and [F6] gives $z_0=u$. Hence $u\in W^{2,q_0}(\Omega)\cap W^{1,q_0}_0(\Omega)$. [F1, F2, F6, step 1.1, algebra]

3.1 The bootstrap induction. Suppose $u\in W^{2,q_i}(\Omega)\cap W^{1,q_i}_0(\Omega)$ with $q_i<p$. If $2q_i<n$, then [F3](a) with $k=2$, $q=q_i$ gives $u\in L^r$ for every $r\le\frac{nq_i}{n-2q_i}$, in particular $u\in L^{q_{i+1}}$; if $2q_i=n$, then [F3](b) gives $u\in L^r$ for every finite $r$, so $u\in L^p=L^{q_{i+1}}$; if $2q_i>n$, then [F3](c) gives $u\in L^\infty\subseteq L^p=L^{q_{i+1}}$. In all three cases $h_i:=f+\lambda u\in L^{q_{i+1}}$ because $f\in L^p$ and $q_{i+1}\le p$; by [F2] applied at the exponent $q_{i+1}$ there is $z_{i+1}\in W^{2,q_{i+1}}(\Omega)\cap W^{1,q_{i+1}}_0(\Omega)$ solving $(\lambda-\Delta)z_{i+1}=h_i$; by [F1] and [F6], applied exactly as in step 2.1 (with $q_{i+1}\ge q_i\ge2$ so that $z_{i+1}-u\in H^1_0$), we get $z_{i+1}=u$ and hence $u\in W^{2,q_{i+1}}$. Induction over the finite list gives $u\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$. [F1, F2, F3, F6, step 2.1, induction]

4.1 The estimate and almost-everywhere equation. Now that $u\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$, [F5] applies with $v=u$: $\|u\|_{W^{2,p}}\le C_0(\|\Delta u\|_{L^p}+\|u\|_{L^p})$. For every $\varphi\in C_c^\infty(\Omega)$, the weak equation [F1] and the definition of the weak Laplacian give $$\int_\Omega(-\Delta u)\varphi=\int_\Omega\nabla u\cdot\nabla\varphi=\int_\Omega f\varphi.$$ Both $-\Delta u$ and $f$ lie in $L^p(\Omega)\subseteq L^1_{\mathrm{loc}}(\Omega)$, so their regular distributions agree; injectivity [F7] gives $-\Delta u=f$ almost everywhere. Hence $\|\Delta u\|_{L^p}=\|f\|_{L^p}$ and the displayed bound holds with $C=C_0$. [step 3.1, F1, F5, F7, algebra]

5.1 Conclusion. The weak solution $u\in H^1_0(\Omega)$ of $-\Delta u=f$ with $f\in L^p(\Omega)$, $p>n$, is shown to lie in $W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$, and the a priori estimate of [F5] then gives $\|u\|_{W^{2,p}}\le C(\|f\|_{L^p}+\|u\|_{L^p})$ with $C$ depending only on $n,p,\Omega$. The shifted-equation argument uses the finite sequence of Sobolev exponents and the unique solvability [F2] at each of them; it never assumes $W^{2,p}$ regularity of $u$ in advance. [step 3.1, step 4.1, F2, F5, given] ∎

## Remarks

- The proof shows precisely how the range $p>n$ is used: the weak solution starts in $H^1_0$, the shifted strong solvability lifts one Sobolev order at a time, and the higher-order embedding converts a $W^{2,q}$ bound into a higher $L^r$ bound; reciprocals decrease by $2/n$ per step, so the process reaches any prescribed finite exponent after finitely many steps.
- The bridge from the literature's strong solvability theorem to the given weak solution is the shifted equation and energy uniqueness [F6], not an assumption of $W^{2,p}$ regularity. No maximum principle, no symmety of the domain and no spectral theory beyond the threshold $\lambda_0$ of [F2] is used.
- The domain is assumed $C^{2,\alpha}$ for some $\alpha\in(0,1)$, which is stronger than the $C^{1,1}$ of the a priori estimate [F5] and is used only through the $C^2$ extension and boundary requirements of [F2] and [F3].

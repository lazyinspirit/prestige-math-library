---
id: thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent
kind: theorem
title: "The symmetric elliptic form operator is self-adjoint with compact resolvent"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [cor-a-sufficiently-large-shift-is-coercive, def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-bounded-linear-operator, def-complex-l-two-inner-product, def-complex-lp-and-euclidean-test-function-conventions, def-complexification-of-a-real-linear-map, def-complexification-of-a-real-vector-space, def-compact-linear-operator, def-countable-choice, def-hilbert-space, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-real-and-complex-inner-product-space, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-shifted-elliptic-solution-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-wkp-zero-as-a-sobolev-closure, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded, lem-compositions-with-a-compact-operator-are-compact, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-shifted-elliptic-solution-operator-is-compact-on-ltwo, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, thm-lax-milgram, thm-metric-compactness-equivalences, thm-self-adjointness-range-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.8 (compact resolvent) and Section 4.10 (self-adjoint spectrum), printed pp. 106 and 108-109 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Sections 4.1-4.3, Theorem 4.2 and Corollary 4.8, printed pp. 84-96 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, self-adjointness condition and Theorem 1, printed pp. 100-101 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice, together with the Axiom of Choice where the compactness clause is used. Let $\Omega\subseteq\mathbb R^n$ be open and let $L,D(L)$ be the symmetric-case operator of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], with $D(L)$ dense and $L$ symmetric and lower bounded ([[lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded]]); let its scalar field be $\mathbb K\in\{\mathbb R,\mathbb C\}$ and fix $\mu\ge\beta$. Then $L$ is self-adjoint: $L=L^*$, the adjoint being taken in $L^2(\Omega;\mathbb K)$ for the densely defined operator $L$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). Moreover $L+\mu:D(L)\to L^2(\Omega;\mathbb K)$ is a bijection with inverse $K_\mu$. If $\Omega$ is bounded and the Axiom of Choice holds, then $K_\mu$ is compact ([[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]]). Under these boundedness and AC hypotheses, for $\mathbb K=\mathbb C$, $L$ has compact resolvent: $(L-\lambda)^{-1}$ is compact on $L^2(\Omega;\mathbb C)$ for every $\lambda$ in the resolvent set of $L$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]). For $\mathbb K=\mathbb R$, identify $L^2(\Omega;\mathbb C)$ canonically with $L^2(\Omega;\mathbb R)_{\mathbb C}$ by $u+iv\leftrightarrow(u,v)$, and let $L_{\mathbb C}(u+iv):=Lu+iLv$ on $D(L_{\mathbb C})=D(L)+iD(L)$ ([[def-complexification-of-a-real-vector-space]], [[def-complexification-of-a-real-linear-map]], [[def-complex-lp-and-euclidean-test-function-conventions]]). Then $L_{\mathbb C}$ is self-adjoint and has compact resolvent: $(L_{\mathbb C}-\lambda)^{-1}$ is compact on $L^2(\Omega;\mathbb C)$ for every $\lambda$ in its resolvent set ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

## Facts & Assumptions

**Given:** Countable Choice; the symmetric divergence-form case with form $a$ and operator $L$; a fixed $\mu\ge\beta$; the shifted solution operator $K_\mu$; and the field $\mathbb K\in\{\mathbb R,\mathbb C\}$.

[F1] $D(L)$ is dense in $L^2(\Omega)$ and $L$ is symmetric; $L+\mu$ is defined on $D(L)$ and is symmetric as well ([[lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F2] Solution operator: $a_\mu(K_\mu f,v)=(f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$ and $f\in L^2(\Omega)$, with $a_\mu=a+\mu(\cdot,\cdot)_{L^2}$ bounded and coercive on $H^1_0(\Omega)$ with constant $\alpha=\theta/2$ ([[def-shifted-elliptic-solution-operator]], [[cor-a-sufficiently-large-shift-is-coercive]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] Range description: $a(K_\mu f,v)=(f-\mu K_\mu f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$, so $K_\mu f\in D(L)$ and $L(K_\mu f)=f-\mu K_\mu f$ ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]).

[F4] Lax--Milgram applies to bounded coercive sesquilinear forms on $H^1_0(\Omega)$ and bounded conjugate-linear data; the shifted forms $a_\mu\pm i(\cdot,\cdot)_{L^2}$ in the complex case have the same real part as $a_\mu$ ([[thm-lax-milgram]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F5] Range criterion: a densely defined symmetric operator on a complex Hilbert space is self-adjoint if and only if $\operatorname{ran}(T\pm i)=H$ ([[thm-self-adjointness-range-criterion]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F6] Compactness: if $\Omega$ is bounded and the Axiom of Choice holds, the $L^2$ realization of $K_\mu$ is compact, and a bounded operator times a compact operator is compact ([[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]], [[lem-compositions-with-a-compact-operator-are-compact]], [[def-compact-linear-operator]], [[def-bounded-linear-operator]], [[def-axiom-of-choice]]).

[F7] Complex resolvent: for a densely defined operator $\widetilde L$ on a complex Hilbert space and $\lambda$ in its resolvent set, $\widetilde L-\lambda:D(\widetilde L)\to\mathcal H_{\mathbb C}$ is a bijection with bounded inverse $(\widetilde L-\lambda)^{-1}$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[F8] Canonical Hilbert-space complexification. By the componentwise convention for complex $L^2$, every complex class has a unique decomposition $u+iv$ with real $u,v\in L^2(\Omega;\mathbb R)$. The map $1\otimes u+i\otimes v\mapsto u+iv$ identifies $(L^2(\Omega;\mathbb R))_{\mathbb C}$ with $L^2(\Omega;\mathbb C)$; expanding the complex integral pairing gives
$$\langle u+iv,p+iq\rangle_{\mathbb C}=(u,p)_{\mathbb R}+(v,q)_{\mathbb R}+i\bigl((v,p)_{\mathbb R}-(u,q)_{\mathbb R}\bigr),\qquad \|u+iv\|_{L^2(\mathbb C)}^2=\|u\|_{L^2(\mathbb R)}^2+\|v\|_{L^2(\mathbb R)}^2.$$
Thus the identification is a complex-linear Hilbert isometry. For a real densely defined operator $T$, its complexification is $T_{\mathbb C}(u+iv)=Tu+iTv$ on $D(T)+iD(T)$ ([[def-complexification-of-a-real-vector-space]], [[def-complexification-of-a-real-linear-map]], [[def-complex-l-two-inner-product]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

[F9] If a real bounded operator $S$ is compact, then its componentwise complexification is compact: for any bounded sequence $u_j+iv_j$, the real and imaginary sequences are bounded; compactness of $S$ and the metric compactness equivalences give a subsequence on which $Su_j$ converges, then a further subsequence on which $Sv_j$ converges. Boundedness follows from $\|S_{\mathbb C}(u+iv)\|^2=\|Su\|^2+\|Sv\|^2\le\|S\|^2\|u+iv\|^2$. AC supplies the Countable and Dependent Choice hypotheses of the metric compactness equivalences. This applies to the compact real shifted inverse $K_\mu$ ([[thm-metric-compactness-equivalences]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Proof

**Proof technique:** direct.

1.1 Surjectivity of $L+\mu$. Let $f\in L^2(\Omega)$ and put $u:=K_\mu f\in H^1_0(\Omega)$; by [F3] $u\in D(L)$ and $Lu=f-\mu u$, that is $(L+\mu)u=f$. Hence $\operatorname{ran}(L+\mu)=L^2(\Omega)$, and $(L+\mu)u=0$ forces $u=K_\mu 0=0$ by [F2], so $L+\mu$ is a bijection of $D(L)$ onto $L^2(\Omega)$ with inverse $K_\mu$. [F2, F3, given]

1.2 The complex case: $\operatorname{ran}(L+\mu\pm i)=L^2(\Omega)$. Assume $\mathbb K=\mathbb C$ and let $f\in L^2(\Omega)$. The forms $a_\mu^\pm(u,v):=a_\mu(u,v)\pm i(u,v)_{L^2}$ are bounded and coercive on $H^1_0(\Omega)$, because $\operatorname{Re}a_\mu^\pm(u,u)=\operatorname{Re}a_\mu(u,u)\ge\alpha\|u\|_{H^1_0}^2$ and boundedness is inherited from $a_\mu$ and the $L^2$ pairing; applying [F4] to the bounded conjugate-linear datum $v\mapsto(f,v)$ gives a unique $u_\pm\in H^1_0(\Omega)$ with $a_\mu(u_\pm,v)\pm i(u_\pm,v)_{L^2}=(f,v)_{L^2}$ for every $v\in H^1_0(\Omega)$, which rearranges to $a(u_\pm,v)=(f-\mu u_\pm\mp i u_\pm,v)_{L^2}$. Hence $u_\pm\in D(L)$ with $(L+\mu\pm i)u_\pm=f$, so both ranges are all of $L^2(\Omega)$. [F2, F3, F4, given]

2.1 Complex case: self-adjointness. Assume $\mathbb K=\mathbb C$ and put $T:=L+\mu$ on the dense domain $D(L)$. By [F1] the operator $T$ is densely defined and symmetric, and by step 1.2 $\operatorname{ran}(T\pm i)=L^2(\Omega)$; the range criterion [F5] then makes $T$ self-adjoint, and $L=T-\mu$ is self-adjoint because subtracting the real scalar $\mu$ preserves the adjoint relation $D(L^*)=D(T^*)=D(L)$ and $L^*=T^*-\mu$. [F1, F5, step 1.2, given]

2.2 Real case: self-adjointness. Assume $\mathbb K=\mathbb R$. By step 1.1 the densely defined symmetric operator $T=L+\mu$ has full range $L^2(\Omega;\mathbb R)$. Let $v\in D(T^*)$ and put $w:=T^*v\in L^2(\Omega;\mathbb R)$; by surjectivity choose $u\in D(T)$ with $Tu=w$. Then for every $z\in D(T)$, symmetry gives $(Tz,v)=(z,T^*v)=(z,Tu)=(Tz,u)$, so $v-u$ is orthogonal to $\operatorname{ran}T=L^2(\Omega;\mathbb R)$ and hence $v=u\in D(T)$ with $Tv=T^*v$. Therefore $D(T^*)=D(T)$ and $T$ is self-adjoint, and so is $L=T-\mu$. [F1, step 1.1, given]

3.1 Complexification of the real branch. Write $\mathcal H_{\mathbb C}=L^2(\Omega;\mathbb C)=\mathcal H_{\mathbb R}+i\mathcal H_{\mathbb R}$ using [F8], and define $L_{\mathbb C}(u+iv)=Lu+iLv$ on $D(L)+iD(L)$. Its domain is dense because $D(L)$ is dense in the real space and each real and imaginary component can be approximated there. To check self-adjointness, let $y=x+iz\in D(L_{\mathbb C}^*)$ and write $L_{\mathbb C}^*y=p+iq$. Testing the adjoint identity at real $h\in D(L)$ gives $$(Lh,x)_{\mathbb R}-i(Lh,z)_{\mathbb R}=\langle L_{\mathbb C}h,y\rangle_{\mathbb C}=\langle h,p+iq\rangle_{\mathbb C}=(h,p)_{\mathbb R}-i(h,q)_{\mathbb R}.$$ Thus $x,z\in D(L^*)=D(L)$ and $p=Lx$, $q=Lz$. Hence $y\in D(L_{\mathbb C})$ and $L_{\mathbb C}^*y=L_{\mathbb C}y$. Conversely, the real self-adjoint identities give $L_{\mathbb C}\subseteq L_{\mathbb C}^*$, so equality holds. [F8, step 2.2, given, algebra]

4.1 Compact resolvent. If $\mathbb K=\mathbb C$, put $\widetilde L=L$ and $\widetilde K=K_\mu$; [F6] gives compactness of $\widetilde K$ when $\Omega$ is bounded. If $\mathbb K=\mathbb R$, put $\widetilde L=L_{\mathbb C}$ and $\widetilde K(u+iv)=K_\mu u+iK_\mu v$; [F6] makes $K_\mu$ compact on the real $L^2$ space, and [F9] gives compactness of $\widetilde K$. By step 1.1 (componentwise in the real case), $\widetilde K=(\widetilde L+\mu)^{-1}$. In either case let $\lambda$ lie in the resolvent set of $\widetilde L$, write $R=(\widetilde L-\lambda)^{-1}$ and $c=\lambda+\mu$. Using the inverse relations on their domains gives $$R-\widetilde K=R\bigl[(\widetilde L+\mu)-(\widetilde L-\lambda)\bigr]\widetilde K=cR\widetilde K,$$ and also $$R-\widetilde K=\widetilde K\bigl[(\widetilde L+\mu)-(\widetilde L-\lambda)\bigr]R=c\widetilde K R.$$ Therefore $Q:=I-c\widetilde K$ is boundedly invertible, with $Q^{-1}=I+cR$, since $(I-c\widetilde K)(I+cR)=I=(I+cR)(I-c\widetilde K)$ by these identities. On $D(\widetilde L)$ one has $\widetilde L-\lambda=(\widetilde L+\mu)Q$, whence $$(\widetilde L-\lambda)^{-1}=Q^{-1}\widetilde K=(I+cR)\widetilde K.$$ This is a bounded operator composed with the compact $\widetilde K$, so it is compact. The complex resolvent definition applies to $\widetilde L$ in both scalar-field cases. [F6, F7, F8, F9, step 1.1, step 2.1, step 2.2, step 3.1, given, algebra] ∎


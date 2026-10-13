---
id: lem-em-exterior-outgoing-scalar-uniqueness
kind: lemma
title: Uniqueness of the outgoing exterior scalar Helmholtz solution with Dirichlet data
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [lem-em-sphere-outgoing-dirichlet-to-neumann-map, thm-bounded-potential-weak-unique-continuation-in-three-dimensions, cor-first-green-identity-on-a-bounded-c-one-domain, def-laplacian-of-a-c2-function, def-bounded-c-k-domain-and-boundary-charts, def-axiom-of-choice]
dependency_roles:
  lem-em-sphere-outgoing-dirichlet-to-neumann-map: mathematical-premise
  thm-bounded-potential-weak-unique-continuation-in-three-dimensions: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "A. Moiola, Scattering of time-harmonic acoustic waves (University of Pavia lecture notes, 2022)"
      url: "https://mate.unipv.it/moiola/T/MNAPDE2022/MNAPDE2022.pdf"
    - title: "TU Dortmund, Lecture notes: The Rellich Lemma on the Helmholtz equation"
      url: "https://analysis.mathematik.tu-dortmund.de/storages/analysis-mathematik/r/dokumente/Kurzskripte/Rellich-Lemma-20260316.pdf"
---

## Statement

Assume the Axiom of Choice inherited from the modal DtN/trace suppliers, covering the Countable Choice used by the local UCP supplier. Let $O\subset\mathbb R^3$ be a bounded open set with $C^\infty$ boundary ([[def-bounded-c-k-domain-and-boundary-charts]]) whose exterior $D=\mathbb R^3\setminus\overline O$ is connected, let $k>0$, and let $R>0$ with $\overline O\subset B_R(0)$. Suppose $u$ is $C^\infty$ on $\overline D$, solves $(\Delta+k^2)u=0$ on $D$ with the Euclidean Laplacian $\Delta$ ([[def-laplacian-of-a-c2-function]]), vanishes on $\partial O$, and is outgoing in the class of [[lem-em-sphere-outgoing-dirichlet-to-neumann-map]]: its trace $f=u|_{S_R}$ lies in $H^{1/2}(S_R)$ and its normal derivative on $S_R$ is $T_Rf$ in the weak trace sense of that lemma. Then $u=0$ on $D$. No decay rate, asymptotic expansion or pointwise Sommerfeld formula beyond the stated outgoing class is assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]); a bounded $C^\infty$ obstacle $O$ with connected exterior $D$; $k>0$; $R>0$ with $\overline O\subset B_R(0)$; and a $C^\infty(\overline D)$ solution $u$ of $(\Delta+k^2)u=0$ on $D$, vanishing on $\partial O$, outgoing in the modal class of the sphere DtN lemma, with trace $f=u|_{S_R}\in H^{1/2}(S_R)$ and normal derivative $T_Rf$.

[L1] First Green identity on a bounded $C^1$ domain: for real $w\in C^2(\overline\Omega)$ and $v\in C^1(\overline\Omega)$, $\int_\Omega(v\Delta w+\nabla w\cdot\nabla v)\,dx=\int_{\partial\Omega}v\,\partial_\nu w\,dS$ ([[cor-first-green-identity-on-a-bounded-c-one-domain]]).

[L2] The Laplacian is $\Delta f=\operatorname{div}\nabla f=\sum_i\partial_i\partial_if$ ([[def-laplacian-of-a-c2-function]]).

[L3] Bounded $C^k$ domains have the local graph property, so $D\cap B_R(0)$ is a bounded domain whose boundary is the disjoint union of the smooth pieces $\partial O$ and $S_R$ ([[def-bounded-c-k-domain-and-boundary-charts]]).

[L4] Sphere DtN lemma: for $k,R>0$ the map $T_Rf=\sum_{l,m}t_lf_{lm}Y^R_{lm}$ is bounded $H^{1/2}(S_R)\to H^{-1/2}(S_R)$ with $\operatorname{Re}\langle T_Rf,f\rangle\le0$ and $\operatorname{Im}\langle T_Rf,f\rangle=\sum_{l,m}(\operatorname{Im}t_l)|f_{lm}|^2>0$ for $f\ne0$; the function $u(rn)=\sum_{l,m}f_{lm}h_l(kr)/h_l(kR)R^{-1}Y_{lm}(n)$, $r\ge R$, is the unique outgoing finite-local-energy exterior solution with trace $f$ on $S_R$ and normal derivative $T_Rf$ in the weak trace sense ([[lem-em-sphere-outgoing-dirichlet-to-neumann-map]]).

[L5] Bounded-potential unique continuation: for nonempty open connected $\Omega\subseteq\mathbb R^3$, $V\in L^\infty_{\mathrm{loc}}(\Omega)$ and $\psi\in H^2_{\mathrm{loc}}(\Omega)$ with $\Delta\psi=V\psi$ distributionally, vanishing of $\psi$ on a nonempty open subset of $\Omega$ forces $\psi=0$ on $\Omega$ ([[thm-bounded-potential-weak-unique-continuation-in-three-dimensions]]).

**Choice accounting.** The Axiom of Choice is assumed in the Statement and is carried by the DtN/trace supplier [L4]; the local unique-continuation supplier [L5] carries Countable Choice, which AC supplies. The Green-identity, positivity and propagation steps below introduce no further choice.

## Proof

**Proof technique:** direct.

**Given:** The data and solution of the Given paragraph above.

1.1 **Green's identity on the truncated exterior and vanishing of the imaginary boundary pairing.** The truncated region $A:=D\cap B_R(0)$ is a bounded open set whose boundary is the disjoint union of $\partial O$ and $S_R$, with the outward normal of $A$ equal to the outer normal of $S_R$ and to the inward normal of $\partial O$ [L3]. Write $u=a+ib$ with real smooth $a,b$. Applying [L1] to $(w,v)=(a,a)$ and $(b,b)$ and adding gives $\int_A(|\nabla u|^2-k^2|u|^2)\,dx=\int_{\partial A}\operatorname{Re}(\overline u\,\partial_\nu u)\,dS$, because $\Delta a=-k^2a$ and $\Delta b=-k^2b$. For the imaginary part, apply [L1] to $(w,v)=(b,a)$ and $(a,b)$ and subtract: the volume integrand is $a\Delta b-b\Delta a+\nabla b\cdot\nabla a-\nabla a\cdot\nabla b=0$, and the boundary integrand is $a\partial_\nu b-b\partial_\nu a=\operatorname{Im}(\overline u\,\partial_\nu u)$. Thus the FULL complex identity is $\int_A(|\nabla u|^2-k^2|u|^2)\,dx=\int_{\partial A}\overline u\,\partial_\nu u\,dS$. The inner boundary contributes zero because $u=0$ on $\partial O$, so $\int_{S_R}\operatorname{Im}(\overline u\,\partial_\nu u)\,dS=0$. Since $\partial_\nu u=T_Rf$ on $S_R$ in the weak trace sense of [L4] and $f=u|_{S_R}$, the last identity is the vanishing of the imaginary part of the dual pairing, $\operatorname{Im}\langle T_Rf,f\rangle=0$. [L1, L2, L3]

2.1 **The boundary trace vanishes.** By [L4] the imaginary pairing of the DtN operator is $\operatorname{Im}\langle T_Rf,f\rangle=\sum_{l,m}(\operatorname{Im}t_l)|f_{lm}|^2$ with every coefficient $\operatorname{Im}t_l>0$. Since the left side is zero by step 1.1 and every term of the sum is nonnegative, every coefficient $f_{lm}$ vanishes, so $f=0$; consequently also $T_Rf=0$ and, by the trace identity of [L4], $\|f\|_{H^{1/2}(S_R)}=0$. [L4, step 1.1]

3.1 **Vanishing on the exterior of the large sphere.** Restricted to $\{r>R\}$, the field $u$ is an outgoing finite-local-energy solution of the Helmholtz equation with trace $f=0$ on $S_R$ and normal derivative $T_Rf=0$: $u$ is $C^\infty$ on the closed region $\{r\ge R\}$, hence in every $H^1(\{R<|x|<R_1\})$, and its trace and weak normal derivative on $S_R$ are the ones named in the statement. By the uniqueness clause of [L4] there is exactly one such solution, namely the outgoing series with coefficients $f_{lm}=0$; hence $u=0$ on $\{r>R\}$. The set $D\cap\{r>R\}$ is a nonempty open subset of $D$ because $O$ is bounded, so $u$ vanishes on the nonempty open set $D\cap\{r>R\}$. [L4, step 2.1]

4.1 **Unique continuation on $D$.** The real and imaginary parts of $u$ are $C^\infty$ on $\overline D$, hence in $H^2_{\mathrm{loc}}(D)$, and satisfy $\Delta w=-k^2w$ on $D$ because $\Delta u=-k^2u$; the coefficient $V\equiv-k^2$ lies in $L^\infty_{\mathrm{loc}}(D)$ and $D$ is nonempty, open and connected. By step 3.1 each of them vanishes on the nonempty open subset $D\cap\{r>R\}$, so [L5] applied to $w=\operatorname{Re}u$ and $w=\operatorname{Im}u$ on $\Omega=D$ gives $\operatorname{Re}u=\operatorname{Im}u=0$ on $D$, that is, $u=0$ on $D$, as asserted. [L5, step 3.1] ∎

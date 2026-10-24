---
id: lem-qftx-coupled-penrose-injective-edge
kind: lemma
title: Injective fibre-harmonic edge for coupled Penrose cohomology
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 3
axiom_base: "ZF + full AC through the conditional analytic Dolbeault comparison and harmonic theory."
deps:
  - def-axiom-of-choice
  - def-qftx-coupled-penrose-incidence-geometry
  - lem-qftx-coupled-penrose-fibre-dolbeault
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
  lem-qftx-coupled-penrose-fibre-dolbeault: mathematical-premise
  thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology: mathematical-premise
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§§2–3, printed pp. 46–54: fibre-harmonic representatives, unique decomposition, and injective cohomology edge."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§3, printed pp. 488–494: relative Dolbeault/Penrose transform route; cited only as independent context."
verification:
  precheck: pass
---

## Statement

Assume full AC and the following analytic comparison: for $r\in\{0,1,2,3\}$, every finite-rank holomorphic vector bundle $G$ on $X=\mathbb P^r(\mathbb C)$ has a canonical isomorphism $H^q(X,\mathcal O(G))\cong H^q_{\bar\partial}(X,G)$ for every $q\ge0$, and for $G=\mathcal O_X$ one has $H^0(X,\mathcal O_X)=\mathbb C$ and $H^q(X,\mathcal O_X)=0$ for $q>0$. Let $E\to S^4$ be a smooth finite-rank Hermitian bundle with smooth unitary connection $A$, and let $F$ be a holomorphic bundle on $Z=\mathbb CP^3$ smoothly identified with $\pi^*E$ so that its Dolbeault operator is the ordinary vertical Dolbeault operator and the connection-horizontal alpha-plane operator from the incidence definition. Fibrewise harmonic projection of a global Dolbeault representative defines a linear map

$$\mathcal P_A:H^1(Z,F\otimes\mathcal O_Z(-2))\longrightarrow\Gamma(S^4,E).$$

Every global closed representative $\alpha$ has a unique decomposition $\alpha=\alpha_H+s\sigma+\bar\partial_F\gamma$, where $s=\mathcal P_A[\alpha]$, $\alpha_H$ is horizontal, $\sigma$ is the normalized fibre-harmonic generator, and the vertical correction $\gamma$ is smooth and glues over the base. The map is well defined and injective. The analytic comparison input is a conditional premise of this statement until its planned batch-67 carrier and proof are present and current.

## Statement references

[[def-qftx-coupled-penrose-incidence-geometry]]

[[lem-qftx-coupled-penrose-fibre-dolbeault]]

[[lem-qftx-coupled-penrose-positive-orientation-asd]]

[[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

[[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[Rawnsley, §§2–3, pp. 46–54](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §3, pp. 488–494](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

## Facts & Assumptions

**Given:** Full AC; the stated holomorphic bundle on the incidence twistor space; the Dolbeault operator comparison assumption; and compact fibres $L_x\cong\mathbb CP^1$.

[A1] The actual batch-67 carrier states that under full AC, for each $r\in\{0,1,2,3\}$ and every finite-rank holomorphic vector bundle $G$ on $\mathbb P^r(\mathbb C)$, the canonical comparison $H^q(X,\mathcal O(G))\cong H^q_{\bar\partial}(X,G)$ holds for every $q\ge0$; for the trivial line it also states $H^0(X,\mathcal O)=\mathbb C$ and $H^q(X,\mathcal O)=0$ for $q>0$. This matches the comparison used here. The item file and full conditional proof are present and were inspected, but its current Step 1 readiness record is missing, so the premise remains unresolved for this batch. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[F1] The twistor fibres are $\mathbb CP^1$, the incidence horizontal directions split the smooth $(0,1)$ cotangent bundle into horizontal and vertical parts, and the vertical complex structure is the ordinary one. [[def-qftx-coupled-penrose-incidence-geometry]]

[F2] The vertical Dolbeault groups are $H^{0,0}(\mathcal O(-2))=0$, $H^{0,1}(\mathcal O(-2))\cong\mathbb C$, and both groups of $\mathcal O(-1)$ vanish. [[lem-qftx-coupled-penrose-fibre-dolbeault]]

[F3] On a compact complex manifold, smooth Dolbeault classes have smooth harmonic representatives, and the fibrewise Hodge decomposition separates harmonic and exact components; analytic sheaf cohomology still needs the separate comparison in [A1]. [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

## Proof

**Given:** The bundle data and the conditional analytic comparison [A1].

1.1 By [A1], each class in the analytic group $H^1(Z,F\otimes\mathcal O_Z(-2))$ has a global smooth $\bar\partial_F$-closed $(0,1)$-form representative $\alpha$. Split its $(0,1)$ part into the horizontal and vertical components given by [F1]. For each fibre $L_x$, [F2] identifies the harmonic space of $\mathcal O(-2)$-valued $(0,1)$-forms with $H^0(L_x,K_{L_x}\otimes\mathcal O(2))=H^0(L_x,\mathcal O)=\mathbb C$ by the conjugate-linear Hodge-# map. Let $\sigma_x$ be the unique harmonic form with $\#_x\sigma_x=1$. The Fubini–Study and tautological Hermitian metrics in [F1] vary smoothly with $x$, so the local metric-star formula for $\#_x^{-1}(1)$ shows $\sigma_x$ varies smoothly. Its trace pairing with $1$ is $\int_{L_x}\sigma_x=\|\sigma_x\|^2>0$ by [F2]; dividing by this smooth positive scalar fixes the integral-one normalization. The fibre trace is coordinate invariant, so these normalized generators glue across both projective charts. Integrating the vertical part of $\alpha$ against them over compact fibres therefore produces a smooth section $s\in\Gamma(E)$. [given, A1, F1, F2, F3, construct]

2.1 The decomposition $\alpha_V|_{L_x}=s(x)\sigma|_{L_x}+\bar\partial_V\gamma_x$ has a unique solution $\gamma_x$, because the fibre cohomology in degree zero for $\mathcal O(-2)$ is zero by [F2] and the harmonic part was subtracted. These solutions vary smoothly: on the Sobolev completions, $\bar\partial_V$ is an isomorphism from degree-zero sections onto the orthogonal complement of the harmonic degree-one kernel; both its kernel and this restricted cokernel are zero by [F2]. In a local fibration trivialization, the restricted operators vary smoothly with $x$, so near $x_0$ factor $D_x=D_{x_0}(I+D_{x_0}^{-1}(D_x-D_{x_0}))$; the second factor has a norm-convergent Neumann inverse for $x$ close to $x_0$. Elliptic regularity gives a smooth inverse on smooth data. Uniqueness makes the local solutions agree on overlaps. Thus globally $\alpha=\alpha_H+s\sigma+\bar\partial_F\gamma$ with $\alpha_H$ horizontal. [F2, F3, step 1.1, algebra]

3.1 If $\alpha$ is changed by $\bar\partial_F\beta$, the vertical component changes by $\bar\partial_V\beta$; its fibre harmonic projection is zero because exact forms are orthogonal to harmonic forms. Hence $s$ depends only on the cohomology class and defines $\mathcal P_A$. If $s=0$, the decomposition gives $\alpha=\alpha_H+\bar\partial_F\gamma$. Since $\bar\partial_F\alpha=0$ and $\bar\partial_F^2=0$, $\bar\partial_F\alpha_H=0$; its vertical component says that $\alpha_H|_{L_x}$ is a holomorphic section of $H^{0,1}_{\!H}|_{L_x}\otimes\mathcal O(-2)\otimes E_x$. [F1, F2, step 2.1, algebra]

4.1 In the two fibre charts $t$ and $u=1/t$, the horizontal vector frames from [F1] are related by multiplication by $u$; dualizing gives $H^{0,1}_{\!H}|_{L_x}\cong\mathcal O(1)^{\oplus2}$. Thus the coefficient bundle in step 3.1 is $\mathcal O(-1)^{\oplus2}\otimes E_x$. Since both $H^{0,0}_{\bar\partial}(L_x,\mathcal O(-1))$ groups vanish by [F2], the holomorphic horizontal form $\alpha_H|_{L_x}$ is zero for every $x$. Hence $\alpha=\bar\partial_F\gamma$ and its class is zero. The kernel of $\mathcal P_A$ is therefore zero, proving injectivity. [F1, F2, step 3.1, algebra] ∎

---
id: def-rational-mixed-hodge-structure
kind: definition
title: "Rational mixed Hodge structures"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-basis]
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Definition

A rational mixed Hodge structure is a finite-dimensional rational vector space $H$ with a finite increasing filtration $W$ on $H$ and a finite decreasing filtration $F$ on $H_{\mathbb C}=H\otimes_{\mathbb Q}\mathbb C$, such that the induced filtration $F$ and its complex conjugate on $\operatorname{Gr}^W_nH_{\mathbb C}$ are $n$-opposed. Explicitly,
$$\operatorname{Gr}^W_nH_{\mathbb C}=\bigoplus_{p+q=n}H^{p,q}_n,\qquad H^{p,q}_n=F^p\operatorname{Gr}^W_nH_{\mathbb C}\cap\overline F^q\operatorname{Gr}^W_nH_{\mathbb C},$$
with $\overline{H^{p,q}_n}=H^{q,p}_n$. Here $F^p\operatorname{Gr}^W_n$ means the image of $F^p\cap W_n$ modulo $W_{n-1}$. A morphism is a rational linear map preserving $W$ and $F$. A pure structure of weight $n$ has $W_{n-1}=0$, $W_n=H$. A substructure or quotient structure carries the induced or quotient filtrations respectively; their existence for the kernel and image of a morphism is proved in the subsequent strictness lemma. This forward mention is explanatory and is not a prerequisite of the definition.

The Tate structure $\mathbb Q(r)$ has weight $-2r$ and type $(-r,-r)$. Tensor filtrations are $W_n(H\otimes K)=\sum_{a+b=n}W_aH\otimes W_bK$ and $F^p(H\otimes K)_{\mathbb C}=\sum_{a+b=p}F^aH_{\mathbb C}\otimes F^bK_{\mathbb C}$. The dual has $W_nH^*=\{u:u(W_{-n-1}H)=0\}$ and $F^pH^*_{\mathbb C}=\{u:u(F^{1-p}H_{\mathbb C})=0\}$. A pure rational Hodge structure is polarizable if a rational bilinear form of the requisite parity pairs only complementary Hodge types and its Weil-operator Hermitian form is positive definite. No mixed structure is assumed to split over $\mathbb R$ or $\mathbb Q$.

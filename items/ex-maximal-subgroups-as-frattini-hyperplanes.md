---
id: ex-maximal-subgroups-as-frattini-hyperplanes
kind: example
title: "The maximal subgroups of the dihedral group of order eight as Frattini hyperplanes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-frattini-subgroups-of-dihedral-and-quaternion-groups, cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, §2.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Example

For $D=\operatorname{Dih}(C_4)=\langle r,s\rangle$, the maximal subgroups are

$$\langle r\rangle,\qquad\langle r^2,s\rangle,\qquad\langle r^2,rs\rangle.$$

Modulo $\Phi(D)=\langle r^2\rangle$, these are the hyperplanes of $(\mathbb Z/2)^2$.

## Facts & Assumptions

**Given:** The dihedral group $D=\operatorname{Dih}(C_4)$ of order eight.

[L1] For $D=\operatorname{Dih}(C_4)$ one has $\Phi(D)=\langle r^2\rangle$, and for the dihedral group of order eight and $Q_8$ the Frattini subgroup has order two and the Frattini quotient is $(\mathbb Z/2)^2$ ([[ex-frattini-subgroups-of-dihedral-and-quaternion-groups]]).

[L2] If $\pi:P\to E=P/\Phi(P)$ is the quotient map, the maximal subgroups of $P$ are exactly $\pi^{-1}(\ker\lambda)=\ker(\lambda\circ\pi)$ for nonzero $\mathbb F_p$-linear homomorphisms $\lambda:E\to\mathbb Z/p$ ([[cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes]]).

## Verification

**Proof technique:** direct.

1.1 The three displayed subgroups have order four, are distinct, and contain $\Phi(D)=\langle r^2\rangle$ from [L1]. Since $D$ has order eight, each is maximal. [given, L1, algebra]

2.1 Use the quotient basis $(r\Phi(D),s\Phi(D))$. The quotient images of the displayed subgroups are the lines spanned by $(1,0)$, $(0,1)$, and $(1,1)$, which are respectively the kernels of $(a,b)\mapsto b$, $(a,b)\mapsto a$, and $(a,b)\mapsto a+b$. These are precisely the hyperplanes described by [L2]. [step 1.1, L2, algebra] ∎

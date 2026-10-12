---
id: thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues
aliases: [nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues]
kind: theorem
domain: mathematics
title: "No positive compact-potential eigenvalues"
status: draft
origin: pipeline
dependency_level: 7
deps: [thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp, thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound, thm-nrqm-controlled-dynamics-radial-carleman-estimate, thm-nrqm-orbital-and-spin-sphere-onb, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, thm-plancherel, def-sobolev-space-wkp-and-its-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp: mathematical-premise
  thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-controlled-dynamics-radial-carleman-estimate: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  thm-plancherel: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Jerison and C. E. Kenig, Unique continuation and absence of positive eigenvalues for Schrodinger operators, Annals of Mathematics 121 (1985) 463-494 (absence of positive eigenvalues for bounded compactly supported potentials)"
      url: "https://doi.org/10.2307/1971319"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 9 pp. 181-214 (radial solutions, Bessel-type asymptotics and spectral transforms)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real and compactly supported, let
$k>0$, and let $H=-\Delta+M_V$ be the self-adjoint operator on
$D(H)=H^2(\mathbb R^3)$ of
[[thm-nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound]] (applied
to the $L^2$ part of $V$; the bounded part is even simpler). Then $k^2$ is not
an eigenvalue of $H$: if $\psi\in H^2(\mathbb R^3)$ satisfies
$-\Delta\psi+V\psi=k^2\psi$, then $\psi=0$.

## Facts & Assumptions

**Given:** the real bounded compactly supported $V$, the number $k>0$, and a solution $\psi\in H^2(\mathbb R^3)$ of $-\Delta\psi+V\psi=k^2\psi$.

[F1] Spherical decomposition of the free equation: in polar coordinates the angular coefficients $f_{lm}(r)=\int_{S^2}\psi(r\Omega)\overline{Y_{lm}(\Omega)}d\sigma(\Omega)$ of a free solution ($-\Delta\psi=k^2\psi$ for $r>R$) satisfy $f''+\frac2rf'+(k^2-\frac{l(l+1)}{r^2})f=0$, so the reduced coefficients $\alpha_{lm}:=rf_{lm}$ satisfy $\alpha''+(k^2-\frac{l(l+1)}{r^2})\alpha=0$ and hence are fixed linear combinations $A_{lm}j_l(kr)+B_{lm}y_l(kr)$ of the two spherical solutions with $j_l(z)=(-z)^l(z^{-1}\frac{d}{dz})^l\frac{\sin z}{z}$ and $y_l$ obtained from $-\frac{\cos z}{z}$, whose asymptotics are $j_l(z)=\sin(z-l\pi/2)/z+O(z^{-2})$ and $y_l(z)=-\cos(z-l\pi/2)/z+O(z^{-2})$ ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]], [[thm-plancherel]]).

[F2] Unique continuation: $\Delta\alpha=(V-k^2)\alpha$ on the connected set $\mathbb R^3$ with $V-k^2\in L^\infty_{\mathrm{loc}}$, and if $\alpha$ vanishes on a nonempty open set then $\alpha=0$ everywhere ([[thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Angular Parseval: $\|\psi\|_{L^2(\mathbb R^3)}^2=\sum_{l,m}\int_0^\infty|\alpha_{lm}(r)|^2dr$ and the Laplacian acts channelwise ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[def-hilbert-space]]).

## Proof

1.1 [Exterior coefficients vanish] Fix $R$ with $\operatorname{supp}V\subseteq B_R$ and $l,m$. For $r>R$ the free equation holds, so [F1] gives $\alpha_{lm}(r)=A_{lm}j_l(kr)+B_{lm}y_l(kr)$, hence with $\theta:=kr-l\pi/2$ one has $\alpha_{lm}(r)=k^{-1}(A_{lm}\sin\theta-B_{lm}\cos\theta)+O(r^{-1})$ and $|\alpha_{lm}(r)|^2=k^{-2}(A_{lm}\sin\theta-B_{lm}\cos\theta)^2+O(r^{-1})$. The mean of $(A\sin\theta-B\cos\theta)^2$ over each period $2\pi/k$ equals $(A^2+B^2)/2$, so if $(A_{lm},B_{lm})\ne(0,0)$ there is $c>0$ with $\int_R^{R'}|\alpha_{lm}(r)|^2dr\ge c(R'-R)$ for all large $R'$, and $r\mapsto\alpha_{lm}(r)$ is not in $L^2(dr)$; by the Parseval identity [F3] and $\psi\in L^2(\mathbb R^3)$ this forces $(A_{lm},B_{lm})=(0,0)$. Hence $\alpha_{lm}(r)=0$ for all $r>R$. [F1, F3, given, algebra]

2.1 [Conclusion] By step 1.1, $\alpha_{lm}=0$ on $(R,\infty)$ for every $(l,m)$, so by the angular expansion and completeness in [F1] and the Parseval identity [F3] the function $\psi$ vanishes almost everywhere on the nonempty open exterior $\{|x|>R\}$. On $\mathbb R^3$ one has $\Delta\psi=(V-k^2)\psi$ with $V-k^2\in L^\infty_{\mathrm{loc}}(\mathbb R^3)$ and $\psi\in H^2_{\mathrm{loc}}(\mathbb R^3)$; the weak unique continuation theorem [F2] applied on the connected domain $\mathbb R^3$ gives $\psi=0$ everywhere, which is the claim. [step 1.1, F1, F2, F3, given] ∎

---
id: lem-csm-frontier-fk-influence-threshold
kind: lemma
title: "A maximum conditional edge influence bound for finite FK measures"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-fk-real-boundaries
  - lem-csm-frontier-fk-fkg-spatial-markov
  - lem-csm-frontier-finite-box-cube-max-fiber-influence
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
  lem-csm-frontier-finite-box-cube-max-fiber-influence: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benjamin Graham and Geoffrey Grimmett, Influence and sharp-threshold theorems for monotonic measures"
      url: https://arxiv.org/pdf/math/0505057
      locator: "Theorem 2.10 and its complete proof, PDF pp. 4–9: monotone conditional laws, sequential encoding and coordinate reordering."
    - title: "Geoffrey Grimmett, Svante Janson, and James Norris, Influence in Product Spaces"
      url: https://arxiv.org/pdf/1207.1780
      locator: "Theorems 1.1 and 2.3, and Remark 2.1: product-space influence and the endpoint/nonconstant-fiber distinction. The needed finite-box estimate is proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $G=(V,E,\partial)$ be a finite undirected multigraph, let $B\subseteq V$ have boundary partition $\xi$, fix $q\geq1$, $\varepsilon\in(0,1/2)$, and $p\in[\varepsilon,1-\varepsilon]$, and let $\phi=\phi_{G,p,q}^{\xi}$ be the finite FK law. For every increasing event $A\subseteq2^E$ with $0<\phi(A)<1$ and $|E|\geq2$, define the conditional influence of edge $e$ by

$$I_A(e):=\phi(A\mid \omega_e=1)-\phi(A\mid\omega_e=0).$$

There is a constant $c(q,\varepsilon)>0$ such that

$$\max_{e\in E}I_A(e)\geq c(q,\varepsilon)\,\phi(A)(1-\phi(A))\frac{\log|E|}{|E|}.$$

## Statement references

[[def-csm-frontier-fk-real-boundaries]]

[[lem-csm-frontier-fk-fkg-spatial-markov]]

## Facts & Assumptions

**Given:** A finite FK law with $q\geq1$, $\varepsilon\in(0,1/2)$, $p\in[\varepsilon,1-\varepsilon]$, an increasing event $A$ with $0<\phi(A)<1$, and $|E|\geq2$.

[F1] The finite FK law is positive and log-supermodular, and its conditional laws inherit the FKG association inequality ([[lem-csm-frontier-fk-fkg-spatial-markov]]).

[F2] The mass, boundary partition, and finite configuration space are those of [[def-csm-frontier-fk-real-boundaries]].

[F3] For an increasing finite union of axis-parallel boxes $C\subseteq[0,1]^n$, $n\ge2$, its elementary volume $a$ and endpoint influences $F_i$ satisfy $\max_iF_i\ge a(1-a)\log n/(4n)$; the finite-volume conventions and complete proof are given in [[lem-csm-frontier-finite-box-cube-max-fiber-influence]].

## Proof

1.1 We first establish two conditional comparisons. Fix some coordinates and change one prescribed value from zero to one. The resulting laws $\mu_0,\mu_1$ on the unprescribed coordinates are strictly positive and associated by [F1]. For $z\le z'$, apply log-supermodularity to the incomparable configurations $(z',0)$ and $(z,1)$ to obtain $\mu_1(z')\mu_0(z)\ge\mu_0(z')\mu_1(z)$; normalizing constants cancel. Thus $R=\mu_1/\mu_0$ is increasing, $\mathbb E_{\mu_0}R=1$, and association gives $\mathbb E_{\mu_1}h=\mathbb E_{\mu_0}(hR)\ge\mathbb E_{\mu_0}h$ for every increasing $h$. Successively changing prescribed coordinates proves conditional monotonicity for ordered assignments on the same prescribed set. Separately, in any fixed-prefix conditional law, association gives $\operatorname{Cov}(h,X_j)\ge0$, whence $\mathbb E[h\mid X_j=0]\le\mathbb E h\le\mathbb E[h\mid X_j=1]$ for increasing $h$. Strict positivity makes both conditional expectations defined. This second comparison allows an additional coordinate to be prescribed. [F1, algebra]

2.1 Label the edges $1,\ldots,n$. For a prefix $\eta$ put $a_r(\eta)=\phi(X_r=1\mid X_s=\eta_s,\ s<r)$ and $t_r(\eta)=1-a_r(\eta)$; positivity gives $0<t_r<1$. For $U\in[0,1]^n$ define recursively $\Phi_r(U)=\mathbf1_{\{U_r>t_r(\Phi_{<r}(U))\}}$. The first comparison in step 1.1 makes each $a_r$ increasing, so induction makes $\Phi$ coordinatewise increasing. For every $\omega\in\{0,1\}^n$, its exact inverse image is the box $Q_\omega=\prod_r I_r(\omega)$, where $I_r(\omega)=(t_r(\omega_{<r}),1]$ if $\omega_r=1$ and $I_r(\omega)=[0,t_r(\omega_{<r})]$ if $\omega_r=0$. Indeed membership in these intervals recursively forces exactly the prefix $\omega_{<r}$ and then bit $\omega_r$. These boxes form a disjoint partition of the entire cube, including all threshold values and endpoint faces. Their elementary volumes are $v_n(Q_\omega)=\prod_r a_r(\omega_{<r})^{\omega_r}(1-a_r(\omega_{<r}))^{1-\omega_r}=\phi(\omega)$ by the finite chain rule. Consequently $C=\Phi^{-1}(A)=\bigcup_{\omega\in A}Q_\omega$ is an increasing finite-box set of elementary volume $\phi(A)$. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Fix $j$ and use the same uniforms attached to the same edge labels to construct $\Psi$ in order $j,1,\ldots,j-1,j+1,\ldots,n$. First set $U_j=1$. Both outputs have $j$th bit one. For $r<j$, suppose inductively $\Psi_{<r}\ge\Phi_{<r}$. The two comparisons in step 1.1 give
$$\phi(X_r=1\mid X_{<r}=\Psi_{<r},X_j=1)\ge\phi(X_r=1\mid X_{<r}=\Phi_{<r},X_j=1)\ge\phi(X_r=1\mid X_{<r}=\Phi_{<r}).$$
The common $U_r$ therefore gives $\Psi_r\ge\Phi_r$. After coordinate $j$, both constructions condition on the same set of previous labels, including $j=1$, with ordered values, so the first comparison alone continues the induction for $r>j$. Thus $\Psi(U_{-j},1)\ge\Phi(U_{-j},1)$ pointwise. With $U_j=0$, both $j$th bits are zero. For $r<j$, induction and the same two comparisons instead give
$$\phi(X_r=1\mid X_{<r}=\Psi_{<r},X_j=0)\le\phi(X_r=1\mid X_{<r}=\Phi_{<r},X_j=0)\le\phi(X_r=1\mid X_{<r}=\Phi_{<r}),$$
provided $\Psi_{<r}\le\Phi_{<r}$. For $r>j$ the first comparison continues this reversed order. Hence $\Psi(U_{-j},0)\le\Phi(U_{-j},0)$ pointwise as well. [step 1.1, step 2.1, construct, algebra]

4.1 Since $A$ is increasing, the pointwise comparisons in step 3.1 imply, by elementary $(n-1)$-dimensional box integration,
$$F_j(C)\le\int\mathbf1_A(\Psi(U_{-j},1))\,dU_{-j}-\int\mathbf1_A(\Psi(U_{-j},0))\,dU_{-j}=I_A(j).$$
The equality follows from the finite conditional chain rule: after the first, forced bit $j$, the reordered algorithm samples the successive conditional probabilities given that bit. Its output inverse images and their sections are finite boxes, exactly as in step 2.1, so the displayed integrals are finite volume sums. These are literal endpoint evaluations of the defined maps, not conditioning a uniform variable on a null-probability event. [F3, step 2.1, step 3.1, algebra]

5.1 Apply [F3] to $C$ from step 2.1, with $n=|E|\ge2$ and $a=\phi(A)$. For some $j$ its endpoint influence is at least $\phi(A)(1-\phi(A))\log n/(4n)$. Step 4.1 bounds that influence above by $I_A(j)$, proving the stated inequality with $c(q,\varepsilon)=1/4$. All conditional laws used exist for every real $q\ge1$ and $p\in[\varepsilon,1-\varepsilon]\subset(0,1)$. [F1, F3, step 2.1, step 4.1, algebra] ∎

## Remarks

The argument uses the finite-box cube estimate, proved from finite Fourier expansion and two-point hypercontractivity. It does not assume a separate continuous-cube influence theorem, integer $q$, independent FK edges, or an infinite-volume construction.

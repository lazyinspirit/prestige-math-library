---
id: thm-locally-free-locus-finite-presentation-open
kind: theorem
title: Openness of the finite free locus
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-finite-type-finite-presentation-module-sheaf
  - def-locally-free-sheaf-finite-rank
  - lem-sheaf-nakayama-fibre-detects-generation
  - def-fibre-of-module-at-point
  - def-quasi-coherent-module-scheme
  - def-module-on-ringed-space
  - def-scheme
  - def-finitely-presented-module-and-algebra
  - thm-localisation-of-modules-is-exact
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - lem-associated-sheaf-restriction-affine-open
  - def-associated-sheaf-module-affine-scheme
  - def-quotient-ring
  - def-polynomial-ring-over-a-commutative-ring
  - def-quotient-module
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a scheme and let $\mathcal F$ be a finitely presented quasi-coherent
$\mathcal O_X$-module ([[def-finite-type-finite-presentation-module-sheaf]]).
For $r\ge0$ let
$$Z_r(\mathcal F)=\{x\in X:\mathcal F_x\cong\mathcal O_{X,x}^{\,r}\ \text{as}\ \mathcal O_{X,x}\text{-modules}\}$$
be the locus where the stalk is free of rank $r$
([[def-locally-free-sheaf-finite-rank]]).

Then:

1. $Z_r(\mathcal F)$ is open in $X$.
2. Every $x\in Z_r(\mathcal F)$ has an open neighbourhood $V$ with
   $\mathcal F|_V\cong\mathcal O_V^{\,r}$; in particular $\mathcal F$ is locally
   free of rank $r$ on $Z_r(\mathcal F)$.
3. The hypothesis cannot be weakened to pointwise fibre dimension: for a field
   $k$, the ring $A=k[t]/(t^2)$ and the module $M=A/(t)$, the sheaf
   $\mathcal F=\widetilde M$ on $X=\operatorname{Spec}A$ has
   $\dim_{\kappa(x)}\mathcal F(x)=1$ at the unique point $x\in X$, while
   $\mathcal F_x\cong k$ is not free of rank $1$ over $\mathcal O_{X,x}=A$ and
   $\mathcal F$ is not locally free of rank $1$. Thus the vanishing of the
   kernel of the presentation $\mathcal O_X\longrightarrow\mathcal F$ at $x$,
   equivalently freeness of the stalk, is the check that the fibre dimension
   alone does not supply.

No Noetherian hypothesis on $X$ is made.

## Facts & Assumptions

**Given:** The Axiom of Choice, a scheme $X$, a finitely presented quasi-coherent $\mathcal O_X$-module $\mathcal F$, an integer $r\ge0$ and a point $x\in Z_r(\mathcal F)$.

[F1] Local form of finite presentation: there is an affine open $U=\operatorname{Spec}A$ containing $x$ with $\mathcal F|_U\cong\widetilde M$ for a finitely presented $A$-module $M$; a finitely presented module is isomorphic to $A^n/K$ for a finitely generated submodule $K\subseteq A^n$, so it admits an exact sequence $A^m\to A^n\to M\to0$ with $m$ finite. Moreover a morphism of $\mathcal O_U$-modules $\widetilde{A^r}\to\widetilde M$ is induced by its component on global sections, an $A$-linear map $A^r\to M$, and $\widetilde{A^r}=\mathcal O_U^r$ ([[def-finite-type-finite-presentation-module-sheaf]], [[def-finitely-presented-module-and-algebra]], [[def-quasi-coherent-module-scheme]]).

[F2] Local freeness: $\mathcal F$ is locally free of rank $r$ near a point if some open neighbourhood is isomorphic to $\mathcal O^r$ ([[def-locally-free-sheaf-finite-rank]]).

[F3] Nakayama for finite type quasi-coherent modules: (i) $\mathcal F(x)=0$ implies $\mathcal F$ vanishes on an open neighbourhood of $x$; (ii) if $s_1,\dots,s_r\in\mathcal F(W)$ are sections over a neighbourhood $W$ of $x$ whose images in the fibre $\mathcal F(x)$ span it over $\kappa(x)$, then some affine open $U\subseteq W$ containing $x$ is such that $s_1|_U,\dots,s_r|_U$ generate $\mathcal F|_U$, that is, the induced morphism $\mathcal O_U^r\to\mathcal F|_U$ is an epimorphism ([[lem-sheaf-nakayama-fibre-detects-generation]]).

[F4] The fibre is $\mathcal F(x)=\mathcal F_x\otimes_{\mathcal O_{X,x}}\kappa(x)=\mathcal F_x/\mathfrak m_x\mathcal F_x$, a vector space over the residue field; for $\mathcal F_x\cong\mathcal O_{X,x}^r$ it is $\kappa(x)^r$, of dimension $r$ ([[def-fibre-of-module-at-point]]).

[F5] Localisation is exact: for an $A$-module map $\psi$ and a prime $\mathfrak q$, the canonical map $(\ker\psi)_{\mathfrak q}\to\ker(\psi_{\mathfrak q})$ is an isomorphism, and $(\operatorname{im}\psi)_{\mathfrak q}=\operatorname{im}(\psi_{\mathfrak q})$ ([[thm-localisation-of-modules-is-exact]], [[cor-localisation-commutes-with-kernels-images-and-cokernels]]).

[F6] Elementary algebra over a commutative ring $A$: [algebra] (a) if $N$ is finitely presented and $\psi:A^r\to N$ is surjective, then $\ker\psi$ is finitely generated: from a presentation $A^m\xrightarrow{\alpha}A^n\xrightarrow{\beta}N\to0$ form the fibre product $P=\{(v,w)\in A^r\oplus A^n:\psi(v)=\beta(w)\}$. For each basis vector $e_j$ of $A^n$, choose $v_j\in A^r$ with $\psi(v_j)=\beta(e_j)$; extending $e_j\mapsto(v_j,e_j)$ linearly gives a section $A^n\to P$ of $P\to A^n$. The kernel of that projection is $\ker\psi$, so $P\cong\ker\psi\oplus A^n$. For each basis vector $u_i$ of $A^r$, choose $w_i\in A^n$ with $\beta(w_i)=\psi(u_i)$; extending $u_i\mapsto(u_i,w_i)$ linearly gives a section $A^r\to P$ of $P\to A^r$. The kernel of this projection is $\ker\beta=\operatorname{im}\alpha$, which is finitely generated. Thus $P\cong\operatorname{im}\alpha\oplus A^r$ is finitely generated, and its direct summand $\ker\psi$ is finitely generated as well; (b) if $K$ is finitely generated and $K_{\mathfrak q}=0$, then $K_g=0$ for some $g\notin\mathfrak q$ (clear denominators on a finite generating set); (c) if $R$ is a nonzero local ring and $R^r\to R^r$ is a surjective $R$-linear map, then it is an isomorphism: its matrix has image modulo the maximal ideal all of $\kappa^r$, hence invertible reduction, hence unit determinant.

[F7] Restriction of an associated sheaf: for $V=\operatorname{Spec}B$ affine and a $B$-module $N$, and for $g\in B$, the restriction $(\widetilde N)|_{D(g)}$ is $\widetilde{(N_g)}$, the associated sheaf of the localisation of $N$, and $\widetilde{B^r}=\mathcal O_V^r$ ([[lem-associated-sheaf-restriction-affine-open]], [[def-associated-sheaf-module-affine-scheme]]).

[F8] The example of claim 3 is available: $k[t]/(t^2)$ is a quotient ring of the polynomial ring and $A/(t)$ is a quotient module ([[def-quotient-ring]], [[def-polynomial-ring-over-a-commutative-ring]], [[def-quotient-module]]).

[F9] The Axiom of Choice is the choice-function principle
([[def-axiom-of-choice]]). It is inherited through the associated-sheaf
construction in [F1] and [F7] and the sheaf Nakayama supplier [F3].



**Proof technique:** direct; lift a basis of the free stalk to finitely many sections, apply Nakayama to obtain an epimorphism $\mathcal O^r\to\mathcal F$ on an affine neighbourhood, show its kernel is finitely generated, and kill the kernel after inverting one element.

## Proof

1.1 Setup at a point of $Z_r$: let $x\in X$ with $\mathcal F_x\cong\mathcal O_{X,x}^r$; by [F1] choose an affine open $U=\operatorname{Spec}A$ containing $x$ with $\mathcal F|_U\cong\widetilde M$ for a finitely presented $A$-module $M$, and let $\mathfrak p\subseteq A$ be the prime with $x=\mathfrak p$. Then $M_{\mathfrak p}\cong A_{\mathfrak p}^r$, and by [F4] the fibre $\mathcal F(\mathfrak p)=M_{\mathfrak p}\otimes_{A_{\mathfrak p}}\kappa(\mathfrak p)=M\otimes_A\kappa(\mathfrak p)$ is $\kappa(\mathfrak p)^r$, of dimension $r$. [F1, F4]

2.1 A surjection on an affine neighbourhood: choose a finite generating list of $M$. Its images span $M\otimes_A\kappa(\mathfrak p)$ over $\kappa(\mathfrak p)$, since every tensor is a finite sum of scalar multiples of those images. Extract a basis from this finite spanning list and denote the corresponding elements of $M$ by $m_1,\dots,m_r$. The $m_i$ are sections of $\mathcal F$ over $U$, so [F3(ii)] provides an affine open $V\subseteq U$ containing $x$ such that the induced morphism $\varphi:\mathcal O_V^r\to\mathcal F|_V$ is an epimorphism; after further shrinking $V$ to a finite-presentation chart supplied by [F1], it remains an epimorphism. For $r=0$ it says that $\mathcal F(\mathfrak p)=0$. [F1, F3, step 1.1, algebra]

3.1 The kernel of $\varphi$ is finitely generated: write $V=\operatorname{Spec}B$ and $\mathcal F|_V\cong\widetilde N$ with $N$ a finitely presented $B$-module; by [F1] the epimorphism $\varphi$ corresponds to a $B$-linear surjection $\psi:B^r\to N$, and [F6(a)] shows that $K=\ker\psi$ is finitely generated. [F1, F6, step 2.1]

4.1 The map on stalks is an isomorphism: let $\mathfrak q\subseteq B$ be the prime with $x=\mathfrak q$. Both $B_{\mathfrak q}^r$ and $N_{\mathfrak q}$ are free of rank $r$ over the local ring $B_{\mathfrak q}$: the first is clear, and for the second $\mathcal F_x\cong\mathcal O_{X,x}^r=B_{\mathfrak q}^r$ while $\mathcal F_x=N_{\mathfrak q}$ because $\mathcal F|_V\cong\widetilde N$. The localised map $\psi_{\mathfrak q}:B_{\mathfrak q}^r\to N_{\mathfrak q}$ is surjective, so by [F6(c)] it is an isomorphism; in particular $K_{\mathfrak q}=\ker(\psi_{\mathfrak q})=0$ by [F5]. If $r=0$ this says that the stalk vanishes, and $\mathcal F(\mathfrak p)=0$, so by [F3(i)] $\mathcal F$ vanishes on a neighbourhood of $x$ and $\mathcal F$ is free of rank $0$ there; assume $r\ge1$ from now on. [F5, F6, F3, step 3.1]

5.1 Killing the kernel: since $K$ is finitely generated and $K_{\mathfrak q}=0$, [F6(b)] gives $g\in B\setminus\mathfrak q$ with $K_g=0$; then $\psi_g:B_g^r\to N_g$ is surjective with zero kernel, hence an isomorphism. Restricting the isomorphism $\mathcal F|_V\cong\widetilde N$ to $D(g)$ and using [F7], $\mathcal F|_{D(g)}\cong\widetilde{(N_g)}\cong\widetilde{(B_g^r)}=\mathcal O_{D(g)}^r$, and $D(g)$ is an open neighbourhood of $x$ in $X$. [F6, F7, step 3.1, step 4.1]

6.1 Claims 1 and 2: the argument of steps 1.1, 2.1, 3.1, 4.1 and 5.1 applies to every $x\in Z_r(\mathcal F)$ and produces an open neighbourhood $D(g)$ of $x$ with $\mathcal F|_{D(g)}\cong\mathcal O_{D(g)}^r$; conversely, if $\mathcal F|_W\cong\mathcal O_W^r$ then $F_y\cong\mathcal O_{X,y}^r$ for every $y\in W$, so such a $W$ is contained in $Z_r(\mathcal F)$. Hence $Z_r(\mathcal F)$ is open and is covered by the opens $D(g)$ on which $\mathcal F$ is free of rank $r$, proving claims 1 and 2. [F2, step 5.1]

7.1 Claim 3, sharpness: let $k$ be a field, $A=k[t]/(t^2)$ with class $\varepsilon$ of $t$, so that $\varepsilon^2=0$ and $\varepsilon\neq0$, and $M=A/(\varepsilon)=k$; let $x$ be the unique point of $X=\operatorname{Spec}A$, so that $\mathcal O_{X,x}=A$ and $\kappa(x)=k$. Then $\mathcal F(x)=M\otimes_Ak=M/\varepsilon M=k$, of dimension $1$, while $\mathcal F_x=M=k$ is not free of rank $1$ over $A$: a free module of rank $1$ is isomorphic to $A$, whose dimension over $k$ is $2$, and moreover $\varepsilon$ annihilates every element of $M$ while $\varepsilon\neq0$ in $A$. The kernel of the surjection $\mathcal O_X\to\mathcal F$ that sends $1$ to the class of $1\in M$ is the subsheaf $\widetilde{(\varepsilon)}$, nonzero at $x$; thus the fibre dimension $1$ and the vanishing of this kernel are genuinely different conditions, and $x\notin Z_1(\mathcal F)$ even though $\dim_{\kappa(x)}\mathcal F(x)=1$ and the set $\{x:\dim\mathcal F(x)=1\}$ happens to be all of $X$. This proves claim 3. [F1, F8, step 6.1]

8.1 Choice accounting: all selections are finite: the $r$ sections $m_1,\dots,m_r$ in step 2.1, the finitely many generators of $K$ in step 3.1 and the finitely many denominators in step 5.1. The assumed Axiom of Choice [F9] is consumed through the associated-sheaf machinery of [F1] and [F7] and through [F3(ii)] at step 2.1 (or [F3(i)] for $r=0$ at step 4.1); the local argument itself makes no new arbitrary-index selection. No Noetherian hypothesis is used. [F1, F3, F7, F9, step 2.1, step 3.1, step 4.1, step 5.1] ∎

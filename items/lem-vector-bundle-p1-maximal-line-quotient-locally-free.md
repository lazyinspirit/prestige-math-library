---
id: lem-vector-bundle-p1-maximal-line-quotient-locally-free
kind: lemma
title: The quotient by a maximal line subbundle is locally free
status: published
origin: pipeline
deps:
  - cor-affine-scheme-quasi-compact
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-polynomial-ring-over-a-field-is-a-pid
  - cor-top-cohomology-projective-space-o-d
  - def-affine-scheme-spectrum
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-direct-sum-of-a-family-of-modules
  - def-exact-sequence-sheaves
  - def-finite-type-finite-presentation-module-sheaf
  - def-hilbert-function-sheaf-projective
  - def-invertible-sheaf
  - def-integral-scheme
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-locally-ringed-space
  - def-module-on-ringed-space
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-quasi-compact-and-quasi-separated-scheme
  - def-sheaf-on-topological-space
  - def-sheaf-tensor-product
  - def-twist-quasi-coherent-sheaf-projective
  - lem-associated-sheaf-sections-basic-open
  - lem-curve-closed-subsets-finite
  - lem-field-is-noetherian
  - lem-invertible-sheaf-dual-tensor-inverse
  - lem-section-nonvanishing-affine-intersection
  - lem-vector-bundle-p1-has-maximal-degree-line-subbundle
  - lem-zero-in-a-localised-module
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-exactness-of-sheaves-stalkwise
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-quasi-coherence-check-affine-cover
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the cohomology and curve suppliers. Let
$E$ be a finite locally free $\mathcal O_{\mathbb P^1_k}$-module of rank
$r\ge2$ and let $\varphi:\mathcal O_{\mathbb P^1_k}(b)\to E$ be a nonzero
morphism with $b$ maximal as in
[[lem-vector-bundle-p1-has-maximal-degree-line-subbundle]], so that
$H^0(\mathbb P^1_k,E(-b-1))=0$. Let
$F:=E/\mathcal O_{\mathbb P^1_k}(b)$ be the cokernel of $\varphi$. Then $F$ is
a finite locally free $\mathcal O_{\mathbb P^1_k}$-module of rank $r-1$.

## Facts & Assumptions

**Given:** a field $k$, a finite locally free module $E$ of rank $r\ge2$ on $X=\mathbb P^1_k$, and a nonzero maximal-degree morphism $\varphi:\mathcal O_X(b)\to E$.

[F1] $\varphi$ is injective, $H^0(X,E(-b))\ne0$ and $H^0(X,E(-b-1))=0$ ([[lem-vector-bundle-p1-has-maximal-degree-line-subbundle]]).

[F2] Twisting is $\mathcal F(m)=\mathcal F\otimes\mathcal O_X(m)$, with canonical isomorphisms $\mathcal F(m)\otimes\mathcal O_X(n)\cong\mathcal F(m+n)$; each $\mathcal O_X(m)$ is invertible with $\mathcal O_X(m)\otimes\mathcal O_X(-m)\cong\mathcal O_X$, so twisting by $\mathcal O_X(m)$ is an equivalence of categories with inverse twisting by $\mathcal O_X(-m)$ and preserves exact sequences of $\mathcal O_X$-modules; if $L$ is invertible and $L|_U$ is free on a frame $g$, then $s\mapsto s\otimes g$ is an isomorphism $\mathcal F|_U\to(\mathcal F\otimes L)|_U$ ([[def-twist-quasi-coherent-sheaf-projective]], [[def-invertible-sheaf]], [[lem-invertible-sheaf-dual-tensor-inverse]], [[def-sheaf-tensor-product]], [[thm-exactness-of-sheaves-stalkwise]], [[def-exact-sequence-sheaves]]).

[F3] $H^0(X,\mathcal O_X(-1))=0$ and $H^1(X,\mathcal O_X(-1))=0$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[cor-top-cohomology-projective-space-o-d]]), and a short exact sequence of modules gives a long exact sequence of cohomology ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F4] $X$ is locally Noetherian, being covered by the spectra of the Noetherian rings $k[t]$ and $k[u]$ ([[def-locally-noetherian-and-noetherian-scheme]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[lem-field-is-noetherian]], [[def-projective-line-two-affine-cover-and-twisting-sheaf]]). On a locally Noetherian scheme finite locally free modules and invertible modules are coherent; cokernels of morphisms of coherent modules are coherent; and every twist of a coherent module is coherent, because coherence is local and on an open set on which $\mathcal O_X(1)$ is trivial the twist is isomorphic to the original module ([[def-coherent-module-scheme]], [[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-hilbert-function-sheaf-projective]], [[def-finite-type-finite-presentation-module-sheaf]]).

[F5] $X$ is covered by the two standard charts $U_0=\operatorname{Spec}k[t]$ and $U_1=\operatorname{Spec}k[u]$ with $u=t^{-1}$, and on each chart every twisting sheaf $\mathcal O_X(d)$ is free on a frame, in particular $\mathcal O_X(-1)$ has a nowhere-vanishing frame on each chart ([[def-projective-line-two-affine-cover-and-twisting-sheaf]]); the polynomial rings $k[t]$, $k[u]$ are principal ideal domains ([[cor-polynomial-ring-over-a-field-is-a-pid]]); a finitely generated torsion-free module over a principal ideal domain is free ([[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]).

[F6] At each point $x$, the stalk sequence of a short exact sequence of finite locally free modules is exact. Once $F$ is known to be locally free, the surjection $E_x\to F_x$ splits because $F_x$ is a free module over the local ring $\mathcal O_{X,x}$ and a basis can be lifted; hence the stalk ranks add ([[thm-exactness-of-sheaves-stalkwise]], [[def-locally-free-sheaf-finite-rank]], [[def-direct-sum-of-a-family-of-modules]]).

[F7] For every quasi-coherent $\mathcal F$ and every affine open $U=\operatorname{Spec}A$ of $X$, the canonical comparison $\mathcal F|_U\cong\widetilde{\Gamma(U,\mathcal F)}$ is an isomorphism, compatibly with restrictions to smaller affine opens; on an associated sheaf $\widetilde M$ one has $\widetilde M(D(f))=M_f$ with restriction the localisation map; the basic opens $D(f)$ form a basis of the topology of $\operatorname{Spec}A$; and an element of $M_f$ is zero exactly when some power of $f$ kills a numerator ([[thm-quasi-coherence-check-affine-cover]], [[lem-associated-sheaf-sections-basic-open]], [[def-affine-scheme-spectrum]], [[lem-zero-in-a-localised-module]]).

[F8] Affine schemes are quasi-compact, so every open cover of $\operatorname{Spec}A$ has a finite subcover ([[cor-affine-scheme-quasi-compact]], [[def-quasi-compact-and-quasi-separated-scheme]]).

[F9] If $z\in\mathcal F(U)$ and $a\in\mathcal O_X(U)$ satisfy $a\cdot z=0$ and $W\subseteq U$ is an open set on which $a$ is a unit of $\mathcal O_X(W)$, then $z|_W=0$; on the nonvanishing locus of $a$ the section $a$ is invertible; and sections of a sheaf of modules over $U$ and over $W$ that agree on $U\cap W$ glue to a unique section over $U\cup W$ ([[def-sheaf-on-topological-space]], [[def-module-on-ringed-space]], [[def-locally-ringed-space]], [[lem-section-nonvanishing-affine-intersection]]).

[F10] The Axiom of Choice is inherited from the twisting supplier [F2], the cohomology suppliers [F1], [F3], the coherence supplier [F4], the affine correspondence [F7], and the curve supplier [F11] ([[def-axiom-of-choice]]).

[F11] $X=\mathbb P^1_k$ is an integral finite-type curve. For every nonempty open $V\subseteq X$, restriction embeds $\Gamma(V,\mathcal O_X)$ into the function field $k(t)$; thus a nonzero regular section remains nonzero on every nonempty open and has nonzero germ at every point there. The residue-zero locus of a nonzero regular function on a nonempty affine open $U\subseteq X$ is a proper closed subset, hence is finite, and each of its points is closed in $X$ ([[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[def-integral-scheme]], [[lem-curve-closed-subsets-finite]]).

## Proof

**Proof technique:** direct; compute the cohomology of the quotient twisted by $\mathcal O_X(-b-1)$ to force torsion-freeness, then read local freeness off the two affine charts.

1.1 The twisted extension. By [F1] the morphism $\varphi$ is injective, so $0\to\mathcal O_X(b)\to E\to F\to0$ is exact with $F=E/\mathcal O_X(b)$. Twisting by $\mathcal O_X(-b)$ and using $\mathcal O_X(b)\otimes\mathcal O_X(-b)\cong\mathcal O_X$ gives the exact sequence $0\to\mathcal O_X\to M\to F(-b)\to0$ with $M:=E(-b)$; by [F1] $H^0(X,M)\ne0$, while $H^0(X,M(-1))=H^0(X,E(-b-1))=0$ because $M(-1)\cong E(-b-1)$. [F1, F2]

2.1 The quotient has no sections in the next twist. Twisting the sequence of step 1.1 by $\mathcal O_X(-1)$ gives the exact sequence $0\to\mathcal O_X(-1)\to M(-1)\to F(-b-1)\to0$. Its long exact sequence [F3] reads $$0=H^0(X,M(-1))\to H^0(X,F(-b-1))\to H^1(X,\mathcal O_X(-1))=0,$$ because $H^0(X,\mathcal O_X(-1))=0$ as well; hence $H^0(X,F(-b-1))=0$. [F1, F2, F3, step 1.1]

3.1 $F(-b)$ is torsion-free. Suppose there are an open $U_0\subseteq X$, nonzero $m\in F(-b)(U_0)$ and nonzero $a\in\mathcal O_X(U_0)$ with $a\,m=0$. Choose a point $x\in U_0$ with $m_x\ne0$; this only uses that $m$ is a nonzero section, and the nonzero-germ locus is not asserted to be open. Choose one of the two standard charts $T$ containing $x$, then a principal affine open $U\subseteq U_0\cap T$ containing $x$. The restricted sections remain nonzero, and $\mathcal O_X(-1)|_U$ has a nowhere-vanishing frame $g$ by [F5, F11]. The assignment $s\mapsto s\otimes g$ is an isomorphism $F(-b)|_U\to F(-b-1)|_U$, so $m':=m|_U\otimes g\in F(-b-1)(U)$ is nonzero and $a|_U\,m'=0$. Let $Z=\{y\in U:a_y\in\mathfrak m_y\}=V(a|_U)$, the residue-zero locus. It is a proper closed subset of the integral curve $U$ because $a|_U$ is nonzero [F11]; by [F11] it is finite and each point of $Z$ is closed in $X$. Thus $W:=X\setminus Z$ is open and $U\cup W=X$. On $U\cap W=U\setminus Z$, the residue of $a$ is nonzero at each point, so $a$ is a unit in every stalk and $m'|_{U\cap W}=0$ by [F9]. The sections $m'$ over $U$ and $0$ over $W$ agree on the overlap and glue to a nonzero global section of $F(-b-1)$, contradicting step 2.1. Hence $F(-b)$ is torsion-free. [F2, F5, F7, F9, F11, step 2.1]

4.1 Local freeness. Fix a standard chart $U=\operatorname{Spec}A$, $A=k[t]$ or $k[u]$, and put $M:=F(-b)(U)$. By [F4], $F(-b)$ is coherent, hence quasi-coherent, so [F7] applies and $F(-b)|_U\cong\widetilde M$, so $F(-b)(D(f))\cong M_f$ for every $f\in A$. By [F4] $F(-b)$ is coherent, hence of finite type, so every point $x\in U$ has an affine open $V_x\subseteq X$ with $F(-b)|_{V_x}\cong\widetilde{N_x}$ for a finitely generated module $N_x$; choosing $f_x\in A$ with $x\in D(f_x)\subseteq V_x\cap U$ [F7], putting $B_x:=\Gamma(V_x,\mathcal O_X)$, the affine restriction isomorphism in [F7] identifies $M_{f_x}$ with $A_{f_x}\otimes_{B_x}N_x$, a finitely generated $A_{f_x}$-module whose generators are the images of any finite generating set of $N_x$. Since $U$ is affine, hence quasi-compact [F8], finitely many such $D(f_1),\dots,D(f_k)$ cover $U$, so $f_1,\dots,f_k$ generate the unit ideal of $A$ and each $M_{f_i}$ is finitely generated. Choose finitely many elements of $M$ whose images generate each $M_{f_i}$ and let $N\subseteq M$ be the submodule they generate. For every $z\in M/N$, the vanishing $(M/N)_{f_i}=0$ and [F7] give, for each $i$, a power $f_i^{n_i(z)}$ that annihilates this element $z$; the powers may depend on $z$. Since $(f_1,\ldots,f_k)=A$, also $(f_1^{n_1(z)},\ldots,f_k^{n_k(z)})=A$ (their generated ideal has the same radical as the unit ideal). Thus $z=0$, and $M/N=0$: $M$ is a finitely generated $A$-module. By step 3.1 the module $M$ is torsion-free, and $A=k[t]$ (respectively $k[u]$) is a principal ideal domain [F5], so $M$ is free [F5]. As the two charts cover $X$, $F(-b)$ is finite locally free; twisting back by $\mathcal O_X(b)$, an equivalence by [F2], $F$ is finite locally free as well. [F2, F4, F5, F7, F8, step 3.1]

5.1 The rank. At each point $x\in X$, the stalk sequence from step 1.1 is exact and all three stalks are free after step 4.1. The surjection $E_x\to F_x$ splits because $F_x$ is free, so the ranks add: $r=1+\operatorname{rk}F_x$. Hence $F$ is locally free of rank $r-1$ everywhere. [F6, step 1.1, step 4.1]

6.1 Conclusion. The module $F$ is finite locally free of rank $r-1$ by steps 4.1 and 5.1. The Axiom of Choice enters only through the suppliers recorded in [F10]. [F10, step 4.1, step 5.1] ∎

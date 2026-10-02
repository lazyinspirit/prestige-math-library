---
id: lem-vector-bundle-p1-has-maximal-degree-line-subbundle
kind: lemma
title: A vector bundle on the projective line has a line subbundle of maximal degree
status: published
origin: pipeline
deps:
  - cor-degree-descends-picard-curve
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-projective-cohomology-finite-dimensional-field
  - cor-picard-projective-line-integers
  - def-cartier-divisor
  - def-effective-cartier-divisor
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-module-on-ringed-space
  - def-projective-morphism-pre-proj
  - def-relative-projective-space-standard-charts
  - def-twist-quasi-coherent-sheaf-projective
  - def-twisting-sheaf-proj
  - def-very-ample-invertible-sheaf-relative
  - lem-eventual-global-generation-coherent-twists
  - lem-cartier-divisor-addition-tensor
  - lem-global-sections-left-exact
  - lem-nonzero-map-invertible-to-locally-free-injective
  - lem-projective-line-divisors-classified-by-degree
  - lem-very-ample-implies-ample
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-local-ring-smooth-curve-dvr
  - thm-projective-space-as-proj
  - thm-twisting-sheaf-invertible-standard-graded
  - thm-zero-sheaf-cohomology-global-sections
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

Assume the Axiom of Choice as inherited from the cohomology, local-DVR, and
divisor-degree suppliers. Let
$k$ be a field, put $X=\mathbb P^1_k$, and let $E$ be a nonzero finite locally
free $\mathcal O_X$-module of rank $r\ge1$
([[def-locally-free-sheaf-finite-rank]]). Then the set of integers $n$ with
$H^0(X,E(n))$ nonzero is nonempty and bounded below, so it has a minimum $a$;
putting $b:=-a$, one has $H^0(X,E(-b))$ nonzero, $H^0(X,E(-b-1))=0$, and every
nonzero morphism $\mathcal O_X(b)\to E$ is injective, so its image is a line
subbundle of $E$ of degree $b$. Moreover no line subbundle of $E$ has degree
greater than $b$: $E$ contains a line subbundle of maximal degree $b$.

## Facts & Assumptions

**Given:** a field $k$, the scheme $X=\mathbb P^1_k$, and a nonzero finite locally free $\mathcal O_X$-module $E$ of rank $r\ge1$.

[F1] $X=\mathbb P^1_k\cong\operatorname{Proj}k[x_0,x_1]$ is projective over $\operatorname{Spec}k$ in the H-projective convention, by the identity embedding $X\hookrightarrow\mathbb P^1_k$ ([[thm-projective-space-as-proj]], [[def-projective-morphism-pre-proj]], [[def-twisting-sheaf-proj]]).

[F2] The twisting sheaf $\mathcal O_X(1)$ is invertible ([[thm-twisting-sheaf-invertible-standard-graded]], [[def-twisting-sheaf-proj]]). The identity presentation of [F1] exhibits $\mathcal O_X(1)$ as relatively very ample over $\operatorname{Spec}k$, the sections $x_0,x_1$ giving the identity morphism $X\to\mathbb P^1_k$ ([[def-very-ample-invertible-sheaf-relative]], [[def-relative-projective-space-standard-charts]]); hence $\mathcal O_X(1)$ is ample ([[lem-very-ample-implies-ample]], [[def-ample-invertible-sheaf]]).

[F3] For a coherent $\mathcal O_X$-module $F$ there is $m_0$ with $F\otimes\mathcal O_X(m)$ globally generated for every $m\ge m_0$ ([[lem-eventual-global-generation-coherent-twists]], [[def-globally-generated-sheaf]]). A globally generated nonzero module has a nonzero global section, because global generation says that the images of the global sections generate every stalk, and $F\ne0$ has a nonzero stalk ([[def-globally-generated-sheaf]]).

[F4] $E$ is coherent and $H^0(X,E)$ is a finite-dimensional $k$-vector space: $E$ is locally free hence quasi-coherent of finite type, $X$ is finite type over the field $k$, hence locally Noetherian, and coherent modules on a locally Noetherian scheme form an abelian category ([[def-coherent-module-scheme]], [[def-locally-noetherian-and-noetherian-scheme]], [[thm-coherent-sheaves-abelian-noetherian-scheme]]); finiteness of $H^0$ is the proper finiteness statement ([[cor-projective-cohomology-finite-dimensional-field]]).

[F5] $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ ([[thm-zero-sheaf-cohomology-global-sections]]), a global section $s$ of a module $\mathcal F$ gives the morphism $s^\sharp:\mathcal O_X\to\mathcal F$, $a\mapsto a\cdot s|_U$, and conversely $\varphi\mapsto\varphi_X(1)$; these are inverse, so $\Gamma(X,\mathcal F)\cong\operatorname{Hom}_{\mathcal O_X}(\mathcal O_X,\mathcal F)$ ([[def-module-on-ringed-space]]). Global sections form a left exact functor: an injective morphism $\mathcal F\to\mathcal G$ induces an injective map $H^0(X,\mathcal F)\to H^0(X,\mathcal G)$ ([[lem-global-sections-left-exact]]).

[F6] For every $d\in\mathbb Z$, $\dim_kH^0(X,\mathcal O_X(d))=d+1$ for $d\ge0$ and $=0$ for $d<0$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]]).

[F7] Every nonzero morphism from an invertible sheaf to the finite locally free module $E$ is injective ([[lem-nonzero-map-invertible-to-locally-free-injective]], [[def-invertible-sheaf]]).

[F8] Twists are defined by $\mathcal F(m)=\mathcal F\otimes\mathcal O_X(m)$, with $\mathcal F(m)\otimes\mathcal O_X(n)\cong\mathcal F(m+n)$ and $(\mathcal F(m))(n)\cong\mathcal F(m+n)$, so twisting by $\mathcal O_X(m)$ is functorial and carries nonzero morphisms to nonzero morphisms ([[def-twist-quasi-coherent-sheaf-projective]], [[thm-twisting-sheaf-invertible-standard-graded]]).

[F9] The Axiom of Choice is inherited through the cohomology and global-generation suppliers [F3], [F4] and through the smooth-curve DVR and divisor-degree/Picard suppliers in [F10]; no additional choice is used in the local extension or basis argument ([[def-axiom-of-choice]]).

[F10] For every closed point $p$ of the smooth proper curve $X$, the local ring $\mathcal O_{X,p}$ is a discrete valuation ring with a uniformizer $\pi$ ([[thm-local-ring-smooth-curve-dvr]]). The closed point divisor $[p]$ is effective Cartier; near $p$ its equation can be taken to be $\pi$, and away from $p$ its equation is $1$. Its associated invertible sheaf $\mathcal O_X(p)$ is locally $\pi^{-1}\mathcal O_X$ near $p$ and is $\mathcal O_X$ off $p$ ([[def-cartier-divisor]], [[def-effective-cartier-divisor]], [[def-invertible-sheaf-of-cartier-divisor]]). The degree homomorphism sends $[\mathcal O_X(p)]$ to $d=[\kappa(p):k]>0$, and every invertible sheaf of degree $j$ on $X$ is isomorphic to $\mathcal O_X(j)$ ([[cor-degree-descends-picard-curve]], [[cor-picard-projective-line-integers]]). In particular $\mathcal O_X(b)\cong\mathcal O_X(b[\infty])$, the Cartier tensor/addition supplier identifies $\mathcal O_X(b[\infty])\otimes\mathcal O_X(p)$ with $\mathcal O_X(b[\infty]+[p])$, and that line has degree $b+d$; Picard classification identifies it with $\mathcal O_X(b+d)$ ([[lem-cartier-divisor-addition-tensor]], [[lem-projective-line-divisors-classified-by-degree]], [[cor-picard-projective-line-integers]]).

## Proof

**Proof technique:** direct; produce sections in high degree by global generation, bound the degrees carrying sections below by comparison with $H^0(E)$, and take the minimum.

1.1 Nonemptiness of the section degrees. By [F4] the module $E$ is coherent, so [F3] applies with the ample invertible sheaf $\mathcal O_X(1)$ of [F2] and provides $m_0$ with $E(m)$ globally generated for all $m\ge m_0$. Since $E\ne0$ and $X$ is nonempty, some stalk of $E(m)$ is nonzero, and global generation exhibits a global section with nonzero germ; hence $H^0(X,E(m))\ne0$ for every $m\ge m_0$. [F1, F2, F3, F4]

2.1 Boundedness below. Suppose $H^0(X,E(n))\ne0$ and let $s\ne0$ be a global section. By [F5] the section $s$ is a nonzero morphism $s^\sharp:\mathcal O_X\to E(n)$; twisting by $\mathcal O_X(-n)$ yields a nonzero morphism $\mathcal O_X(-n)\to E$ by [F8], which is injective by [F7]. The left exact functor $H^0$ of [F5] therefore gives an injection $H^0(X,\mathcal O_X(-n))\hookrightarrow H^0(X,E)$, so $\dim_kH^0(X,\mathcal O_X(-n))\le h^0(E)$ with $h^0(E):=\dim_kH^0(X,E)<\infty$ by [F4]. If $n\le0$, then by [F6] the left side is $-n+1$, so $-n+1\le h^0(E)$, that is $n\ge1-h^0(E)$. If $n\ge1$, then $n\ge1$; and since $h^0(E)\ge0$ we get $n\ge1-h^0(E)$ in this case too. Hence every $n$ with $H^0(X,E(n))\ne0$ satisfies $n\ge B$ for the integer $B:=1-h^0(E)$, and the set of such $n$ is nonempty by step 1.1 and bounded below. [F4, F5, F6, F7, F8]

3.1 The extremal degree. The set $S=\{n\in\mathbb Z:H^0(X,E(n))\ne0\}$ is a nonempty subset of $\mathbb Z$ bounded below, so it has a minimum $a$. Put $b:=-a$. Then $H^0(X,E(-b))=H^0(X,E(a))\ne0$, and $H^0(X,E(-b-1))=H^0(X,E(a-1))=0$, since $a-1\notin S$ by minimality. [step 2.1]

4.1 The maximal map is a subbundle. Fix any nonzero morphism $\varphi:\mathcal O_X(b)\to E$. It is injective by [F7]. Let $p$ be a closed point and choose local frames for $\mathcal O_X(b)$ and $E$ near $p$; write the coefficient vector of $\varphi$ in these frames as $(q_1,\ldots,q_r)$. Suppose every $q_i$ lies in the maximal ideal of $\mathcal O_{X,p}$. By [F10], this local ring is a DVR with uniformizer $\pi$, so every $q_i/\pi$ is regular at $p$. After shrinking a neighborhood $U$ of $p$, these quotients are regular sections and $\mathcal O_X(p)|_U=\pi^{-1}\mathcal O_U$. Define a morphism $\mathcal O_X(b)\otimes\mathcal O_X(p)|_U\to E|_U$ by sending the frame $e\otimes\pi^{-1}$ to $\varphi(e)/\pi$. On $X\setminus\{p\}$ use the identification $\mathcal O_X(p)=\mathcal O_X$ and the original $\varphi$. On the overlap $U\setminus\{p\}$, $\pi$ is a unit and the maps agree, so they glue to a global morphism $\mathcal O_X(b)\otimes\mathcal O_X(p)\to E$. It is nonzero because its restriction at the generic point agrees with $\varphi$. By [F10] its source is isomorphic to $\mathcal O_X(b+d)$ for $d=[\kappa(p):k]>0$. Thus $H^0(X,E(-b-d))\ne0$, contradicting minimality of $a=-b$. Therefore at least one $q_i$ is a unit at every closed point $p$. On a neighborhood where that coefficient remains a unit, elementary row operations make the image a direct summand of $E$, so the quotient is locally free there. At the generic point the nonzero map is an inclusion of a one-dimensional subspace into a vector space and is likewise a direct summand after restricting to a neighborhood. Hence $\varphi$ has locally free quotient and its image is a line subbundle of degree $b$. Since $\varphi$ was arbitrary, every nonzero map $\mathcal O_X(b)\to E$ has this property. [F7, F10, step 3.1]

4.2 Maximality. Let $L\subseteq E$ be any line subbundle of degree $d$. By the Picard classification in [F10], $L\cong\mathcal O_X(d)$. Its inclusion is nonzero, so after twisting by $\mathcal O_X(-d)$ it gives a nonzero morphism $\mathcal O_X\to E(-d)$ by [F8], hence a nonzero global section of $E(-d)$ by [F5]. Thus $-d\in S$. By step 3.1, $-d\ge a=-b$, so $d\le b$: no line subbundle has degree greater than $b$. [F5, F8, F10, step 3.1]

5.1 Conclusion. Steps 1.1 and 2.1 show that $S$ is nonempty and bounded below, step 3.1 produces its minimum $a$ with $b=-a$ and the two vanishing statements, step 4.1 proves that every nonzero maximal-degree map has locally free quotient, and step 4.2 proves maximality among line subbundles. Choice is inherited only from the suppliers recorded in [F9]. [F9, step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎

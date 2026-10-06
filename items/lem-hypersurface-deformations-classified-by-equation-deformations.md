---
id: "lem-hypersurface-deformations-classified-by-equation-deformations"
kind: "lemma"
title: "Embedded flat deformations of a smooth hypersurface are deformations of its equation"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 3
justified_by: []
aliases: []
deps:
  - "def-embedded-deformations-of-a-closed-subscheme"
  - "def-projective-bundle-scheme"
  - "lem-cohomology-of-hypersurface-twists"
  - "def-relative-projective-space-standard-charts"
  - "thm-projective-space-as-proj"
  - "def-section-zero-scheme-invertible-sheaf"
  - "thm-closed-subschemes-projective-space-homogeneous-ideals"
  - "lem-flatness-affine-local-source-target"
  - "def-flat-and-faithfully-flat-modules-and-ring-maps"
  - "cor-nakayama-generators-modulo-an-ideal"
  - "thm-cohomology-projective-space-twisting-sheaves"
  - "thm-long-exact-sequence-sheaf-cohomology"
  - "def-graded-ring-and-graded-module"
  - "def-invertible-sheaf"
  - "def-square-zero-extension-and-small-extension"
  - "def-local-ring"
  - "thm-flatness-criteria-by-injections-and-ideals"
  - "thm-leray-acyclic-cover-theorem"
  - "thm-cech-to-sheaf-cohomology-comparison"
  - "thm-qc-sheaf-affine-higher-cohomology-vanishes"
  - "def-cech-cohomology-open-cover"
  - "def-effective-cartier-divisor"
  - "def-degree-projective-hypersurface"
  - "thm-artinian-local-ring-has-nilpotent-maximal-ideal"
  - "thm-artinian-ring-is-noetherian"
  - "cor-finite-variable-polynomial-ring-noetherian"
  - "thm-noetherian-ring-quotients-and-localisations"
  - "def-axiom-of-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 1 Section 2 Proposition 2.3 and its full proof (printed pages 6-7), Theorem 2.4 (page 8), and Chapter 3 Section 21 Example 21.4 (pages 112-113). Read 2026-10-06."
    - title: "The Stacks Project, Cohomology of Schemes, complete chapter (Chapter 30)"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
      locator: "Section 30.8, Lemma 8.1 (tag 01XT): H^q(P^n_R, O(t)) for all q, t; used for the cocycle vanishing on the standard affine cover (printed pages 15-16, read 2026-10-05)"
    - title: "Edoardo Sernesi, An overview of classical deformation theory"
      url: "http://www.mat.uniroma3.it/users/sernesi/sernesioverviewdefth.pdf"
      locator: "Section 1 and Section 2: the family P(t,X) of hypersurfaces of degree d and first-order deformations of a hypersurface (pp. 1-6, read 2026-10-05)"
---

## Statement

Assume the Axiom of Choice, inherited from the projective-space cohomology
suppliers ([[def-axiom-of-choice]]). Let $k$ be a field, $n\ge2$, $d\ge1$, let
$f\in S=k[x_0,\dots,x_n]$ be homogeneous of degree $d$, let
$X=Z(f)\subseteq\mathbb P^n_k$, and assume $X$ smooth over $k$ of pure
dimension $n-1$. Let $A$ be a local Artin $k$-algebra with residue field $k$
and let $A'\to A$ be a small extension with kernel $I$
([[def-square-zero-extension-and-small-extension]]). Then:

1. for every lift $F\in(S\otimes_kA')_d$ of $f$ (that is,
   $F\equiv f$ modulo the maximal ideal), the closed subscheme
   $Z(F)\subseteq\mathbb P^n_{A'}$ is flat over $A'$ and
   $Z(F)\times_{\operatorname{Spec}A'}\operatorname{Spec}A$ is the equation
   family $Z(F_A)$, where $F_A$ is the reduction of $F$ modulo $I$. Its
   special fibre is $X$. If $F\equiv f$ modulo $I$, the intermediate
   reduction is the trivial embedded family $X\times_k\operatorname{Spec}A$;
2. conversely, fix an equation $F_A\in(S\otimes_kA)_d$ reducing to $f$
   modulo the maximal ideal. Every flat closed subscheme
   $Y\subseteq\mathbb P^n_{A'}$ whose reduction to $A$ is the embedded
   family $Z(F_A)$ is a relative effective Cartier divisor of degree $d$
   and equals $Z(F)$ for a lift $F$ of $F_A$, uniquely up to a unit of $A'$.
   This includes the trivial-reduction case $F_A=f$;
3. consequently the functor of embedded deformations of $X$ in $\mathbb P^n$
   ([[def-embedded-deformations-of-a-closed-subscheme]]) is canonically
   isomorphic to the functor
   $R\mapsto\{F\in(S\otimes_kR)_d:F\equiv f\bmod\mathfrak m_R\}/(R^\times)$
   on local Artin $k$-algebras, where two residue-normalized lifts are equivalent
   when one is a unit multiple of the other (that unit necessarily has residue $1$);
   it is pro-represented by the formal completion
   of the projective space $\mathbb P(S_d^\vee)$ at the point $[f]$, and it is
   formally smooth and unobstructed;
4. the tangent space at the trivial deformation is
   $(S/(f))_d\cong H^0(X,\mathcal O_X(d))$, of dimension
   $\binom{n+d}{n}-1$, and every first-order embedded deformation extends to
   every small extension.

## Facts & Assumptions

**Given:** a field $k$, $n\ge2$, $d\ge1$, a homogeneous form $f\in S=k[x_0,\dots,x_n]$ of degree $d$ with $X=Z(f)\subseteq\mathbb P^n_k$ smooth of pure dimension $n-1$, a local Artin $k$-algebra $A$ with residue field $k$, a small extension $A'\to A$ with kernel $I$, and the Axiom of Choice; in the inverse construction, a chosen equation $F_A$ on the intermediate base reducing to $f$.

[F1] The standard charts $D_+(x_i)$ of $\mathbb P^n_{A'}$ have rings $B_i=(S\otimes_kA')_{(x_i)}=A'[x^{(i)}_\ell]$, and on $D_+(x_i)$ the sheaf $\mathcal O(d)$ is trivialized with local section $F/x_i^d$ for $F\in(S\otimes_kA')_d$; a closed subscheme of $\mathbb P^n_{A'}$ is determined by its chart ideals, and a global section of $\mathcal O(d)$ by its chart components. ([[def-relative-projective-space-standard-charts]], [[thm-projective-space-as-proj]], [[thm-closed-subschemes-projective-space-homogeneous-ideals]], [[def-graded-ring-and-graded-module]])

[F2] $H^0(\mathbb P^n_R,\mathcal O(d))\cong R[x_0,\dots,x_n]_d$ for every commutative ring $R$ and $d\ge0$, and $H^1(\mathbb P^n_R,\mathcal O)=0$ for $n\ge2$; more generally $H^q(\mathbb P^n_R,\mathcal O(t))=0$ unless $q=0$ or $q=n$. ([[thm-cohomology-projective-space-twisting-sheaves]])

[F3] On a scheme, flatness is checked on local rings, and for an affine morphism $\operatorname{Spec}B\to\operatorname{Spec}A$ it is equivalent to $B$ being a flat $A$-module. ([[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[lem-flatness-affine-local-source-target]])

[F4] An $R$-module $M$ is flat if and only if for every ideal $\mathfrak a\subseteq R$ the multiplication map $\mathfrak a\otimes_RM\to M$ is injective. ([[thm-flatness-criteria-by-injections-and-ideals]])

[F5] If $M$ is a finitely generated module over a commutative ring $R$ and $J\subseteq J(R)$ with $M=JM$, then $M=0$. ([[cor-nakayama-generators-modulo-an-ideal]])

[F6] The standard affine cover $\{D_+(x_i)\}$ of $\mathbb P^n_R$ is a Leray cover for every quasi-coherent sheaf, since finite intersections of standard charts are affine and higher quasi-coherent cohomology on affine schemes vanishes; hence its Cech cohomology computes sheaf cohomology. ([[thm-leray-acyclic-cover-theorem]], [[thm-cech-to-sheaf-cohomology-comparison]], [[thm-qc-sheaf-affine-higher-cohomology-vanishes]], [[def-cech-cohomology-open-cover]])

[F7] In a local ring, an element is a unit if and only if its image in the residue field is nonzero; more generally, if $u$ is a unit modulo a nilpotent ideal $N$ of a commutative ring, then $u$ is a unit. ([[def-square-zero-extension-and-small-extension]], [[def-local-ring]])

[F8] An effective Cartier divisor is locally cut out by a nonzerodivisor, equivalently its ideal is invertible. In this proof a relative effective Cartier divisor additionally is flat over the base and has effective Cartier-divisor fibres; its degree is the degree of the special-fibre equation. ([[def-effective-cartier-divisor]], [[def-degree-projective-hypersurface]])

[F9] A commutative Artinian ring is Noetherian, and if it is local its maximal ideal is nilpotent; a polynomial ring over a Noetherian ring is Noetherian, and quotients and localisations of Noetherian rings are Noetherian. ([[thm-artinian-ring-is-noetherian]], [[thm-artinian-local-ring-has-nilpotent-maximal-ideal]], [[cor-finite-variable-polynomial-ring-noetherian]], [[thm-noetherian-ring-quotients-and-localisations]])

## Proof

**Proof technique:** prove flatness and the special-fibre statement for $Z(F)$ by the ideal criterion and a nilpotent-filtration argument; recover a global equation from an arbitrary flat $Y$ by making its chart equations principal with Nakayama, comparing the resulting unit cocycle with the twisting cocycle, and killing it by the vanishing of $H^1(\mathbb P^n,\mathcal O)$.

1.1 Let $F\in(S\otimes_kA')_d$ with $F-f\in\mathfrak m(S\otimes_kA')_d$, where $\mathfrak m=\mathfrak m_{A'}$. On the chart $D_+(x_i)$ put $B_i=(S\otimes_kA')_{(x_i)}$ and $F_i=F/x_i^d\in B_i$; then $B_i/\mathfrak mB_i=S_{(x_i)}$ is a domain, and the reduction $\bar F_i=f/x_i^d$ is nonzero because $f\ne0$ and $S$ is a domain, hence is a nonzerodivisor on $B_i/\mathfrak mB_i$. Since $\mathfrak m^N=0$ for some $N$ by [F9], $F_i$ is a nonzerodivisor on $B_i$: if $F_i h=0$ with $h\ne0$, choose $t$ maximal with $h\in\mathfrak m^tB_i$ and read the equation in $\mathfrak m^tB_i/\mathfrak m^{t+1}B_i\cong(\mathfrak m^t/\mathfrak m^{t+1})\otimes_k(B_i/\mathfrak mB_i)$, an identification valid because $B_i$ is flat over $A'$; there $F_i$ acts as the nonzerodivisor $\bar F_i$, the class of $h$ is nonzero, and the product vanishes, a contradiction. [F1, F2, F9, given, algebra]

1.2 Now let $Y\subseteq\mathbb P^n_{A'}$ be closed and flat over $A'$ with reduction the embedded equation family $Z(F_A)$, where $F_A$ reduces to $f$ on the special fibre. On the chart $D_+(x_i)$ let $J_i\subseteq B_i$ be the ideal of $Y\cap D_+(x_i)$; then $B_i/J_i$ is flat over $A'$ by [F3], the ring $B_i$ is Noetherian by [F9] so $J_i$ is finitely generated as a $B_i$-module; no finite-generation assertion over the Artin base is needed. The base change to $A$ is the affine chart of $Z(F_A)$, so $(J_i+IB_i)/IB_i=(F_A/x_i^d)$ inside $B_i/IB_i$; choose $g_i\in J_i$ whose reduction modulo $IB_i$ is $F_A/x_i^d$. Then $J_i+IB_i=(g_i)+IB_i$. [F1, F2, F3, F9, given, algebra]

2.1 With the notation of step 1.1, the quotient $B_i/F_iB_i$ is flat over $A'$: for an ideal $\mathfrak a\subseteq A'$ the kernel of $\mathfrak a\otimes_{A'}(B_i/F_iB_i)\to B_i/F_iB_i$ is $(\mathfrak aB_i\cap F_iB_i)/\mathfrak aF_iB_i$, so by [F4] it suffices to show $\mathfrak aB_i\cap F_iB_i=\mathfrak aF_iB_i$. If $x=F_iy$ with $x\in\mathfrak aB_i$ and $y\notin\mathfrak aB_i$, then the class of $y$ in $B_i/\mathfrak aB_i$ is nonzero, and choosing $t$ maximal with $y\in\mathfrak m^tB_i+\mathfrak aB_i$ gives a nonzero class in $\mathfrak m^t(B_i/\mathfrak aB_i)/\mathfrak m^{t+1}(B_i/\mathfrak aB_i)\cong((\mathfrak m^t+\mathfrak a)/(\mathfrak m^{t+1}+\mathfrak a))\otimes_k k[x^{(i)}_\ell]$ killed by the nonzerodivisor $\bar F_i$, a contradiction. Hence $B_i/F_iB_i$ is flat over $A'$, and the chart subscheme $Z(F)\cap D_+(x_i)=\operatorname{Spec}(B_i/F_iB_i)$ is flat over $A'$; gluing over the charts, $Z(F)$ is flat over $A'$ by [F3]. Base change reduces the chart equation to $F_A/x_i^d$, so the intermediate fibre is $Z(F_A)$; when $F\equiv f$ modulo $I$ this is exactly the trivial embedded $X\times_k\operatorname{Spec}A$. Matching $f$ only modulo the maximal ideal ensures the special fibre is $X$, without forcing triviality over $A$. This proves claim (1). [F1, F2, F3, F4, step 1.1, algebra]

2.2 With $g_i$ as in step 1.2, we have $J_i=(g_i)$. Indeed, multiplication $I\otimes_{A'}(B_i/J_i)\to B_i/J_i$ is injective by flatness and [F4]. For $j\in J_i\cap IB_i$, choose a tensor in $I\otimes_{A'}B_i$ whose product is $j$. Its image in $I\otimes_{A'}(B_i/J_i)$ is zero by that injectivity; right exactness of tensor therefore makes it the image of a tensor in $I\otimes_{A'}J_i$. Its product lies in $IJ_i$, proving $J_i\cap IB_i=IJ_i$. Hence every $j\in J_i$ lies in $(g_i)+IJ_i$, so $J_i/(g_i)=I\cdot J_i/(g_i)$; the module $J_i/(g_i)$ is finitely generated over $B_i$, and $IB_i$ is nilpotent, hence lies in the Jacobson radical of $B_i$, so Nakayama [F5] applied over $B_i$ gives $J_i=(g_i)$. The element $g_i$ is a nonzerodivisor: $g_i$ reduces to $f/x_i^d\ne0$ modulo $\mathfrak mB_i$, so the filtration argument of step 1.1 applies verbatim. Thus $Y$ is a relative effective Cartier divisor on every chart, hence globally, with local equations $g_i$; the degree is $d$ because the special fibre is $X$, so [F8] applies. [F1, F3, F4, F5, F8, F9, step 1.1, step 1.2, algebra]

3.1 Let $B_{ij}=B_i[(x_j/x_i)^{-1}]$ be the overlap ring; the hypotheses of step 2.2 give $g_i/g_j\in B_{ij}^\times$ and $g_i\equiv F_A/x_i^d$, $g_j\equiv F_A/x_j^d$ modulo $IB_{ij}$. Define the unit $c_{ij}=u_{ij}\,(x_i/x_j)^d$ with $u_{ij}=g_i/g_j$. Then $c_{ij}\equiv(x_j/x_i)^d(x_i/x_j)^d=1$ modulo $IB_{ij}$, and $c_{ij}c_{jk}=c_{ik}$ because $u_{ij}u_{jk}=u_{ik}$; so $c=(c_{ij})$ is a multiplicative Cech $1$-cocycle of the standard cover with values in $1+I\mathcal O$, and $1+a\mapsto a$ identifies this group sheaf with $I\mathcal O_{\mathbb P^n_{A'}}$, since $I^2=0$. The latter sheaf, on the common underlying space, is $I\otimes_k\mathcal O_{\mathbb P^n_k}$: flatness of the polynomial chart rings identifies $IB_i$ with $I\otimes_{A'}B_i=I\otimes_k k[x^{(i)}_\ell]$, compatibly on overlaps. It is a finite direct sum of copies of $\mathcal O_{\mathbb P^n_k}$, whose Cech $H^1$ vanishes by [F2] and [F6]; hence there are $\lambda_i\in1+IB_i$ with $c_{ij}=\lambda_i/\lambda_j$. [F1, F2, F6, step 2.2, algebra]

4.1 Define $F_i=g_i/\lambda_i\in B_i$. Then $F_i\equiv g_i\equiv F_A/x_i^d$ modulo $IB_i$, and on overlaps $F_i/F_j=(g_i/g_j)(\lambda_j/\lambda_i)=u_{ij}/c_{ij}=(x_j/x_i)^d$, so $x_i^dF_i=x_j^dF_j$. By [F1] the family $(F_i)$ glues to a global section $F\in H^0(\mathbb P^n_{A'},\mathcal O(d))=(S\otimes_kA')_d$, whose chart components are $F_i$; since $F_i\equiv F_A/x_i^d$ modulo $I$, the global sections $F$ and $F_A$ agree modulo $I$, and on each chart the ideals $(F_i)=(g_i)$ coincide because $\lambda_i$ is a unit, so $Z(F)=Y$ globally. This proves the existence in claim (2). [F1, F2, step 2.2, step 3.1, algebra]

5.1 If $Z(F)=Z(F')=Y$ with $F,F'$ both lifts of $f$ as above, then on each chart $F_i'=\mu_iF_i$ for a unit $\mu_i\in B_i^\times$, and $\mu_i=\mu_j$ on overlaps because both sides multiply the nonzerodivisor $F_i$ to give $F_i'$; hence the $\mu_i$ glue to a global unit $\mu\in\Gamma(\mathbb P^n_{A'},\mathcal O_{A'}^\times)$, and $F'=\mu F$ with $\mu\in A'\subseteq B_i$ (as $H^0(\mathcal O)=A'$ by [F2]). Since $\mu$ is a unit in every $B_i$, in particular $\mu$ reduces to a nonzero constant on the special fibre, so $\mu$ is a unit of the local ring $A'$ by [F7]. This completes the uniqueness in claim (2). [F2, F7, step 4.1, algebra]

6.1 Claims (1) and (2) establish the equation description across every small extension, including arbitrary nontrivial reductions $F_A$. Every local Artin $R$ with residue field $k$ admits a finite tower of such extensions: choose a one-dimensional subspace of the last nonzero maximal-ideal power, which is an ideal annihilated by that maximal ideal, quotient by it, and repeat until $k$. Inducting along this finite tower starts with $f$ over $k$ and applies claim (2) to the chosen equation of each preceding reduction. Thus for every such $R$, the claims establish a canonical bijection between isomorphism classes of flat closed subschemes $Y\subseteq\mathbb P^n_R$ with special fibre $X$ and classes of lifts $F\in(S\otimes_kR)_d$ modulo $R^\times$; the construction is natural in $R$ because both steps 4.1 and 5.1 are computed from the chart data and commute with base change $R\to R'$. Hence the embedded deformation functor of $X$ in $\mathbb P^n$ is canonically isomorphic to $R\mapsto\{F\in(S\otimes_kR)_d:F\equiv f\bmod\mathfrak m_R\}/(R^\times)$. By definition of the formal completion of $\mathbb P(S_d^\vee)$ at the point $[f]$, an $R$-point of that completion is exactly a morphism $\operatorname{Spec}R\to\mathbb P(S_d^\vee)$ lifting $[f]$, which (as $R$ is local, so rank-one quotients are free) is a rank-one direct summand of $S_d\otimes_k R$, equivalently a lift of $f$ modulo $R^\times$ (the quotient convention of [[def-projective-bundle-scheme]] uses the dual vector space); this identifies the functor with the functor of points of the formal completion. Explicitly, choose a basis $f,e_1,\ldots,e_N$ of $S_d$. Each class has a unique representative $f+\sum_i a_i e_i$ with $a_i\in\mathfrak m_R$. Thus the representing complete local ring is $k[\![t_1,\ldots,t_N]\!]$: continuous local maps to $R$ send $t_i$ to $a_i$, and power series evaluate by finite sums because $\mathfrak m_R$ is nilpotent. [F1, F2, step 4.1, step 5.1, algebra]

7.1 The functor of step 6.1 is formally smooth: given a small extension $A'\to A$ and a lift $F$ of $f$ over $A$, choose any lift $\tilde F$ of $F$ to $(S\otimes_kA')_d$; then $\tilde F\equiv f$ modulo $\mathfrak m_{A'}$ automatically because $\tilde F-F\in I(S\otimes_kA')\subseteq\mathfrak m_{A'}(S\otimes_kA')$ and $F\equiv f$ modulo $\mathfrak m_A(S\otimes_kA)$. The same computation applies to classes modulo units: if $G$ is any lift of the class $[F]$ and $u\in A^\times$ with $G\equiv uF$ modulo $I$, lift $u$ to a unit $\tilde u\in(A')^\times$ and replace $G$ by $\tilde u^{-1}G$. Hence restriction is surjective on every small extension, and the functor is unobstructed. [F7, step 6.1, algebra]

8.1 For the dual numbers $R=k[\epsilon]$ the lifts are $F=f+\epsilon g$ with $g\in S_d$, and multiplication by a unit of $k[\epsilon]$ followed by renormalisation of the $\epsilon$-free part to $f$ (division by the unit $\lambda$, $\lambda\ne0$) replaces $g$ by $g+\mu f$; hence classes correspond bijectively to $S_d/k\cdot f\cong(S/(f))_d$, which is $H^0(X,\mathcal O_X(d))$ by [[lem-cohomology-of-hypersurface-twists]](2) and has dimension $\binom{n+d}{n}-1$. By steps 6.1 and 7.1 every class extends to every small extension, so this is the tangent space at the trivial deformation. [F2, step 6.1, step 7.1, algebra]

9.1 Steps 1.1 and 2.1 prove claim (1); steps 1.2, 2.2, 3.1, 4.1 and 5.1 prove claim (2); steps 6.1 and 7.1 prove claim (3); and step 8.1 proves claim (4). The Axiom of Choice is inherited from the cohomology, Cech-comparison, Nakayama and Artinian-ring suppliers. [step 2.1, step 5.1, step 6.1, step 7.1, step 8.1] ∎ 
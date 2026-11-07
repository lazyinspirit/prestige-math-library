---
id: thm-deligne-ribet-cassou-nogues-pseudomeasure-for-totally-real-fields
kind: theorem
title: "Deligne–Ribet–Cassou-Noguès pseudomeasure for a totally real field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-deligne-ribet-pseudomeasure-on-profinite-abelian-group
  - def-iwasawa-algebra-of-profinite-abelian-group
  - def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower
  - lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
  - lem-cyclotomic-even-moment-regularizer-exists
  - def-p-adic-measure-on-profinite-abelian-group
  - def-totally-real-ray-class-group-and-norm-character
  - thm-deligne-ribet-p-adic-measure-interpolation
  - def-schwartz-functions-on-the-total-real-ideal-space
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-global-artin-reciprocity-and-norm-index
  - thm-ray-class-group-finite
  - thm-tychonoff
  - thm-kubota-leopoldt-p-adic-zeta-interpolation
  - def-dedekind-zeta-function
  - thm-dedekind-zeta-euler-product
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
axiom_use: "AC, Countable Choice and Dependent Choice remain the public assumptions carried by the declared ideal-space, ray-class and class-field suppliers."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Coates and R. Sujatha, The Main Conjecture"
      url: "https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download"
      locator: "Theorem 2.2, printed p. 115"
    - title: "P. Deligne and K. A. Ribet, Values of abelian L-functions at negative integers over totally real fields"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "§0.5, Theorem 0.5 and the measure-to-pseudomeasure construction, printed pp. 231–232"
verification:
  precheck: pending
proof_strategy: constructive
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice for the presently specified cyclotomic tower, class-field and Deligne–Ribet measure interfaces. Let $F$ be a totally real number field and let $p$ be an odd prime. Put $\mathcal F_\infty=F(\mu_{p^\infty})$, let $c$ be complex conjugation, put $F_\infty=\mathcal F_\infty^{\langle c\rangle}$, and set $\mathcal G=\operatorname{Gal}(\mathcal F_\infty/F)$ and $G=\operatorname{Gal}(F_\infty/F)$. Let $\Gamma\cong\mathbb Z_p$ be the cyclotomic pro-$p$ subgroup of $G$ and choose a topological generator $\gamma$ of $\Gamma$. Let $\widetilde\chi_F:\mathcal G\to\mathbb Z_p^\times$ be the cyclotomic character. For each positive even integer $k$, define the continuous character $\rho_k:G\to\mathbb Z_p^\times$ by $\rho_k(\bar g)=\widetilde\chi_F(g)^k$, where $\bar g$ is the image of $g\in\mathcal G$ in $G$; this is well-defined because the quotient kernel is $\langle c\rangle$ and $\widetilde\chi_F(c)=-1$. Set
$$\zeta_F^{(p)}(s)=\zeta_F(s)\prod_{v\mid p}\bigl(1-(Nv)^{-s}\bigr),\qquad Nv=|\mathcal O_F/v|.$$
There is a unique Deligne–Ribet pseudomeasure $\mu_{F,p}$ on $G$ such that for every positive even integer $k$ its character moment, regularized using $a=\gamma$, is defined and equals
$$\int_G\rho_k(g)\,d\mu_{F,p}(g)=\zeta_F^{(p)}(1-k).$$

## Statement references

[J. Coates and R. Sujatha, *The Main Conjecture*, Theorem 2.2, p. 115](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

[P. Deligne and K. A. Ribet, *Values of Abelian L-Functions at Negative Integers over Totally Real Fields*, §0.5, Theorem 0.5, pp. 231–232](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)


## Facts & Assumptions

**Given:** The choice assumptions, totally real field $F$, odd prime $p$, cyclotomic groups and characters in the unchanged Statement.

[F1] For $F\ne\mathbb Q$, the declared Deligne–Ribet interpolation supplier provides its normalized bounded measures $\lambda_c$ and the stated moment formula for compactly supported finite-conductor functions on its $p$-unit ideal-space component. [[thm-deligne-ribet-p-adic-measure-interpolation]]

[F2] The strict ideal space is the inverse limit of congruence quotients; its integral submonoid and ray-class unit group have their stated compatible reductions and continuous multiplicative norm. Bounded-denominator reductions are finite. [[def-totally-real-ray-class-group-and-norm-character]] [[def-schwartz-functions-on-the-total-real-ideal-space]]

[F3] Finite ray-class fields and finite global Artin maps identify ray classes with the finite abelian Galois quotients, compatibly with norms and arithmetic Frobenius. The finite ray class groups and their inverse-limit products are compact under the stated assumptions. [[thm-number-field-ray-class-field-artin-isomorphism]] [[thm-global-artin-reciprocity-and-norm-index]] [[thm-ray-class-group-finite]] [[thm-tychonoff]]

[F4] The full and real cyclotomic groups and their characters have the stated finite-times-procyclic decomposition; the chosen $\gamma$ regularizes every even moment. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]] [[lem-cyclotomic-even-moment-regularizer-exists]]

[F5] The group algebra definition and the pseudomeasure definition use the stated total quotient ring and regularized character-evaluation convention. [[def-iwasawa-algebra-of-profinite-abelian-group]] [[def-deligne-ribet-pseudomeasure-on-profinite-abelian-group]] [[def-p-adic-measure-on-profinite-abelian-group]]

[F6] For $F=\mathbb Q$, there is a pseudomeasure on $\mathbb Z_p^\times$ with the stated Kubota–Leopoldt moments. [[thm-kubota-leopoldt-p-adic-zeta-interpolation]]

[F7] The Dedekind zeta function is the meromorphic continuation of the ideal Dirichlet series, with Euler product in its right half-plane of convergence. [[def-dedekind-zeta-function]] [[thm-dedekind-zeta-euler-product]]

[A1] AC, Countable Choice and Dependent Choice are the unchanged public hypotheses of the ideal-space and class-field inputs. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** Restrict the interpolation measures to the integral $p$-unit locus, construct the compatible Artin pushforward and measure cocycle, and prove uniqueness from even moments.

1.1 Assume first $F\ne\mathbb Q$. Let $\mathcal A_F$ be the inverse-limit integral ideal submonoid from [F2], and let $D\subset\mathcal A_F$ consist of points whose $p$-adic norm is a unit. It is compact: at each conductor, integral classes form a finite bounded-denominator reduction by [F2], so their inverse limit is a closed subset of a product of finite discrete sets, compact by [F3]; the unit-norm condition is closed. It is also open in the stated ideal space. Indeed strict congruence modulo $\mathcal O_F$ preserves integrality: if $\mathfrak a=(\alpha)\mathfrak b$, $\mathfrak b\subseteq\mathcal O_F$, and $(\alpha-1)\mathfrak b\subseteq\mathcal O_F$, then $\mathfrak a\subseteq\mathfrak b+\mathcal O_F=\mathcal O_F$; symmetry gives the converse. Thus $\mathcal A_F$ is the inverse image of the finite subset of integral classes in the discrete modulus-one quotient. The $p$-unit condition is clopen by continuity of norm. Consequently the indicator of $D$ is a compactly supported locally constant function, and multiplication by any ray-class unit preserves $D$. [F2, F3, A1, given, construct, algebra]

2.1 Construct a continuous map $q:D\to G$. For any finite quotient $G/U$, its fixed field is a finite abelian extension unramified away from $p$. By finite local and global Artin reciprocity [F3], all local units away from $p$ act trivially and a sufficiently deep principal-unit subgroup at each $v\mid p$ acts trivially. Hence the Artin map factors through a strict ray-class group of conductor supported over $p$. At such a conductor every integral ideal prime to $p$ represents an invertible class. The corresponding projection of $D$ therefore defines $q_U:D\to G/U$, and Artin functoriality makes these maps compatible as $U$ varies. Their inverse limit is the desired continuous $q$. On each prime ideal away from $p$, arithmetic Frobenius acts on roots of unity by its absolute norm. After passing through the real quotient, its even cyclotomic characters therefore satisfy $\rho_k(q(x))=N(x)^k$ for each even $k$; the equality extends to $D$ by its finite reductions. The natural map from the full inverse-limit ray-class group to $G$ is onto: each finite quotient is onto by [F3], and compactness of the ray-class inverse limit makes the compatible fibers nonempty. Thus every $a\in G$ has a ray-class lift $c$, and $q(cx)=a q(x)$ on $D$. Use the compact open locus of step 1.1. [F2, F3, F4, A1, step 1.1, construct, algebra]

3.1 For each $a\in G$ choose a ray-class lift $c$ as in step 2.1. Restrict the normalized interpolation measure $\lambda_c$ of [F1] to $D$ and push it forward along $q$, obtaining a bounded $\mathbb Z_p$-valued measure $\nu_a$ on $G$. The restriction is legitimate because $D$ is compact open, so the pullback of every locally constant function on $G$, extended by zero outside $D$, is a compactly supported finite-conductor test. For a finite-quotient function $\phi$ on $G$ and positive even $k$, [F1] gives $\nu_a(\rho_k\phi)=L(1-k,\phi\circ q\,1_D)-\rho_k(a)L(1-k,(\phi\circ q)_c\,1_D)$, because $N(x)^k=\rho_k(q(x))$ and $N(c)^k=\rho_k(a)$. For two elements $a,b$, expand the four terms in $(1-[b])\nu_a(\rho_k\phi)$ and use commutativity: the result is symmetric in $a,b$. Hence $(1-[b])\nu_a$ and $(1-[a])\nu_b$ agree on every $\rho_2\phi$. Multiplication by the continuous unit-valued $\rho_2$ is an isometry of $C(G,\mathbb Z_p)$, and locally constant finite-quotient functions are uniformly dense, so the bounded measures agree: $(1-[b])\nu_a=(1-[a])\nu_b$. Use the Artin and translation identities of step 2.1. [F1, F2, F5, step 1.1, step 2.1, construct, algebra]

4.1 Choose $a_0=\gamma$. Under the finite-times-procyclic decomposition of [F4], $1-[\gamma]$ is a non-zero-divisor of $\Lambda(G)$: with $T=[\gamma]-1$ it is $-T$ in the power-series algebra over the finite group ring, and multiplication by $T$ shifts coefficients injectively. Define $\mu_{F,p}=\nu_\gamma/(1-[\gamma])$ in the total quotient ring. Step 3.1 gives $(1-[b])\mu_{F,p}=\nu_b$ for every $b\in G$, so this fraction satisfies the full pseudomeasure integrality condition [F5]; it is independent of the chosen ray-class lifts. For $\phi=1_G$, its pullback is $1_D$. The Dirichlet series for this function is the sum over integral ideals prime to $p$, hence is $\zeta_F(s)\prod_{v\mid p}(1-(Nv)^{-s})$ by [F7], first for $\operatorname{Re}(s)>1$ and then by its meromorphic continuation. Translation by a ray-class unit preserves $D$, so [F1] gives $\nu_\gamma(\rho_k)=(1-\rho_k(\gamma))\zeta_F^{(p)}(1-k)$. The denominator is nonzero for every positive even $k$ by [F4], so regularized evaluation gives the required moment. [F1, F4, F5, F7, step 3.1, construct, algebra]

5.1 For $F=\mathbb Q$, [F6] supplies a pseudomeasure $\zeta_p$ on $H=\mathbb Z_p^\times$. Its quotient by complex conjugation is the real cyclotomic group $G=H/\{\pm1\}$. Let $a=1+p$ and $\pi:H\to G$; $\pi(a)$ is a topological generator of the pro-$p$ factor. In the source group, $1-[a]$ is regular and $(1-[a])\zeta_p$ is integral. Push that integral numerator to $\Lambda(G)$ and divide by the regular element $1-[\pi(a)]$. For every $b\in G$ choose a lift $\tilde b\in H$; multiplying the fraction by $1-[b]$ gives the integral pushforward of $(1-[\tilde b])\zeta_p$, using the same cocycle identity as in step 4.1. Thus the quotient is a pseudomeasure. Every even cyclotomic character of $G$ pulls back to $x\mapsto x^k$ on $H$, and [F6] gives exactly $(1-p^{k-1})\zeta(1-k)=\zeta_{\mathbb Q}^{(p)}(1-k)$. Since any chosen $\gamma$ is a procyclic generator, [F4] permits its use as the regularizer. [F4, F5, F6, step 4.1, construct, algebra]

6.1 Finally prove uniqueness in both cases. Write $G=\Delta\times\Gamma$ as in [F4], with $\Delta$ cyclic of order $d$ prime to $p$, $\Gamma=\langle\gamma\rangle$, and $u=\rho_2(\gamma)\in1+p\mathbb Z_p$ nontrivial. The square of the cyclotomic character separates $\Delta$, so its powers run through all finite-factor characters. If two pseudomeasures have the same even moments, their difference $v$ has $h=(1-[\gamma])v\in\Lambda(G)$ and $\rho_{2n}(h)=0$ for every $n\ge1$. Decompose $h$ using the finite character idempotents as power series $h_\eta(T)\in\mathbb Z_p\llbracket T\rrbracket$. If $h\ne0$, let $m$ be the smallest $T$-order among its components and $c_\eta$ their coefficients of $T^m$, not all zero. For each residue $r\pmod d$, choose positive integers $n_j$ with $p^j\mid n_j$ and $n_j\equiv r\pmod d$. Then $t_j=u^{n_j}-1\to0$ $p$-adically, and evaluation at $\rho_{2n_j}$ selects the component for that residue. Dividing the zero value by $t_j^m$ and taking the limit gives its leading coefficient $c_\eta=0$. All characters occur, contradiction. Thus $h=0$, and regularity of $1-[\gamma]$ from step 4.1 gives $v=0$. This proves existence and uniqueness with the unchanged even moments. [F4, F5, step 4.1, step 5.1, algebra, discharge-construct] ∎

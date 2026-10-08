---
id: thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing
kind: theorem
title: "Generic quantum Serre halves have classical PBW ranks and a nondegenerate Hopf pairing"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free
  - lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra
  - def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum
  - def-axiom-of-choice
  - def-field-of-fractions
  - def-restriction-and-extension-of-scalars
aliases: []
dependency_level: 6
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum Current Algebras, Journal of Lie Theory 13 (2003), 21–64"
      url: "https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf"
      locator: "§1.1, printed pp. 22–24: Theorem 1.2 (nondegeneracy of the pairing) and Corollaries 1.2–1.3 (generic ranks, generic pairing); §2.2, printed pp. 37–38: the wordwise pairing (28), the descent to U_\u210fn^+ \u00d7 U_\u210fn^- and the annihilator argument; §2.4, printed p. 38: the generic transfer. All linear-algebra and coefficient verifications are supplied locally."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed pp. 5–6: displays (1.4)–(1.7), the Serre presentation, the braided coproducts and the half-PBW interface used for the ranks."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Let $(I,A,D,P,P^{\vee},q)$ be a finite symmetrizable Cartan datum, $R=\mathbb C\llbracket\hbar\rrbracket$, $q=e^{\hbar}$ and $q_i=e^{d_i\hbar}$, and let $U_\hbar\mathfrak n^+$, $\langle V\rangle$, $T(V^*)$ and the Serre ideal $J_-$ be as in [[def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum]] and [[lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra]]; write $U_\hbar\mathfrak n^-:=T(V^*)/J_-$. Assume the axiom of choice AC ([[def-axiom-of-choice]]); it enters only through [[thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free]] in part (i). Let $q'$ be an indeterminate and let $U_{q'}\mathfrak n^{\pm}$ be the $\mathbb C(q')$-algebras with generators $e_i'$ (respectively $f_i'$), $i\in I$, and the quantum Serre relations
$$\sum_{s=0}^{1-a_{ij}}(-1)^s\binom{1-a_{ij}}{s}_{q_i'}e_i'^{1-a_{ij}-s}e_j'e_i'^s=0\qquad(i\ne j),$$
respectively their negative analogues, where $q_i'=q'^{d_i}$.

(i) **Generic PBW ranks.** For every $\alpha\in Q_+$,
$$\operatorname{rank}_R U_\hbar\mathfrak n^+[\alpha]=\dim_{\mathbb C}U\mathfrak n^+[\alpha]=\dim_{\mathbb C(q')}U_{q'}\mathfrak n^+[\alpha],$$
and the same three numbers equal $\operatorname{rank}_R U_\hbar\mathfrak n^-[-\alpha]=\dim_{\mathbb C}U\mathfrak n^-[-\alpha]=\dim_{\mathbb C(q')}U_{q'}\mathfrak n^-[-\alpha]$. In particular every $U_\hbar\mathfrak n^\pm[\pm\alpha]$ is a finite free $R$-module of the classical PBW rank, and every family of homogeneous lifts of a $\mathbb C$-basis of $U\mathfrak n^+[\alpha]$ (respectively of $U\mathfrak n^-[-\alpha]$) is an $R$-basis of the corresponding formal component.

(ii) **Nondegenerate pairing.** The wordwise pairing of [[lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra]](ii) descends to a $\mathbb C((\hbar))$-valued pairing $\langle\cdot,\cdot\rangle:U_\hbar\mathfrak n^+\times U_\hbar\mathfrak n^-\to\mathbb C((\hbar))$, and this pairing is nondegenerate: its left and right annihilators are zero. It satisfies the two adjunction rules
$$\langle x,yy'\rangle=\sum\langle x_{(1)},y\rangle\langle x_{(2)},y'\rangle,\qquad \langle xx',y\rangle=\sum\langle x,y_{(1)}\rangle\langle x',y_{(2)}\rangle ,$$
with the cut coproduct on the first argument and the braided coproduct of $T(V^*)$ on the second, understood on the realizing models: for $y\in U_\hbar\mathfrak n^-$ and any representative $\tilde y\in T(V^*)$ the value $\sum\langle x,(\tilde y)_{(1)}\rangle\langle x',(\tilde y)_{(2)}\rangle$ is independent of the representative and equals $\langle xx',y\rangle$. The rescaled pairing normalized to $\langle e_i,f_{i'}\rangle=\hbar^{1-d_i}\delta_{ii'}$ differs from it by unit factors and is nondegenerate as well; equivalently, the $\mathbb C(q')$-bilinear pairing $U_{q'}\mathfrak n^+\times U_{q'}\mathfrak n^-\to\mathbb C(q')$ given by the same word formula and the substitution $q'=e^{\hbar}$ is nondegenerate, so that the generic halves are graded dual to one another.

## Facts & Assumptions

**Given:** A finite symmetrizable Cartan datum, its formal shuffle Borel, the wordwise pairing and the positive and negative formal halves.

[F1] $U_\hbar\mathfrak n^+$ is the quotient of the tensor algebra $T_R(E_R)$ by the two-sided ideal generated by the positive quantum Serre sums, and $U_\hbar\mathfrak n^-=T(V^*)/J_-$ with $J_-$ generated by the negative Serre sums; both are $\mathbb N^I$-graded ([[def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum]], [[lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra]]).

[F2] The composite $U_\hbar\mathfrak n^+\to U_\hbar\mathfrak b^+\xrightarrow{p_\hbar}\mathcal V$ is an isomorphism onto $\langle V\rangle$, the reduction $U_\hbar\mathfrak n^+/\hbar U_\hbar\mathfrak n^+\cong U\mathfrak n^+$ is a graded algebra isomorphism, and $\operatorname{rank}_R U_\hbar\mathfrak n^+[\alpha]=\dim_{\mathbb C}U\mathfrak n^+[\alpha]=\dim_{\mathbb C(q')}U_{q'}\mathfrak n^+[\alpha]$ for every $\alpha\in Q_+$; AC is used in the proof only through the two-sided coideal lemma ([[thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free]]).

[F3] Every negative Serre generator and hence every element of $J_-$ annihilates $\langle V\rangle$ under the wordwise pairing, so the pairing descends to $\langle V\rangle\times(T(V^*)/J_-)$; the pairing is diagonal in the tensor-word bases, $\langle[v_{i_1}|\cdots|v_{i_k}],\xi_{j_1}\cdots\xi_{j_l}\rangle=\delta_{kl}\delta_{i_1j_1}\cdots\delta_{i_kj_k}\hbar^{-k}\prod_td_{i_t}^{-1}$, and it satisfies the cut-coproduct adjunction rule $\langle x,yy'\rangle=\sum_k\langle x_{\le k},y\rangle\langle x_{>k},y'\rangle$ for all $x\in\mathrm{Sh}(V)$ and $y,y'\in T(V^*)$ ([[lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra]]).

[F4] The assignment $e_i\mapsto\xi_i$ identifies the free $R$-algebras $T_R(E_R)$ and $T(V^*)$ and carries the positive Serre ideal onto $J_-$; hence $U_\hbar\mathfrak n^-\cong U_\hbar\mathfrak n^+$ as $R$-algebras with $\deg\xi_i=-\epsilon_i$ corresponding to $\deg e_i=\epsilon_i$, and the generic halves $U_{q'}\mathfrak n^\pm$ have the same presentation up to this identification (given).

[F5] $T(V^*)$ carries the braided coproduct $\Delta(\xi_i)=\xi_i\otimes1+1\otimes\xi_i$, extended as an algebra map to the tensor square with the braided product $(u\otimes v)(u'\otimes v')=q^{-\langle\deg u',\deg v\rangle}uu'\otimes vv'$, and $\mathrm{Sh}(V)$ carries the cut coproduct $\Delta([u])=\sum_k[u_{\le k}]\otimes[u_{>k}]$ ([[lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra]]).

[F6] The symmetric Gaussian coefficient $C_{m,r}$ is a Laurent polynomial in $q_i$, so all structure constants below lie in $R$ or in $\mathbb C((\hbar))$ after the substitutions $q=e^\hbar$, $q'=e^\hbar$ ([[def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum]]).

[F7] The fraction field of the domain $R=\mathbb C\llbracket\hbar\rrbracket$ is $\mathbb C((\hbar))$, and scalar extension of an injective map into a field extends injectively to the fraction field ([[def-field-of-fractions]], [[def-restriction-and-extension-of-scalars]]).

[F8] AC is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F9] The only further ingredients are finite-dimensional linear algebra over $\mathbb C((\hbar))$ and finite tensor-word computations with the Laurent coefficients of [F6]; no additional choice is used.



## Proof

**Proof technique:** Read the ranks off the formal embedding theorem, transfer them to the negative half by the presentation identification, then descend the wordwise pairing and compare the two graded annihilators by a dimension count over $\mathbb C((\hbar))$. The adjunction rules are verified coefficientwise on tensor words.

1.1 For $\alpha\in Q_+$, [F2] (whose only AC input is [F8]) gives that $U_\hbar\mathfrak n^+[\alpha]$ is finite free of rank $d_\alpha:=\dim_{\mathbb C}U\mathfrak n^+[\alpha]=\dim_{\mathbb C(q')}U_{q'}\mathfrak n^+[\alpha]$. By [F4] the assignment $e_i\mapsto\xi_i$ induces an isomorphism of graded $R$-algebras $U_\hbar\mathfrak n^+\to U_\hbar\mathfrak n^-$ carrying $\alpha$ to $-\alpha$, and it induces an isomorphism $U_{q'}\mathfrak n^+[-\alpha]\cong U_{q'}\mathfrak n^-[\alpha]$; hence $\operatorname{rank}_R U_\hbar\mathfrak n^-[-\alpha]=\dim_{\mathbb C}U\mathfrak n^-[-\alpha]=\dim_{\mathbb C(q')}U_{q'}\mathfrak n^-[-\alpha]=d_\alpha$. [F1, F2, F4, given, algebra]

1.2 Let $(b_\nu)$ be a $\mathbb C$-basis of $U\mathfrak n^+[\alpha]$ and choose homogeneous lifts $b_\nu'\in U_\hbar\mathfrak n^+[\alpha]$ of the $b_\nu$; these exist because the reduction map of [F2] is surjective onto $U\mathfrak n^+[\alpha]$. If $\sum_\nu r_\nu b_\nu'=0$ with $r_\nu=\sum_{m\ge0}r_{\nu,m}\hbar^m$, then reducing modulo $\hbar$ gives $\sum_\nu r_{\nu,0}b_\nu=0$, so all $r_{\nu,0}=0$; repeating the same argument for the successive $\hbar$-adic coefficients shows $r_\nu=0$ for all $\nu$, and the family is linearly independent over $R$. Conversely, given $x\in U_\hbar\mathfrak n^+[\alpha]$, suppose $x-\sum_\nu r_\nu b_\nu'\in\hbar^mU_\hbar\mathfrak n^+[\alpha]$; the reduction of $x-\sum_\nu r_\nu b_\nu'$ modulo $\hbar^m$ has a class modulo $\hbar$ in $U\mathfrak n^+[\alpha]=U_\hbar\mathfrak n^+[\alpha]/\hbar$ that is a $\mathbb C$-combination of the $b_\nu$, so adjusting the coefficient of $\hbar^m$ in finitely many $r_\nu$ makes the difference lie in $\hbar^{m+1}U_\hbar\mathfrak n^+[\alpha]$. The resulting coefficient series define elements $r_\nu\in R$ with $x=\sum_\nu r_\nu b_\nu'$, because the finite free module is $\hbar$-adically complete and separated. Hence $(b_\nu')$ is an $R$-basis; the same argument applies to $U\mathfrak n^-[-\alpha]$ using [F4]. [F1, F2, F4, F9, algebra]

1.3 By [F3] the wordwise pairing descends to $\langle V\rangle\times U_\hbar\mathfrak n^-$, and [F2] identifies $\langle V\rangle$ with $U_\hbar\mathfrak n^+$. On tensor words the descended pairing is $\langle[v_{i_1}|\cdots|v_{i_k}],[\xi_{j_1}\cdots\xi_{j_l}]\rangle=\delta_{kl}\delta_{i_1j_1}\cdots\delta_{i_kj_k}\hbar^{-k}\prod_td_{i_t}^{-1}$; it is therefore $\mathbb C((\hbar))$-bilinear after extension of scalars and its annihilator on either side of the tensor-word model is zero. Consequently the left annihilator of $U_\hbar\mathfrak n^-$ in $U_\hbar\mathfrak n^+$ is zero: if $x$ pairs to zero with every class in $U_\hbar\mathfrak n^-$, then its representative in $\langle V\rangle$ pairs to zero with every tensor word, since $T(V^*)\to U_\hbar\mathfrak n^-$ is surjective and the values depend only on classes. [F2, F3, given, algebra]

2.1 The descended pairing satisfies the two adjunction rules. The first, $\langle x,yy'\rangle=\sum_k\langle x_{\le k},y\rangle\langle x_{>k},y'\rangle$, is the rule of [F3] on representatives, and both sides depend only on the classes of $y,y'$ because the functionals $\langle x_{\le k},\cdot\rangle$ and $\langle x_{>k},\cdot\rangle$ annihilate $J_-$ by [F3]. For the second rule, let $u,v$ be tensor words and $w$ a tensor word with letter sequence the concatenation of those of $u$ and $v$; by [F3] the left side $\langle[u]*[v],w\rangle$ equals $\hbar^{-|w|}\bigl(\prod_sd_s^{-1}\bigr)$ times the coefficient of $w$ in $[u]*[v]$, and the right side equals the coefficient of the pure tensor $[u]\otimes[v]$ in the braided coproduct $\Delta(w)$ times the same weight. Both coefficients are the sum over the same assignments of the letters of $w$ to the two tensor factors, weighted by $q^{-\sum\langle\deg z_a,\deg z_b\rangle}$ over the pairs whose relative order is reversed: for the shuffle coefficient this is the shuffle formula of [F3], and for the coproduct coefficient it is the expansion of $\Delta$ as the product of the factors $\Delta(\xi_i)=\xi_i\otimes1+1\otimes\xi_i$ in the braided tensor square of [F5], where the scalar attached to an assignment is the product of the braiding factors $q^{-\langle\deg\xi_j,\deg\xi_i\rangle}$ over the pairs $i<j$ assigned to the second and first factors respectively. The two weight multisets coincide because $\langle\deg\xi_j,\deg\xi_i\rangle=\langle\epsilon_j,\epsilon_i\rangle=\langle\epsilon_i,\epsilon_j\rangle$ is symmetric, so the coefficients agree; taking linear combinations gives $\langle xx',y\rangle=\sum\langle x,y_{(1)}\rangle\langle x',y_{(2)}\rangle$ on representatives, and the right side depends only on the class of $y$ because it equals the left side, which does. [F3, F5, step 1.3, algebra]

2.2 Fix $\alpha\in Q_+$ and put $K=\mathbb C((\hbar))$, $A=U_\hbar\mathfrak n^+[\alpha]\otimes_RK$ and $B=U_\hbar\mathfrak n^-[\alpha]\otimes_RK$. By steps 1.1 and 1.2 both are finite-dimensional $K$-vector spaces of the same dimension $d_\alpha$, and by step 1.3 the pairing induces a $K$-bilinear map $A\times B\to K$ whose left annihilator is zero: if $a\ne0$ is annihilated by $B$, then its representative in $\langle V\rangle[\alpha]$ is annihilated by $T(V^*)[-\alpha]\otimes K$ (every tensor word lies in $T(V^*)[-\alpha]$) and hence is zero by the diagonal form of [F3]. The induced map $A\to B^*$ is therefore injective between finite-dimensional spaces of dimension $d_\alpha$, hence an isomorphism, so the pairing is nondegenerate on both sides. [F2, F3, step 1.1, step 1.2, step 1.3, F9, algebra]

3.1 The normalized pairing. The wordwise pairing has generator values $\langle[v_i],[\xi_j]\rangle=\hbar^{-1}d_i^{-1}\delta_{ij}$, so multiplying the $f$-generators by the units $d_i\hbar^{2-d_i}$ multiplies the pairing by the units $d_i\hbar^{2-d_i}\hbar^{-1}d_i^{-1}=\hbar^{1-d_i}$ and gives the normalization $\langle e_i,f_{i'}\rangle=\hbar^{1-d_i}\delta_{ii'}$; multiplying by units preserves nondegeneracy of a pairing between free modules, so the normalized pairing is nondegenerate as well. [F1, step 2.2, algebra]

4.1 The generic statement. Assigning $q'\mapsto e^\hbar$ is an injection $\mathbb C(q')\hookrightarrow K$: a nonzero polynomial factors as $(q'-1)^mp(q')$ with $p(1)\ne0$, and $p(e^\hbar)$ has nonzero constant term while $e^\hbar-1\ne0$ lies in the domain $R$, so the evaluation is nonzero; the injection extends to the fraction fields by [F7]. Both $U_{q'}\mathfrak n^+[\alpha]\otimes_{\mathbb C(q')}K$ and the formal component are quotients of the same finite free word module by the ideals generated by the specializations of the quantum Serre relations, whose coefficients are Laurent polynomials by [F6]; hence the two presentations coincide over $K$ and the base change of the $\mathbb C(q')$-valued wordwise pairing is the descended pairing of step 2.2, which is nondegenerate. Since an injective $K$-linear map between the base changes restricts to an injective $\mathbb C(q')$-linear map in the given bases, the generic pairing $U_{q'}\mathfrak n^+\times U_{q'}\mathfrak n^-\to\mathbb C(q')$ is nondegenerate and the generic graded components are dual, as claimed. [F1, F2, F6, F7, step 1.1, step 2.2, algebra] ∎

The two adjunction rules are the braided Hopf pairing axioms in the realizing shuffle and tensor models. Only the exact statements proved above are used downstream: nondegeneracy, graded duality and the adjunction rules hold for the descended pairing; the $\mathbb C(q')$-form is recorded in the normalization actually used.

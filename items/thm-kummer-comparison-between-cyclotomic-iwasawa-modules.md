---
id: thm-kummer-comparison-between-cyclotomic-iwasawa-modules
kind: theorem
title: "Kummer comparison between unramified and p-ramified cyclotomic Iwasawa modules"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower
  - def-maximal-unramified-cyclotomic-iwasawa-class-group-module
  - thm-iwasawa-p-ramified-module-finitely-generated-torsion
  - thm-iwasawa-unramified-module-finitely-generated-torsion
  - def-axiom-of-choice
  - def-dependent-choice
  - def-iwasawa-characteristic-ideal-over-zp-power-series
  - def-pontryagin-dual-and-compact-open-topology
  - lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
  - thm-cyclotomic-kummer-radical-unit-class-exact-sequence
  - thm-cyclotomic-class-limit-adjoint-characteristic-inversion
  - thm-kronecker-root-of-unity-criterion
  - def-countable-choice
axiom_use: "AC and Countable Choice remain the public hypotheses. Dependent Choice used by the recorded class-field suppliers follows from AC, as shown in the proof."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Coates and R. Sujatha, The Main Conjecture"
      url: "https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download"
      locator: "§3, printed p. 117, Theorem 3.3"
    - title: "R. Sharifi, Iwasawa Theory lecture notes"
      url: "https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html"
      locator: "§§3.3–3.4, Proposition 3.3.9, Corollary 3.3.14, Proposition 3.4.7 and Corollary 3.4.9"
verification:
  precheck: pending
proof_strategy: constructive
---

## Statement

Assume AC and Countable Choice. Let $F$ be a totally real number field, let $p$ be an odd prime, put $\mathcal F_\infty=F(\mu_{p^\infty})$, and let $F_\infty=\mathcal F_\infty^{\langle c\rangle}$ for complex conjugation $c$. Let $\mathcal G=\operatorname{Gal}(\mathcal F_\infty/F)$, let $G=\operatorname{Gal}(F_\infty/F)$, and let $\Gamma\cong\mathbb Z_p$ be their common cyclotomic pro-$p$ subgroup. Let $\Delta_F$ be the finite torsion subgroup of $\mathcal G$, identified by restriction with $\operatorname{Gal}(F(\mu_p)/F)$, and put $\Delta_F^+=\Delta_F/\langle c\rangle$. Let $\chi_F:\mathcal G\to\mathbb Z_p^\times$ be the cyclotomic character determined by $g(\zeta)=\zeta^{\chi_F(g)}$ for compatible $p$-power roots of unity $\zeta$, put $\omega_F=\chi_F|_{\Delta_F}$, choose a topological generator $\gamma$ of $\Gamma$, set $u=\chi_F(\gamma)$, and identify $\mathbb Z_p[\![\Gamma]\!]$ with $\mathbb Z_p[\![T]\!]$ by $\gamma\mapsto1+T$. Define $X_\infty$ as the maximal unramified abelian pro-$p$ Galois module over $\mathcal F_\infty$, and define $Y_\infty$ as the maximal abelian pro-$p$ Galois module over $F_\infty$ unramified outside primes above $p$. For each integer $j$, set $X_\infty^{(j)}=e_{\omega_F^j}^{\Delta_F}X_\infty$; for even $j$, which makes $\omega_F^j$ trivial on $c$, set $Y_\infty^{(j)}=e_{\omega_F^j}^{\Delta_F^+}Y_\infty$ using the induced character of $\Delta_F^+$. Here $e_\psi^D=|D|^{-1}\sum_{\tau\in D}\psi(\tau)^{-1}[\tau]$ for a character $\psi$ of a finite group $D$ of order prime to $p$. For every odd integer $i$ modulo $\delta=|\Delta_F|$, the cyclotomic Kummer comparison asserts that if $H_i(T)$ generates $\operatorname{char}_{\mathbb Z_p[\![T]\!]}(X_\infty^{(-i)})$, then
$$H_i\bigl(u(1+T)^{-1}-1\bigr)$$
generates $\operatorname{char}_{\mathbb Z_p[\![T]\!]}(Y_\infty^{(i+1)})$.

## Statement references

[J. Coates and R. Sujatha, *The Main Conjecture*, Theorem 3.3, p. 117](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

[R. Sharifi, *Iwasawa Theory*, §§3.3–3.4, pp. 85–91](https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html)


## Facts & Assumptions

**Given:** AC, Countable Choice, $F,p$, the full and real cyclotomic towers, $i$, and the characteristic-generator convention in the unchanged Statement.

[F1] The full unramified and real $p$-ramified modules are the specified maximal-extension Galois modules with their continuous cyclotomic actions. [[def-maximal-unramified-cyclotomic-iwasawa-class-group-module]] [[def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower]]

[F2] These modules and their finite-character components are finitely generated torsion, and the one-variable characteristic ideal is the finite height-one length product. [[thm-iwasawa-unramified-module-finitely-generated-torsion]] [[thm-iwasawa-p-ramified-module-finitely-generated-torsion]] [[def-iwasawa-characteristic-ideal-over-zp-power-series]]

[F3] The full and real cyclotomic groups have the specified finite prime-to-$p$ factors and common procyclic $\Gamma$; the cyclotomic character sends complex conjugation to $-1$. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]]

[F4] The cyclotomic Kummer radical sequence identifies continuous $\mu_{p^\infty}$-valued characters of the full $p$-ramified module with an extension of the direct-limit class group by units tensored with $\mathbb Q_p/\mathbb Z_p$, equivariantly for the tower action. [[thm-cyclotomic-kummer-radical-unit-class-exact-sequence]]

[F5] For each finite character $\eta$, the characteristic ideal of $e_{\eta^{-1}}A_\infty^\vee$ is obtained from that of $e_\eta X_\infty$ by the inverse-$\Gamma$ automorphism $\iota(T)=(1+T)^{-1}-1$. [[thm-cyclotomic-class-limit-adjoint-characteristic-inversion]]

[F6] An algebraic integer all of whose complex conjugates have absolute value one is a root of unity. [[thm-kronecker-root-of-unity-criterion]]

[F7] The Pontryagin dual has the contragredient action. [[def-pontryagin-dual-and-compact-open-topology]]

[A1] AC and Countable Choice are the original public assumptions. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Proof technique:** Kummer radical duality, CM-unit parity, real descent and the cyclotomic adjoint involution.

1.1 AC gives Dependent Choice on a serial relation by choosing one successor from each nonempty successor set and iterating; hence the DC-qualified suppliers [F4]–[F5] apply under [A1] without changing the Statement. Put $K=F(\mu_p)$ and $K_\infty=\mathcal F_\infty$. The former is CM and the latter is its cyclotomic $\mathbb Z_p$-extension by [F3]. Let $\mathfrak X$ be the maximal abelian pro-$p$ Galois module over $K_\infty$ unramified outside $p$, let $A_\infty$ be the direct limit of the $p$-parts of its finite-layer class groups, and put $U=\mathcal O_{K_\infty}^\times\otimes\mathbb Q_p/\mathbb Z_p$. [F1, F3, F4, F5, A1, given, construct, algebra]

2.1 Complex conjugation acts trivially on $U$. Indeed each unit $v$ of the infinite tower belongs to one finite CM layer, and every complex conjugate of the algebraic unit $v/\bar v$ has absolute value one. By [F6], $v/\bar v$ is a root of unity. Every torsion abelian group tensored with the divisible group $\mathbb Q_p/\mathbb Z_p$ is zero: if $nt=0$ and $b=nb'$, then $t\otimes b=nt\otimes b'=0$. Therefore $(1-c)(v\otimes b)=0$ for every elementary tensor, as claimed. Since $c$ acts by $-1$ on $\mu_{p^\infty}$, it acts by $-1$ on $U^\vee(1)$. Use the module $U$ of step 1.1. [F3, F6, F7, step 1.1, construct, algebra]

3.1 The equivariant Kummer sequence [F4] is $0\to U\to\operatorname{Hom}_{\mathrm{cts}}(\mathfrak X,\mu_{p^\infty})\to A_\infty\to0$. Pontryagin duality is exact on these discrete $p$-primary groups: $\mathbb Q_p/\mathbb Z_p$ is divisible, and a character on a subgroup extends by choosing roots successively, with AC for the extension; every finite quotient gives the compact topology. The Kummer pairing identifies the dual of $\operatorname{Hom}_{\mathrm{cts}}(\mathfrak X,\mu_{p^\infty})$ with $\mathfrak X(-1)$: at each finite quotient choose a compatible root-of-unity generator, use the perfect finite evaluation pairing, and pass to the inverse limit. Twisting the dual sequence by the cyclotomic character gives $0\to A_\infty^\vee(1)\to\mathfrak X\to U^\vee(1)\to0$. Since $p$ is odd, the idempotent $(1+c)/2$ is exact; step 2.1 makes the even part of the last term zero. Thus $\mathfrak X^+\cong A_\infty^\vee(1)^+$ equivariantly for the finite cyclotomic factor and $\Gamma$. [F3, F4, F7, A1, step 1.1, step 2.1, construct, algebra]

4.1 The even quotient $\mathfrak X^+$ is the real-tower module $Y_\infty$ of [F1]. Base-changing any finite abelian $p$-extension of the real tower unramified outside $p$ to $K_\infty$ gives such a full-tower extension on which $c$ acts trivially, hence a quotient of $\mathfrak X^+$. Conversely let $Z$ be a finite quotient of $\mathfrak X$ with trivial $c$-action and let $E/K_\infty$ be the corresponding extension. The kernel is $c$-stable, so $E$ is Galois over the real tower. A lift $t$ of $c$ has $t^2\in Z$, central because $c$ acts trivially. Since $Z$ is a finite abelian $p$-group and $p$ is odd, its squaring map is bijective; replacing $t$ by $t(t^2)^{-1/2}$ gives an order-two lift, and $\operatorname{Gal}(E/F_\infty)=Z\times\langle t\rangle$. The fixed field of $t$ is therefore an abelian $p$-extension of $F_\infty$. It is unramified away from $p$ because both $E/K_\infty$ and the cyclotomic quadratic extension are unramified there. Every finite even quotient arises this way, so inverse limits give $\mathfrak X^+\cong Y_\infty$. The identification is compatible with the commuting $\Delta_F^+$ and $\Gamma$ actions. Use the full module of step 3.1. [F1, F3, step 1.1, step 3.1, construct, algebra]

5.1 Fix odd $i$ and put $\eta=\omega_F^{-i}$. Since twisting by the cyclotomic character multiplies the finite $\Delta_F$-character by $\omega_F$, steps 3.1–4.1 identify $Y_\infty^{(i+1)}$ with the cyclotomic twist of $e_{\eta^{-1}}A_\infty^\vee$. By [F5], the latter module has characteristic ideal $\iota(H_i(T))R$ when $H_i(T)$ generates $\operatorname{char}_R(X_\infty^{(-i)})$. The twist changes $\gamma$ to $u\gamma$, so its characteristic ideal is obtained by substituting $T\mapsto u^{-1}(1+T)-1$: an annihilating polynomial in the old $\gamma$ becomes the same polynomial in $u^{-1}$ times the new $\gamma$, and the ring automorphism transports each height-one localization length in [F2]. Composing with $\iota$ sends $T$ to $u(1+T)^{-1}-1$. Therefore $H_i(u(1+T)^{-1}-1)$ generates $\operatorname{char}_R(Y_\infty^{(i+1)})$, exactly as stated. No $\mu=0$ assumption is used. [F2, F3, F5, step 3.1, step 4.1, algebra, discharge-construct] ∎

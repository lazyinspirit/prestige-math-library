---
id: lem-cft-affine-integral-root-and-module-transports
kind: lemma
title: "Integral-root congruences and actual affine quotient-module transports"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - lem-cft-principal-level-affine-admissibility
  - lem-cft-affine-finite-polarization-determinant
  - lem-cft-affine-zhu-quotient-and-integrable-descent
  - thm-cg-affine-alcove-transitivity-presentation-and-length
dependency_roles:
  lem-cft-principal-level-affine-admissibility: mathematical-premise
  lem-cft-affine-finite-polarization-determinant: mathematical-premise
  lem-cft-affine-zhu-quotient-and-integrable-descent: mathematical-premise
  thm-cg-affine-alcove-transitivity-presentation-and-length: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tomoyuki Arakawa, Rationality of admissible affine vertex algebras in the category O"
      url: https://arxiv.org/pdf/1207.4857v4
      locator: "Positive-system and highest-weight transport setting; the congruence, localization and Delta arguments are given locally."
    - title: "Tomoyuki Arakawa, Corrigendum to Rationality of admissible affine vertex algebras in the category O"
      url: https://www.kurims.kyoto-u.ac.jp/~arakawa/errata_admissible.pdf
      locator: "Both pages; corrected orbit predicate and Proposition 4.5. The congruence and orbit-to-direction arguments used here are proved locally."
dependency_level: 6
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $p,q$ be positive coprime integers, put $t=k+h^\vee=p/q>0$, and let the vacuum integral root system be affine. An affine weight $\lambda$ of level $k$, meaning $\lambda(K)=k$, whose finite simple directions satisfy
$$q\langle\lambda+\widehat\rho,\alpha_i^\vee\rangle\in\gcd(q,2/(\alpha_i,\alpha_i))\mathbb Z$$
has an extended-Weyl translate with integral finite Cartan weight; the integral positive systems can be matched by an element $y$ with $y\Delta_{\mathrm{vac}}^+\subset\widehat\Delta_+^{\mathrm{re}}$. These conclusions also apply when $\widehat\Delta(\lambda)=y_0\widehat\Delta(k\Lambda_0)$ for some $y_0\in\widetilde W=W\ltimes P^\vee$, where $W$ is the finite Weyl group, $P^\vee=\{\eta:\alpha_i(\eta)\in\mathbb Z\text{ for every finite simple }\alpha_i\}$, and $t_\eta(\alpha+n\delta)=\alpha+(n-\alpha(\eta))\delta$. Abstract isomorphism of the integral root systems alone is not asserted to imply the congruences. For an original affine simple root with shifted pairing outside $\mathbb Z_{>0}$, descent is supplied by actual Ore localization of vertex-module modes. In particular the nonintegral galleries in such a positive-system match transport quotient-VOA highest modules in both directions. Length-zero extended elements are implemented by explicit Cartan $\Delta_H$ field operators preserving the vacuum ideal. No affine classification theorem is assumed in these transports.

## Facts & Assumptions

**Given:** The objects, normalizations and hypotheses in the Statement.

[F1] [[lem-cft-principal-level-affine-admissibility]], Proof 4.1–5.1, supplies the normalized affine coroot calculation. Step 12.1 below derives the needed vacuum periods directly for the present arbitrary positive coprime p,q; the supplier’s additional numerator bounds are required for its admissibility conclusion, which is not used here.

[F2] [[lem-cft-affine-finite-polarization-determinant]], Proof 12.1, gives the restricted free/cofree comparison calculus; Proof 24.1 identifies the original simple-root twisting bimodule with the actual Ore quotient $U_{f_i}/U$, and Proof 26.1 proves its nonintegral simple-wall action. The ideal-preservation calculation below supplies the actual vertex-module part; no vertex-module assertion is imported from this supplier.

[F3] [[lem-cft-affine-zhu-quotient-and-integrable-descent]], Proof 1.1–6.1, supplies the nonnegative affine current VOA, its current-field identities, and the actual induced restricted-current modules used in the Zhu identification. No general restricted-current reconstruction theorem is assumed here: step 1.1 starts with an existing weak quotient-VOA module, and steps 4.1–8.1 extend and transform all of its state modes directly. The supplier’s classification/descent clause is not used to prove the transport.

[F4] [[thm-cg-affine-alcove-transitivity-presentation-and-length]] supplies the ordinary affine alcove action and finite galleries. The extended coweight translations are defined and checked explicitly below.

## Proof


1.1 **Mode-ideal-preserving simple reflections.** Let $V=V^{k}(g)$, let N be a vertex ideal, and let $M=L(\lambda )$ be an irreducible affine highest-weight module which is a weak V/N-module. Fix an original affine simple root i. If $m=\langle\lambda +\widehat\rho,\alpha_i^\vee\rangle$ is not a positive integer, then $L(s_{i} \cdot  \lambda )$ is also a weak V/N-module. [given, F1, F2, F3, F4, algebra]

2.1 Write e,f,h for the corresponding affine sl2 triple. First f is injective on M. The subspace of f-locally-nilpotent vectors is stable under every affine generator: ad f is locally nilpotent on those generators, and expanding $f^{r} x$ as a finite commutator sum proves stability. If f had a kernel this subspace would be nonzero, hence all M by simplicity. The highest vector would then generate a finite sl2 string, forcing lambda(h) to be a nonnegative integer and $m=\lambda (h)+1$ to be positive integral, contrary to the hypothesis. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 Since ad f is locally nilpotent on U(aff), its powers satisfy the Ore condition. Explicitly moving x across $f^{r}$ gives the finite binomial commutator expansion; for sufficiently large r all its terms have the required right f divisor. PBW shows that f is not a zero divisor in U(aff). The localization $M_{f}$ therefore exists, and M embeds in it because f is injective. [given, F1, F2, F3, F4, step 2.1, algebra]

4.1 The weak vertex-module structure genuinely extends to this localization. For a state a of conformal weight d, the current commutator is `[x_l,a_n]=Σ_{j>=0} binom(l,j) (x_j a)_(l+n-j).` [given, F1, F2, F3, F4, step 3.1, algebra]

5.1 For a homogeneous state a of conformal degree d, put $E_{d}=\bigoplus _{a=0}^{d} V_{a}$. This is a finite-dimensional horizontal-Cartan weight space sum. A term $x_{j} a$ in step 4.1 has conformal degree d−j and horizontal weight wt(a)+wt(x). After R repeated commutators with $x_{l}$, every surviving term remains in $E_{d}$ and has horizontal weight wt(a)+R wt(x). Its possible state-mode index is n+Rl−s with $0\le s\le d$. Since wt(x) is a nonzero horizontal root and $E_{d}$ has only finitely many horizontal weights, $(\operatorname{ad}x_l)^R(a_n)=0$ for R sufficiently large independently of n. This proves the uniform local-nilpotence and bounded-mode-shift assertions also for $f_{0}=e_{\theta }(-1)$; it does not require its loop index to be positive. The same argument applies to the raising Chevalley generator. [F3, step 4.1, algebra]

6.1 For $δ=\operatorname{ad} f$ define the action on the existing affine localization by the finite formula $$a_n(f^{-r}v)=\sum_{j\ge0}\binom{r+j-1}{j}f^{-r-j}\delta^j(a_n)v\qquad(r\ge1).$$ It is independent of representatives. Indeed $δ^{j}(a_{n})f=fδ^{j}(a_{n})−δ^{j+1}(a_{n})$, and the adjacent coefficients for $f^{-r-1}fv$ cancel by $\binom{r+j}{j}−\binom{r+j−1}{j−1}=\binom{r+j−1}{j}$. The $r=0$ endpoint recovers the old action. Thus this defines operators on $M_{f}$, not merely a symbolic fraction substitution. [step 3.1, step 5.1, algebra]

6.2 Moreover, the span of modes of states in N is invariant under these commutators, because $x_{j} N$ is contained in N. Its localized action is zero: every term of the finite commutator formula ends in an N-state mode acting on M. Hence $M_{f}$ and $Q=M_{f}/M$ are weak V/N-modules. [given, F1, F2, F3, F4, step 5.1, algebra]

7.1 The extension preserves products of operators: apply $δ^{j}(AB)=\sum _{i} \binom{j}{i}δ^{i}(A)δ^{j−i}(B)$ and the same binomial convolution to the formula in step 6.1. Every sum is finite after evaluation on a vector. Lower truncation holds because step 5.1 gives a finite collection of transformed states and uniformly bounded mode shifts for a fixed $a,f^{-r}v$. A coefficient of the module Borcherds identity is consequently a finite identity on this vector: state products truncate in V and the remaining sums truncate on these finite transformed state/vector families. The finite product calculation, or clearing one common f denominator, transfers that identity from M. Vacuum and translation transfer as their finite linear relations. These are actual weak vertex-module axioms, including composite states. [F3, step 4.1, step 5.1, step 6.1, algebra]

8.1 Let $σ=\exp (\operatorname{ad} e)\exp (\operatorname{ad}(−f))\exp (\operatorname{ad} e)$, the affine Tits reflection. By step 5.1 each exponential terminates uniformly in the mode index on a fixed state-mode family and involves only bounded mode-index shifts. Inner commutation differentiates every mode relation; the finite exponentials therefore preserve module Borcherds, vacuum and translation relations. Because the ideal-state mode span is stable under each current commutator, the exponentials also preserve that mode ideal. Pulling $Q=M_{f}/M$ back along σ thus gives another actual weak V/N-module, with lower truncation retained by the same uniform finite-state bounds. This changes the action of all state modes; it is not an identification of an arbitrary affine Lie representation with a vertex module. [F3, step 5.1, step 6.1, step 7.1, step 6.2, algebra]

9.1 In Q the vector $u=f^{-1} v_{\lambda }$ is nonzero. Otherwise $v_{\lambda }$ would belong to fM; its preimage would have weight $\lambda +\alpha _{i}$, absent from a highest-weight module. The reflected $e_{i}$ acts as a nonzero scalar multiple of old f and therefore kills u modulo M. For $j\ne i, \sigma (e_{j})$ is a root vector in the positive root string $\alpha _{j}-a_{ij} \alpha _{i}$. Moving it across $f^{-1}$ gives a finite sum of positive-root vectors from that string, each acting on $v_{\lambda }$, hence zero. Thus u is a highest vector for the twisted positive Borel. Its new weight is `s_i(lambda+alpha_i)=s_i(lambda)-alpha_i=s_i dot lambda.` [given, F1, F2, F3, F4, step 8.1, algebra]

10.1 The cyclic submodule it generates is a quotient of the corresponding Verma module. Its top line is nonzero and one-dimensional; the sum of all proper highest-weight submodules avoids that line, so its simple highest-weight quotient is $L(s_{i} \cdot  \lambda )$. A subquotient of a weak V/N-module is again such a module. This proves the assertion. [given, F1, F2, F3, F4, step 9.1, algebra]

11.1 Steps2.1–9.1 use no division by a shifted Cartan pairing. They therefore prove the claimed one-way descent also when $m=0$ or a negative integer. This does not claim an integral-wall inverse or a simple twisted-localization image. For example, for the simple finite sl2 Verma M(−2) with highest $v, e f^{r} v=−r(r+1)f^{r−1}v$. In its twisted localization quotient $u_{r}=f^{−r−1}v$ satisfies $h_{\mathrm{new}} u_{r}=−2r u_{r}, e_{\mathrm{new}} u_{r}=−u_{r−1}$ for $r\ge 1$ and $e_{\mathrm{new}} u_{0}=0$, while $f_{\mathrm{new}} u_{r}=r(r+1)u_{r+1}$. Hence $C u_{0}$ is a proper trivial submodule and the full image is not simple. The Statement's two-way quotient transport is the separately specified NONINTEGRAL positive-system gallery: each reverse step again has nonintegral pairing and satisfies steps2.1–9.1. Zero/negative integer pairings are retained in the full one-way domain, without assigning them a false inverse. [step 2.1, step 9.1, step 10.1, algebra]

11.2 **Congruences and positive integral chambers.** Write $r_{\alpha }=2/(\alpha ,\alpha )$, equal to1 on long roots and r on short roots. Put $u_i=\langle\lambda +\widehat\rho,\alpha_i^\vee\rangle$. If a root in every finite simple direction occurs in the integral root system, then $q u_{i}$ is an integer divisible by $gcd(q,r_{i})$: the existence equation is $u_i+n r_i p/q\in\mathbb Z$. Choose integers $a_{i}$ solving `r_i p a_i = q u_i modulo q.` [given, F1, F2, F3, F4, step 10.1, algebra]

12.1 The vacuum-period calculation does not require any admissibility numerator bound. For a finite root $α$ set $r_α=2/(α,α)$. The normalized loop bracket gives $(α+nδ)^\vee=α^\vee+n r_αK$, whence $\langle kΛ_0+\widehatρ,(α+nδ)^\vee\rangle=ρ(α^\vee)+n r_αp/q$. Since $ρ(α^\vee)∈Z$ and $\gcd(p,q)=1$, this is integral exactly when $n∈(q/\gcd(q,r_α))Z$. Thus every finite root direction occurs, the long-root period is q, and the short-root period is $q/\gcd(q,r)$. The arrangement depends on q and the root lengths, not on the positive numerator p. Its affine nature is already a hypothesis here. No positivity of its shifted real-root pairings, regular dominance, or vacuum admissibility is inferred. These congruences are solvable by exactly that gcd condition. Let eta be the coweight $\alpha _{i}(\eta )=a_{i}$. Since $\lambda (K)=k$, the dot translation by -eta changes the finite shifted weight by $-(k+h^{\vee})\eta =-(p/q)\eta $, so all its finite simple-coroot pairings become integral. Thus it transforms the integral root system into the vacuum integral root system, without a Kac-Wakimoto root-classification citation. [given, F1, F2, F3, F4, step 10.1, step 11.2, algebra]

13.1 The congruence-conditional construction of steps 11.2–12.1 needs no root-system isomorphism hypothesis. For the additional orbit case in the Statement, write $y_{0}=t_{\eta } w$ with w in the finite Weyl group. The vacuum integral roots have every finite root direction by F1; w permutes those directions and $t_{\eta }$ changes only the delta coefficient. Thus the integral roots of lambda also have every finite root direction, and step 11.2 gives the stated congruences. This uses the actual extended-Weyl action, not abstract isomorphism or a cardinality comparison of root sets modulo their null radicals. No regular-dominance or module-classification hypothesis is used. [given, F1, F2, F3, F4, step 11.2, step 12.1, algebra]

14.1 After the translation, choose an integral Weyl element so that the associated integral chamber is the one containing the original fundamental alcove. This choice is about the ROOT ARRANGEMENT, not about assuming lambda regular. It gives an extended Weyl element y with `Delta_int(lambda)=y Delta_int(vacuum), y Delta_int(vacuum)^+ = Delta_int(lambda)^+ subset original Delta^+,` [given, F1, F2, F3, F4, step 10.1, step 13.1, algebra]

15.1 and $\mu =y^{-1} \cdot  \lambda $ has integral finite Cartan weight. The equality of positive systems follows because both are the roots positive on that chosen chamber. The vacuum integral Weyl group preserves horizontal integrality, so this last chamber adjustment retains it. [given, F1, F2, F3, F4, step 10.1, step 14.1, algebra]

16.1 Both y and $y^{-1}$ cross only nonintegral original walls relative to their source root system. Indeed the displayed positive-system equality says that their inversion sets contain no source integral root. Thus every reduced original simple-root step has a nonintegral shifted pairing. The explicitly proved Ore localization descent transports highest modules in either direction and preserves the simple VOA ideal. No positive-integral root step or ordinary $g[t^{q}]$ integrability is being substituted here. [given, F1, F2, F3, F4, step 10.1, step 15.1, algebra]

17.1 **Length-zero extended elements act on actual quotient modules.** For completeness the extended group, rather than only the affine Weyl group, is handled by an actual field transformation. For a coweight H define the finite Laurent operator on every vacuum state `Delta_H(z)=z^(H0) exp(sum_(n>=1) (-1)^(n+1) H_n z^-n/n).` [given, F1, F2, F3, F4, step 10.1, step 16.1, algebra]

18.1 Positive Cartan modes lower conformal weight, so the exponential is finite on each state; H0 has integral root charges. The commutator formula for $H_{n}$ with Y(a,x), summed as a binomial series, gives `Delta_H(z) Y(a,x)=Y(Delta_H(z+x)a,x) Delta_H(z).` [given, F1, F2, F3, F4, step 10.1, step 16.1, step 17.1, algebra]

19.1 The $j=0$ sum is log(1+x/z); the $j\ge 1$ sum is $(-1)^{j+1}(z+x)^-j/j$. Positive Cartan modes commute with each other, so the exponential calculation has no unrecorded BCH commutator. Vacuum and translation identities follow from the same formula. Substitution into the module Jacobi identity therefore proves that $Y_{\mathrm{new}}(a,z)=Y(\Delta _{H}(z)a,z)$ is an actual weak module action. [given, F1, F2, F3, F4, step 10.1, step 16.1, step 18.1, algebra]

20.1 The vacuum ideal Nk is preserved by H0 and all $H_{n}$, and by finite Weyl automorphisms, so this action is an action of the SIMPLE quotient. For $\omega =t_{\eta } v$ stabilizing the original alcove, use $\Delta _{v^{-1} \eta }$ followed by the finite-state automorphism $v^{-1}$. Its current action is explicitly `x_alpha(n) ↦ x_(v^-1 alpha)(n+alpha(eta)), h(n) ↦ (v^-1 h)(n)+delta_(n,0) k(eta,h).` [given, F1, F2, F3, F4, step 10.1, step 16.1, step 19.1, algebra]

21.1 Since $\omega ^{-1}$ preserves positive affine roots, the old highest vector stays highest. Its new weight is omega(lambda). The element omega fixes rhohat: it permutes the simple affine coroots, has the same level hvee on rhohat, and preserves its norm, which fixes the remaining delta coordinate because $h^{\vee}\ne 0$. Hence $\omega (\lambda )=\omega  \cdot  \lambda $. Any extended Weyl element factors into such an alcove stabilizer and an original affine Weyl element by simple transitivity on alcoves. This completes the highest-module transport, including the d coordinate; arbitrary allowed derivation shifts can equivalently be carried by the commuting scalar d+L0. [given, F1, F2, F3, F4, step 10.1, step 16.1, step 20.1, algebra] ∎


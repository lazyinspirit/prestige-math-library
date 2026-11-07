---
id: thm-tame-inertia-structure-and-frobenius-action
kind: theorem
title: "The tame inertia quotient and its Frobenius action"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - lem-nonarchimedean-local-valuations-are-intrinsic
  - thm-local-absolute-galois-group-residue-exact-sequence
  - lem-tame-local-extension-becomes-kummer-after-unramified-base-change
  - def-local-inertia-subgroup-of-absolute-galois-group
  - def-local-wild-inertia-subgroup-of-absolute-galois-group
  - thm-local-inertia-fixed-field-is-maximal-unramified-extension
  - def-lower-ramification-groups-of-a-local-galois-extension
  - thm-local-inertia-fixed-field-is-maximal-unramified-extension
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
  - thm-algebraic-embedding-extension
  - def-separable-closure-in-an-algebraic-extension
  - thm-separability-is-transitive
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, Chapter IV, §8.2"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §5.3"
      url: "https://masaooi.github.io/LLC.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a nonarchimedean local field with
finite residue field $k=\mathbb F_q$ of characteristic $p$, separable closure
$K_s$, absolute inertia subgroup $I_K$, and wild inertia subgroup $P_K$.
Put $K^{\mathrm{nr}}=K_s^{I_K}$ and let $K^t$ be the compositum in $K_s$ of
all finite tamely ramified Galois extensions of $K$, where tamely ramified
means that the ramification index is prime to $p$. For each positive
integer $n$ prime to $p$, let
$\mu_n(\bar k)=\{z\in\bar k^\times:z^n=1\}$, with transition map
$\mu_m\to\mu_n$, $z\mapsto z^{m/n}$, when $n\mid m$. Then
$$P_K=\mathrm{Gal}(K_s/K^t),\qquad \mathrm{Gal}(K^t/K^{\mathrm{nr}}) \cong I_K/P_K \cong\varprojlim_{(n,p)=1}\mu_n(\bar k) \cong\prod_{r\ne p}\mathbb Z_r(1),$$
where $\mathbb Z_r(1):=\varprojlim_j\mu_{r^j}(\bar k)$. The equality
$P_K=\mathrm{Gal}(K_s/K^t)$ is canonical, and the other displayed maps
are noncanonical topological isomorphisms. If $\sigma$ is any
lift to $W_K$ of arithmetic Frobenius $x\mapsto x^q$, then its conjugation
action on $I_K/P_K$ is $\tau\mapsto\tau^q$.

## Statement references

[[def-local-inertia-subgroup-of-absolute-galois-group]]

[[def-local-wild-inertia-subgroup-of-absolute-galois-group]]

[[def-weil-group-of-a-local-field]]

[[lem-tame-local-extension-becomes-kummer-after-unramified-base-change]]

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV, §8.2, printed pp. 168–169](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §5.3, printed pp. 31–32](https://masaooi.github.io/LLC.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, $K$, $k=\mathbb F_q$, $p$, $K_s$, $I_K$,
and $P_K$ as in the Statement.

[A1] [[def-axiom-of-choice]] and
[[thm-choice-implies-dependent-implies-countable-choice]]: AC supplies
Countable Choice for the local degree and finite unramified-extension
suppliers below, and compactness of profinite inverse limits.

[F1] [[thm-local-absolute-galois-group-residue-exact-sequence]]:
$G_K/I_K\cong\mathrm{Gal}(\bar k/k)$, with arithmetic Frobenius generating
the quotient topologically.

[F2] [[def-local-wild-inertia-subgroup-of-absolute-galois-group]]: $P_K$ is
the largest closed normal pro-$p$ subgroup of $I_K$.

[F3] [[def-lower-ramification-groups-of-a-local-galois-extension]] defines $G_i$ by $v_E(\sigma x-x)\geq i+1$ for every $x\in\mathcal O_E$. [[lem-nonarchimedean-local-valuations-are-intrinsic]] proves intrinsic preservation of the given valuation by every field automorphism. Its CC clause identifies any given finite-extension valuation with the normalized extending valuation, so $v_E|_K=e(E/K)v_K$. The finite normality, termination and $p$-group assertions used below are proved locally, not assumed from the separate ramification-group provider.

[F4] [[thm-local-inertia-fixed-field-is-maximal-unramified-extension]]:
for finite Galois $E/K$, $E^{G_0}$ is its maximal unramified
subextension.

[F5] [[lem-tame-local-extension-becomes-kummer-after-unramified-base-change]]:
a finite totally ramified tame extension becomes $K'(\pi_K^{1/e})/K'$
after a finite unramified base change.

[F6] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]:
finite residue extensions are realized by finite unramified extensions.

[F7] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]:
under Countable Choice, each finite local degree is the product of its
ramification index and residue degree.

[F8] [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]:
under AC, inverse limits of finite discrete Galois groups are compact and
Hausdorff; this applies to $I_K$ and $\mathrm{Gal}(K^t/K^{\mathrm{nr}})$.

[F9] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]: each
simple residue root of $X^n-1$ lifts uniquely in a finite unramified
extension, so for $n$ prime to $p$ reduction identifies its $n$th roots of
unity with $\mu_n(\bar k)$.

[F10] [[thm-fundamental-theorem-of-finite-galois-theory]]: finite fixed fields correspond to finite subgroups, with the stated degree and restriction formulas.

[F11] [[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]: under AC every finite Galois automorphism extends to the separable closure.

[F12] [[thm-algebraic-embedding-extension]] and [[def-separable-closure-in-an-algebraic-extension]] supply extension of embeddings into an algebraically closed field under AC and the relative separable-closure convention. [[thm-separability-is-transitive]] gives transitivity of separability in algebraic towers. Surjectivity of the resulting separable-closure embeddings is verified below.

## Proof

1.1 Let $E/K$ be finite Galois. The CC consequence in [F3] applies under [A1], identifies its given valuation with the normalized extending one, and gives $v_E(\pi_K)=e(E/K)>0$. Equip all finite intermediate fields with the complete normalized valuations constructed by [F7]; the same comparison identifies their extensions and normalized restrictions in $E$. Thus the uses of [F4] and [F7] below concern compatible valuations, without an added premise. The inequalities in [F3] define subgroups: for $\sigma,\tau\in G_i$, write $\sigma\tau x-x=\sigma(\tau x-x)+(\sigma x-x)$ and use the isometry; inverses satisfy the same inequality. Conjugating by an isometry permutes $\mathcal O_E$, proving normality in $G$. For termination choose a finite $K$-basis and multiply each basis element by a sufficiently large power of $\pi_K$ to make it integral; the resulting $b_1,\ldots,b_d$ remain a basis. Every nonidentity $\sigma$ moves some $b_j$. The minimum of the finite values $v_E(\sigma b_j-b_j)$ over moved basis elements is a nonnegative integer $r_\sigma$. Their maximum $R$ over nonidentity automorphisms is finite; take $R=0$ if the group is trivial. For $i\geq R$, each nonidentity automorphism violates the defining inequality on an integral $b_j$. Thus $G_i=1$ eventually. Integral scaling is essential here. [A1, F3, F7, given, construct, algebra]

1.2 Absolute inertia projects onto each finite $G_0(E/K)$. Lift an element there to $g\in G_K$ by [F11]. Its residue action fixes $k_E$. The residue theorem [F1], now applied to the complete local field $E$, lifts the inverse residue action to an element of $G_E$; multiply $g$ by that element to obtain an element of $I_K$ with the prescribed finite restriction. Therefore an element of $K_s^{I_K}$ lies in $E^{G_0}$ for a finite Galois $E$ containing it. By [F4] this field is finite unramified. Conversely every finite unramified field is fixed by inertia. Thus $M:=K^{\mathrm{nr}}$ is exactly their union. [A1, F1, F4, F6, F11, construct]

2.1 Put $E_0=E^{G_0}$. By [F4] it has the same residue field as $E$ and $E/E_0$ is totally ramified of degree $e=|G_0|$. A uniformizer $\varpi$ of $E$ has $1,\varpi,\ldots,\varpi^{e-1}$ as an $E_0$-basis: their nonzero multiples have distinct valuations modulo $e$, so are linearly independent, and the degree is $e$. For an integral $x=\sum_{j<e}c_j\varpi^j$, the valuations $e v_{E_0}(c_j)+j$ are distinct modulo $e$. A negative coefficient valuation would give a unique negative minimum and make $x$ nonintegral. Hence $\mathcal O_E=\mathcal O_{E_0}[\varpi]$. [F3, F4, F7, step 1.1, algebra]

3.1 The map $\sigma\mapsto\overline{\sigma\varpi/\varpi}$ on $G_0$ is multiplicative because $G_0$ fixes the residue field. Its kernel is $G_1$: divisibility of $\sigma\varpi-\varpi$ by $\varpi^2$ implies the defining divisibility on every polynomial in $\varpi$ with coefficients in $\mathcal O_{E_0}$, by step 2.1, and the converse tests $x=\varpi$. For $i\geq1$, the map $\sigma\mapsto\overline{(\sigma\varpi-\varpi)/\varpi^{i+1}}$ on $G_i$ is additive. Indeed expand $\sigma\tau\varpi-\varpi=\sigma(\tau\varpi-\varpi)+(\sigma\varpi-\varpi)$; inertia acts trivially on residues and $\sigma\varpi/\varpi\equiv1\pmod{\varpi^i}$. Its kernel is $G_{i+1}$: for every $j\geq1$, the difference $(\sigma\varpi)^j-\varpi^j$ is $(\sigma\varpi-\varpi)$ times an integral polynomial, and step 2.1 exhausts all integral $x$. Thus $G_0/G_1$ embeds in $k_E^\times$, and $G_i/G_{i+1}$ embeds in $(k_E,+)$ for $i\geq1$. Termination in step 1.1 makes $G_1$ a $p$-group by multiplying these finite $p$-power quotient orders; $G_0/G_1$ has order prime to $p$. [F3, F4, step 1.1, step 2.1, algebra, construct]

4.1 Restriction on finite inertia groups is surjective along finite Galois subextensions. To see this, lift an inertia automorphism of an intermediate Galois field to the full finite Galois group by [F10]. Its residue action fixes the intermediate residue field. Reduction for the relative extension is surjective by [F4], so multiplying by an automorphism over the intermediate field cancels that residue action without changing the restriction. Consequently $E^{G_1}/K$ is tame: $G_1$ is normal by step 1.1 and its inertia is $G_0/G_1$, of prime-to-$p$ order. Conversely for any tame Galois intermediate $L/K$, the image of the $p$-group $G_1$ lies in its prime-to-$p$ inertia and is trivial. Thus $L\subseteq E^{G_1}$, which is the maximal tame Galois intermediate field. A finite compositum of tame Galois extensions is tame, because its inertia embeds in the product of their prime-to-$p$ inertia groups. Hence $K^t$ is the directed union of these maximal finite tame fields. [F4, F10, step 1.1, step 3.1, algebra]

5.1 Let $F=K^t$ and $W=\operatorname{Gal}(K_s/F)$. Step 4.1 puts $E^{G_1}\subset F$ for every finite Galois $E/K$, so every finite coordinate image of $W$ lies in the $p$-group $G_1$. Any finite continuous quotient of $W$ factors through such an image: its open kernel contains an intersection of $W$ with an ambient finite-coordinate kernel. Hence $W$ is pro-$p$. It is closed and normal in $G_K$, since $F/K$ is a directed union of Galois fields, and $W\subseteq I_K$ because $M\subseteq F$. Every closed normal pro-$p$ subgroup of $I_K$ has trivial image in each finite tame inertia group, so fixes $F$. By the maximality in [F2], this proves $P_K=W$. [F2, F8, step 3.1, step 4.1, step 1.2, algebra]

6.1 Restriction $I_K\to\operatorname{Gal}(F/M)$ has kernel $P_K$ and is onto. For $\tau\in\operatorname{Gal}(F/M)$, [F12] extends $\tau$ to an embedding of $K_s$ into an algebraic closure. It fixes $K$, so every image element is separable over $K$ and lies in $K_s$. The field $K_s$ is separably closed: an element separable algebraic over $K_s$ is separable over $K$ by transitivity, and hence already lies in $K_s$. Its isomorphic image $S$ is therefore separably closed. Every element of $K_s$ is separable algebraic over $S$: its minimal polynomial over $S$ divides a separable polynomial over $K\subset S$. Hence it already belongs to $S$, proving surjectivity of the embedding. Since it fixes $M$, whose residue field is $\bar k$ by [F6] and step 1.2, it has trivial residue action and belongs to $I_K$ by [F1]. This proves restriction surjectivity. It is continuous on finite coordinates; its induced bijection $I_K/P_K\to\operatorname{Gal}(F/M)$ is a homeomorphism because the source is compact and the target is Hausdorff by [F8]. The same embedding argument shows that no element of $K_s\setminus F$ is fixed by every $F$-automorphism: its separable minimal polynomial over $F$ has another root, whose embedding extends to an automorphism of $K_s$. Thus $F=K_s^{P_K}$. This uses separable closedness, not algebraic closedness in characteristic $p$. [A1, F1, F2, F6, F8, F12, step 1.2, step 5.1, construct, algebra]

7.1 For a finite tame Galois $E/K$, its maximal unramified subfield $E_0$ has the same residue field as $E$ by [F4]. The extension $E/E_0$ is totally ramified with degree $n=e(E/K)$ by [F7]. Apply [F5] over $E_0$, with the uniformizer $\pi_K$ (also a uniformizer in $E_0$), to get an unramified $K'/E_0$ with $EK'=K'(\pi_K^{1/n})$ and $\mu_n\subset K'$. This $K'/K$ is unramified, so lies in $M$ by step 1.2. Thus $EM\subseteq M(\pi_K^{1/n})$. Conversely $X^n-\pi_K$ has a root $\alpha$ in $K_s$ for every $n$ prime to $p$. Its value is $1/n$ on the base normalization, so $[K(\alpha):K]\geq n$ by [F7] and at most $n$ by its polynomial. Hence it is totally ramified of degree $n$; [F5] gives an unramified $K'/K$ containing $\mu_n$ such that $K'(\alpha)/K'$ is cyclic of degree $n$. It is Galois over $K$ as well, since $K'/K$ is Galois and every conjugate of $\alpha$ is $\zeta\alpha$ with $\zeta\in\mu_n\subset K'$. Its ramification index over $K$ is $n$, so it is tame and contained in $F$. Consequently the fields $M(\pi_K^{1/n})$ are cofinal in $F/M$. [A1, F4, F5, F6, F7, F9, step 4.1, step 1.2, step 6.1, construct, algebra]

8.1 Choose a divisibility-cofinal chain $n_j$, where $n_j$ is $j!$ with all factors of $p$ removed. Starting with $\alpha_1=\pi_K$, recursively choose a root of $X^{n_{j+1}/n_j}-\alpha_{n_j}$ in $K_s$ as $\alpha_{n_{j+1}}$. Such roots exist and are separable, since $p\nmid n_{j+1}/n_j$. DC supplied by AC in [A1] gives this chain. For any $n$ prime to $p$, choose $j$ with $n\mid n_j$ and define $\alpha_n=\alpha_{n_j}^{n_j/n}$; later choices give the same value. Then $\alpha_n^n=\pi_K$ and $\alpha_m^{m/n}=\alpha_n$ whenever $n\mid m$. Every $\mu_n$ lies in $M$ by finite residue extension and unique Hensel lifting [F6, F9]. The value group of $M$ remains $\mathbb Z$, since every element lies in a finite unramified subfield. The powers $1,\alpha_n,\ldots,\alpha_n^{n-1}$ have distinct valuations modulo $\mathbb Z$, so are linearly independent over $M$. Thus $[M(\alpha_n):M]=n$; all roots are $\zeta\alpha_n$, so its Galois group is $\mu_n(\bar k)$ by reduction [F9]. Under these compatible roots, restriction from level $m$ to $n\mid m$ sends $\zeta$ to $\zeta^{m/n}$. Taking compatible automorphisms on the cofinal fields in step 7.1 gives the asserted topological isomorphism with $\varprojlim_{(n,p)=1}\mu_n(\bar k)$. The inverse-limit topology agrees with finite restriction neighborhoods. [A1, F5, F6, F8, F9, step 1.2, step 7.1, construct, algebra]

9.1 Finite primary decomposition gives $\mu_n=\prod_{r\mid n}\mu_{r^{v_r(n)}}$: the projection and reconstruction maps are powers with exponents supplied by the integer Bezout identities for the pairwise coprime prime powers. Restriction for divisibility commutes with these primary maps. A compatible family for all $n$ is therefore equivalent to independent compatible families for every $r\ne p$, proving $\varprojlim_{(n,p)=1}\mu_n(\bar k)\cong\prod_{r\ne p}\mathbb Z_r(1)$. This group is abelian. [step 8.1, algebra]

10.1 Fix $n$ prime to $p$ and $\beta=\alpha_n$. Inertia fixes $\mu_n\subset M$, while an arithmetic Frobenius lift $\sigma$ sends each $\zeta\in\mu_n$ to $\zeta^q$ by its residue action and unique lifting in [F9]. Write $\sigma\beta=\xi\beta$ and $\sigma^{-1}\beta=\eta\beta$, with $\xi,\eta\in\mu_n$; then $\eta^q\xi=1$. For $\tau_\zeta(\beta)=\zeta\beta$ one obtains $\sigma\tau_\zeta\sigma^{-1}(\beta)=\eta^q\zeta^q\xi\beta=\zeta^q\beta=\tau_\zeta^q(\beta)$. This holds at every finite Kummer level and hence in the inverse limit. Different choices of Frobenius lift differ by inertia and give the same conjugation on the abelian tame quotient. This proves the full Statement. [F1, F9, step 8.1, step 9.1, algebra] ∎

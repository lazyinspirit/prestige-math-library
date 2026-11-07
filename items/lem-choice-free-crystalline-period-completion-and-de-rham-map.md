---
id: lem-choice-free-crystalline-period-completion-and-de-rham-map
kind: lemma
title: Crystalline completion, Frobenius and the de Rham map without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
  - lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-witt-frobenius-and-verschiebung-coordinate-identities
  - lem-perfect-base-witt-frobenius-and-p-adic-completeness
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Fontaine and Ouyang, Theory of p-adic Galois Representations
      url: https://www.imo.universite-paris-saclay.fr/~fontaine/galoisrep.pdf
      locator: Section6.1.1, Definition6.1, Remark6.2, Exercise6.3, Proposition6.4, Proposition6.6 and Frobenius construction; completed embedding not imported
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, let $C=\widehat F$ be its ordinary completion, and suppose a compatible primitive system $(\zeta_{p^n})_{n\ge0}$ is GIVEN. Set $A=\mathcal O_C$, $B=A^\flat$, $W=W_p(B)$ and $Q=W[1/p]$. Write $\epsilon=(\zeta_{p^n}\bmod p)_{n\ge0}$, $u=\varphi^{-1}\epsilon$, $\xi=\sum_{j=0}^{p-1}[u]^j$, and $\mu=[\epsilon]-1$. Define
$$D=W[\xi^m/m!:m\ge0]\subset Q,\qquad A_{\mathrm{cris}}=\varprojlim_r D/p^rD.$$
Then $D\to A_{\mathrm{cris}}$ is injective, multiplication by $p$ in $A_{\mathrm{cris}}$ is injective, and the ring is canonically separated and complete for powers of $p$, with $A_{\mathrm{cris}}/p^rA_{\mathrm{cris}}\cong D/p^rD$. There are canonical compatible homomorphisms
$$\Theta:A_{\mathrm{cris}}\twoheadrightarrow A,\qquad \Psi:A_{\mathrm{cris}}\longrightarrow B_{\mathrm{dR}}^+$$
extending the Fontaine map and the inclusion of $D$ into $Q\subset B_{\mathrm{dR}}^+$, respectively. Here $\Theta$ is the residue of $\Psi$. Its kernel is a divided-power ideal: for $a\in\ker\Theta$ and $m\ge1$, the element $a^m/m!$ of $A_{\mathrm{cris}}[1/p]$ belongs to $\ker\Theta$.

Witt Frobenius extends to $A_{\mathrm{cris}}$ and $B_{\mathrm{cris}}^+=A_{\mathrm{cris}}[1/p]$. The series $t_{\mathrm{cris}}=\sum_{m\ge1}(-1)^{m+1}\mu^m/m$ converges $p$-adically in $A_{\mathrm{cris}}$, satisfies $\varphi(t_{\mathrm{cris}})=p t_{\mathrm{cris}}$, and maps under $\Psi$ to the de Rham logarithmic uniformizer. Thus it is nonzero. Both $\Psi$ and Frobenius extend to the localization $B_{\mathrm{cris}}=A_{\mathrm{cris}}[1/p,1/t_{\mathrm{cris}}]$, with respective targets $B_{\mathrm{dR}}$ and $B_{\mathrm{cris}}$. No Choice axiom is used. Injectivity of $\Psi$ on the completed ring or its localizations is not asserted.

## Facts & Assumptions

**Given:** The actual valued closure and primitive system. All completed rings in the Statement are the displayed inverse limits, not assumed coefficient-series presentations.

[F1] The ordinary completion is a complete valued field, and $A$ is canonically $p$-adically complete. [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

[F2] The canonical map $\theta:W\to A$ is surjective without Choice at these inputs. [[lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion]]

[F3] The principal kernel is $\xi W$, the element $\xi$ is regular, and $\overline\xi=\tau$ is regular in the valuation domain $B=W/pW$. The algebraic divided-power subring is precisely $D$. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F4] The ring $R=B_{\mathrm{dR}}^+=\varprojlim_n Q/\xi^nQ$ is a complete DVR with residue $C$, contains $Q$ injectively, and its logarithm $t_{\mathrm{dR}}=\log(1+\mu)$ is a uniformizer. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F5] Witt Frobenius is a unital ring endomorphism and reduces modulo $p$ to Frobenius on $B$; on Teichmüller representatives it sends $[x]$ to $[x^p]$. [[lem-witt-frobenius-and-verschiebung-coordinate-identities]]

[F6] Multiplication by $p$ is regular in $W$, reduction modulo $p$ identifies its residue ring with $B$, and $W$ is canonically $p$-adically complete. [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

## Proof

1.1 Put $T_n=W/\xi^nW$ for $n\ge1$. Multiplication by $p$ on $T_n$ is regular: if $pw=\xi^ny$, reduction modulo $p$ and regularity of $\tau$ give $y=py_1$, whence cancellation gives $w=\xi^ny_1$. More generally multiplication by $\xi$ preserves $p$-adic order in $W$: reduce modulo $p$, use regularity of $\tau$, and repeat the unique division by $p$. Thus for all $r,n\ge1$, multiplication by $\xi$ induces an injection $W/(p^r,\xi^{n-1})\to W/(p^r,\xi^n)$, with image the kernel of the map to $A/p^rA$. For the kernel assertion, a representative $w$ with $\theta(w)\in p^rA$ can be corrected by one element $p^rz\in W$ with the same image under $\theta$, using [F2], and then divided by $\xi$. We interpret $W/(p^r,\xi^0)$ as zero when $n=1$. [F2, F3, F6, construct, algebra]

2.1 Each $T_n$ is canonically $p$-adically complete and separated, by finite induction on $n$. The base $T_1=A$ follows from [F1] and [F3]. For a compatible family $z_r\in T_n/p^rT_n$, its residues in $A/p^rA$ have a unique limit $a\in A$. Choose one $w\in W$ with $\theta(w)=a$. step 1.1 uniquely divides $z_r-w$ by $\xi$ in $T_{n-1}/p^rT_{n-1}$; these quotients are compatible and have a unique limit by induction. Multiplying that limit by $\xi$ and adding $w$ supplies the desired element of $T_n$. If an element of $T_n$ is zero modulo every $p^r$, its image in $A$ is zero, so it equals $\xi y$; step 1.1 then puts $y$ in every $p^rT_{n-1}$ and induction gives $y=0$. This proves injectivity as well. Only one lift is used for each fixed finite induction step, with no sequence of lifts as $r$ varies. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Write $\gamma_m=\xi^m/m!$. The identity $\gamma_i\gamma_j=\binom{i+j}{i}\gamma_{i+j}$ shows that $D$ is the set of finite sums $\sum_m w_m\gamma_m$ with $w_m\in W$. Fix $n$. Under the map $f_n:D\to Q/\xi^nQ=T_n[1/p]$, only terms $m<n$ survive. With $h_n=v_p((n-1)!)$, all their denominators divide $p^{h_n}$ up to units of $W$. Hence $p^{h_n}f_n(D)\subset T_n$, and $p^{h_n}f_n(p^rD)\subset p^rT_n$. For an actual element of $A_{\mathrm{cris}}$, its compatible residue classes therefore give a compatible family in $T_n/p^rT_n$, whose unique limit exists by step 2.1. Dividing that limit by $p^{h_n}$ defines $\Psi_n:A_{\mathrm{cris}}\to T_n[1/p]$. These maps extend $f_n$. They preserve addition, multiplication and unity: the corresponding identities hold on every residue class, and the product identity may be checked after multiplying by $p^{2h_n}$ and reducing modulo arbitrarily high powers of $p$. No representatives indexed by $r$ are selected. [F3, step 1.1, step 2.1, construct, algebra]

4.1 The maps $\Psi_n$ commute with reduction in $n$. Indeed the two compared expressions extend the same map on $D$, and after clearing the fixed finite denominators, their difference is zero modulo every $p^r$ in the target $T_n$, so step 2.1 gives equality. They define a homomorphism $\Psi:A_{\mathrm{cris}}\to R$. The case $n=1$ takes values in $A=T_1$, giving $\Theta$; it is surjective because its restriction to $W$ is [F2]. For $d\in D$, the composite $D\to A_{\mathrm{cris}}\to R$ is its original inclusion into $Q\subset R$. By [F4] this is injective, proving $D\to A_{\mathrm{cris}}$ injective. Since $D\subset Q$ has regular $p$, the inverse-limit division argument also proves $A_{\mathrm{cris}}/p^rA_{\mathrm{cris}}=D/p^rD$: if a compatible family is zero at level $r$, uniquely divide its level $r+s$ components by $p^r$ modulo $p^sD$. These quotients give its division in the limit. If $px=0$, division at level $s+1$ gives $x_s=0$ for every $s$. Thus $p$ remains regular, and the quotient identifications prove canonical $p$-adic completeness and separatedness. [F2, F4, step 2.1, step 3.1, construct, algebra]

5.1 The map $\theta$ on $D$ is evaluation in $Q/\xi Q=C$ and takes values in $A$. If $d\in\ker(\theta|_D)$, a finite expression $d=\sum_m w_m\gamma_m$ has $\theta(w_0)=0$. By [F3], absorb $w_0=\xi z$ into the coefficient of $\gamma_1$. Thus $d$ is a finite sum of terms $w_m\gamma_m$ with $m\ge1$. For each such term and each $i\ge0$, one has $(w_m\gamma_m)^i/i!=w_m^i\big((mi)!/((m!)^i i!)\big)\gamma_{mi}\in D$. The coefficient is an integer: it counts the partitions of $mi$ labeled objects into $i$ unordered blocks of size $m$ (including $i=0$). Expanding a divided power of a finite sum by the multinomial formula now gives $d^k/k!\in D$, with image zero under $\theta$ for $k\ge1$. [F3, step 3.1, step 4.1, algebra]

5.2 Frobenius extends from $W$ to $Q$, since it fixes $p$. By [F5], $\varphi(\xi)-\xi^p\in pW$, so $\varphi(\xi)=p z$ for $z=\eta+(p-1)!\gamma_p\in D$ and some $\eta\in W$. For every $m\ge1$, $\varphi(\gamma_m)=p^m z^m/m!\in D$: the rational scalar $p^m/m!$ has nonnegative $p$-valuation. Indeed $v_p(m!)=\sum_{j\ge1}\lfloor m/p^j\rfloor\le m-1$, as follows by counting the multiples of each power of $p$ (or finite induction on $m$). Thus $\varphi(D)\subset D$. This unital map fixes $p$ and induces compatible endomorphisms on all $D/p^rD$, hence extends to $A_{\mathrm{cris}}$ and its localization at $p$. [F5, step 3.1, step 4.1, algebra, construct]

5.3 Put $v=[u]-1\in W$. Multiplicativity of Teichmüller representatives gives $\mu=\xi v$, as in [F4]. Then $\mu^m/m=(m-1)!v^m\gamma_m\in D$, whose $p$-adic order is at least $v_p((m-1)!)\to\infty$. Its alternating sum therefore defines $t_{\mathrm{cris}}\in A_{\mathrm{cris}}$ by eventual finite sums modulo each $p^r$. For any fixed $n$, the maps in step 3.1 are continuous for the $p$-adic module filtration on $p^{-h_n}T_n$. Every term with $m\ge n$ maps to zero there. Hence $\Psi_n(t_{\mathrm{cris}})$ is exactly the finite truncation of the de Rham logarithm modulo $\xi^n$. By [F4], $\Psi(t_{\mathrm{cris}})=t_{\mathrm{dR}}\ne0$. This comparison does not confuse the $p$-adic completion with the discrete valuation topology of $R$. [F4, step 3.1, step 4.1, construct, algebra]

6.1 Fix $a\in\ker\Theta$ and a positive integer $k$, and put $h=v_p(k!)$. For any one $r$, choose one representative $d\in D$ of $a$ modulo $p^rA_{\mathrm{cris}}$, using step 4.1. Its image $\theta(d)$ lies in $p^rA$. By [F2], subtract $p^rw\in W$ with the same image. The resulting $d'\in\ker(\theta|_D)$ still agrees with $a$ modulo $p^r$. In $A_{\mathrm{cris}}[1/p]$, the polynomial factorization of $a^k-(d')^k$ shows their quotients by $k!$ differ by an element of $p^{r-h}A_{\mathrm{cris}}$. By step 5.1 the second quotient belongs to $\ker\Theta$. Therefore for each precision $s$, any such construction with $r\ge s+h$ determines the same class modulo $p^s$. The classes are compatible and have a unique limit in $A_{\mathrm{cris}}$ by step 4.1. In its localization this limit is $a^k/k!$: multiply by $k!$ and use separatedness and regularity of $p$. Its image under $\Theta$ is zero. This proves the divided-power assertion without choosing approximants for a countable family. [F2, step 4.1, step 5.1, construct, algebra]

6.2 In the formal power-series ring over $\mathbb Q$, the identity $\log((1+X)^p)=p\log(1+X)$ follows by formal differentiation and equal zero constant terms. For completeness, it can be substituted here without an exchange of uncontrolled limits. Let $L_N(X)=\sum_{m=1}^N(-1)^{m+1}X^m/m$. The polynomial $L_N((1+X)^p-1)-pL_N(X)$ has no terms of degrees at most $N$, and all its coefficients have $p$-denominator valuation at most $\lfloor\log_pN\rfloor$. At $X=\mu$, every monomial $\mu^j=j!v^j\gamma_j$ with $j>N$ consequently has $p$-adic order at least $v_p((N+1)!)-\lfloor\log_pN\rfloor$, which tends to infinity. By [F5], $\varphi(\mu)=(1+\mu)^p-1$; step 5.2 makes $\varphi$ $p$-adically continuous. Taking limits of these finite polynomial identities gives $\varphi(t_{\mathrm{cris}})=p t_{\mathrm{cris}}$. [F5, step 5.2, step 5.3, algebra]

7.1 Since $p$ maps to a unit in $R$ and $t_{\mathrm{cris}}$ maps to its uniformizer, the universal fraction construction extends $\Psi$ to $A_{\mathrm{cris}}[1/p,1/t_{\mathrm{cris}}]\to R[1/t_{\mathrm{dR}}]$. The relation in step 6.2 likewise extends Frobenius to this localization by $t_{\mathrm{cris}}^{-1}\mapsto(p t_{\mathrm{cris}})^{-1}$. All constructions are identities in specified finite quotients followed by their inverse limits; no countable system of representatives or coefficient-field section was used. The injection in step 4.1 concerns $D$, not all of its completion: neither that argument nor continuity proves the completed map injective. [F4, step 4.1, step 5.2, step 5.3, step 6.2, algebra] ∎

## Source notes

The full relevant Fontaine–Ouyang Section6.1.1 passage was read, through the Frobenius construction on PDF pages119–122: Definition6.1, Remark6.2, Exercise6.3, Proposition6.4 and the logarithm argument of Proposition6.6. Our finite-quotient completeness argument constructs the map to the de Rham completion and proves Exercise6.3 directly. The source's assertion that the completed crystalline ring embeds by continuity is not adopted as a proof of injectivity. No restricted divided-power-series representation with arbitrarily selected coefficients is assumed.

This is a prerequisite to the full original period-ring construction, not a replacement of that target. Completed injectivity, semistable comparison embeddings, invariant fields, natural-topology Galois continuity, and the generic BMS assertions remain separate proof obligations. The given valued closure and compatible primitive system are unchanged input data; the proof does not construct them or assert an unqualified global choice of such data.

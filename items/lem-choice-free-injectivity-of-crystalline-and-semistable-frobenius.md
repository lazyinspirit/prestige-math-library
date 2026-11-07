---
id: lem-choice-free-injectivity-of-crystalline-and-semistable-frobenius
kind: lemma
title: Injectivity of crystalline and semistable Frobenius without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - lem-choice-free-completed-crystalline-embedding-in-the-de-rham-ring
  - lem-choice-free-crystalline-period-completion-and-de-rham-map
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
  - lem-perfect-base-witt-frobenius-and-p-adic-completeness
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Brinon and Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: Theorem9.1.8 states the claim but omits its proof; proof supplied here by a finite-truncation embedding for xi^p
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$ its ordinary completion, and suppose a compatible primitive system $(\zeta_{p^n})_{n\ge0}$ is GIVEN. On the constructed rings $A_{\mathrm{cris}}$, $B_{\mathrm{cris}}^+$, $B_{\mathrm{cris}}$, $B_{\mathrm{st}}^+$ and $B_{\mathrm{st}}$, Frobenius is injective, without any Choice axiom. This includes the abstract semistable construction and does not presume a semistable embedding into the de Rham ring.

## Facts & Assumptions

**Given:** The actual valued closure, ordinary completion and compatible primitive system. Write $A=\mathcal O_C$, $B=A^\flat$, $W=W_p(B)$, $Q=W[1/p]$, and use the cyclotomic generator $\xi$ of the Fontaine kernel. For $a\in W$ let $D(a)=W[a^m/m!:m\ge0]\subset Q$; thus $D(\xi)$ is the algebraic crystalline ring.

[F1] The crystalline completion embeds in the de Rham DVR $R=B_{\mathrm{dR}}^+=\varprojlim_nQ/\xi^nQ$, and the crystalline localizations are embedded domains. [[lem-choice-free-completed-crystalline-embedding-in-the-de-rham-ring]]

[F2] The $p$-adic completion of $D(\xi)$ is the constructed $A_{\mathrm{cris}}$, its finite $p$-quotients agree with those of $D(\xi)$, and its Frobenius extends Witt Frobenius with $\varphi(t)=pt$. [[lem-choice-free-crystalline-period-completion-and-de-rham-map]]

[F3] The principal kernel is $\xi W$, $\xi$ is regular, and $\tau=\bar\xi$ is regular in the valuation domain $B=W/pW$. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F4] Fontaine's map $W\to A$ is surjective. [[lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion]]

[F5] The ring $A$ is canonically $p$-adically complete. [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

[F6] The ring $W$ is canonically $p$-adically complete with regular $p$ and residue $B$; its Frobenius is an automorphism because $B$ is perfect. [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[F7] The abstract rings $B_{\mathrm{st}}^+$ and $B_{\mathrm{st}}$ are polynomial rings over their crystalline coefficient rings in a coordinate $X$, and their Frobenius acts by $X\mapsto pX$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

## Proof

1.1 First $W/\xi^sW$ is $p$-torsionfree and canonically $p$-adically complete for every fixed positive integer $s$. Regularity of $\tau$ shows that multiplication by $\xi$ preserves $p$-adic order in $W$: reduce modulo $p$ and repeat unique division by $p$. It follows that $W/\xi^sW$ has regular $p$, and that the sequence $0\to W/(p^r,\xi^{s-1})\xrightarrow{\xi}W/(p^r,\xi^s)\xrightarrow{\theta}A/p^rA\to0$ is exact, interpreting the left term as zero if $s=1$. For the last kernel assertion use [F4] to subtract one $p^rW$-lift of the theta-image before dividing by $\xi$. Finite induction on $s$ proves completeness: for a compatible residue family its theta-image has a unique limit $a\in A$ by [F5]; choose one lift of this one $a$ in $W$, subtract it and divide the family uniquely by $\xi$. Apply induction to those compatible quotients. The identical kernel argument proves separatedness. In particular $W/zW$ is $p$-complete with regular $p$ for $z=\xi^p$. Also $\bar z=\tau^p$ is regular, and $W\cap z^mQ=z^mW$: clear a power of $p$ and cancel it modulo $z^m$ using regularity of $p$ on $W/z^mW$. [F3, F4, F5, F6, construct, algebra]

1.2 For any $a,w\in W$, the finite identity $(a+pw)^m/m!=\sum_{i+j=m}(a^i/i!)(p^jw^j/j!)$ proves $D(a+pw)=D(a)$. The scalars $p^j/j!$ belong to $W$ because $v_p(j!)\le j$ and the denominators prime to $p$ are units. The reverse inclusion follows by subtracting $pw$ and using the same formula. Witt Frobenius reduces to the characteristic-$p$ power map, so $\varphi(\xi)=\xi^p+p\eta$ for some $\eta\in W$. Since $\varphi(W)=W$ by [F6], it follows that $\varphi(D(\xi))=D(\varphi(\xi))=D(z)$. Its restriction is a ring isomorphism, being the restriction of the automorphism of $Q$. It fixes $p$, hence induces an isomorphism $\widehat\varphi:A_{\mathrm{cris}}\to\widehat{D(z)}$ on their specified inverse limits. [F2, F6, algebra]

2.1 We prove directly that the $p$-completion of $D(z)$ embeds in $R$. Form the free divided-power polynomial ring $P=\bigoplus_{m\ge0}W g_m$, where $g_m=X^m/m!$ and $g_i g_j=\binom{i+j}{i}g_{i+j}$. Evaluation at $X=z$ gives $D(z)=P/(X-z)P$. Indeed, if a finite polynomial $f$ evaluates to zero, its constant coefficient lies in $W\cap zQ=zW$. Subtract its unique $(X-z)$-multiple to remove that coefficient and change only the next coefficient. After removing all coefficients below $m$, division of $f(z)=0$ by $z^m$ again shows that its next coefficient belongs to $W\cap zQ$. This finite elimination ends with a single coefficient forced to vanish in $Q$, which is a domain by [F1]. The same elimination proves $J_n:=D(z)\cap z^nQ$ is the $W$-span of $z^m/m!$ with $m\ge n$. The quotient $H_n=D(z)/J_n$ embeds into $Q/z^nQ$, so has regular $p$ and $J_n\cap p^rD(z)=p^rJ_n$. Its successive additive kernel $J_{n-1}/J_n$ is canonically $W/zW$: send the class of $w$ to $wz^{n-1}/(n-1)!$. Independence and injectivity follow respectively by multiplying one more $z$ and by $W\cap zQ=zW$. [F1, step 1.1, construct, algebra]

3.1 Every $H_n$ is canonically $p$-complete. The base is $H_1=W/zW$ in step 1.1. The exact sequence $0\to W/zW\to H_n\to H_{n-1}\to0$ stays exact on the left modulo every $p^r$, since $p$ is regular on $H_{n-1}$. For a compatible family, lift its one limiting value in $H_{n-1}$ to one element of $H_n$, subtract it, then take the unique limit of the resulting kernel family in $W/zW$. This finite induction supplies the whole compatible family without a sequence of chosen lifts; it also proves separatedness. The maps $D(z)\to H_n$ thus extend to $\widehat{D(z)}\to H_n$. Modulo $z^n$, the image of $H_n$ lies in $p^{-v_p((n-1)!)}W/z^nW$, by its first $n$ divided-power generators. These extended maps, followed by the inclusions into $Q/z^nQ$, are compatible: equality is checked on $D(z)$ and then in the separated $p$-complete finite modules after clearing the fixed denominators. They therefore define a map $j_z:\widehat{D(z)}\to\varprojlim_nQ/z^nQ=R$, because $z=\xi^p$ gives a cofinal system of the same ideal powers. Regularity of $p$ on $D(z)\subset Q$ also gives $\widehat{D(z)}/p^r=D(z)/p^rD(z)$ by unique division of compatible residue components. [F1, step 1.1, step 2.1, construct, algebra]

4.1 The map $j_z$ is injective. Reduce the presentation of step 2.1 modulo $p$. The variables $Y_j=g_{p^j}$ satisfy $Y_j^p=0$ modulo $p$: the multiplication coefficient $(p^{j+1})!/(p^j!)^p$ has $p$-valuation one. Their digit monomials are a basis, since for $m=\sum a_jp^j$, $0\le a_j<p$, the coefficient $m!/\prod_j(p^j!)^{a_j}$ has valuation zero by the finite factorial count. Eliminating $Y_0-\bar z$ gives $D(z)/pD(z)=(B/(\bar z^p))[Y_1,Y_2,\ldots]/(Y_1^p,Y_2^p,\ldots)$ with unique finite monomial expressions. The image of $J_{pN}$ is supported in monomials of weight at least $N$, for weight $\sum_{j\ge1}a_jp^{j-1}$: a divided power of index $pm+r$ maps to a unit scalar times $\bar z^r$ times the monomial of weight $m$. Hence $\bigcap_n(J_n+pD(z))=pD(z)$. Using $J_n\cap pD(z)=pJ_n$ from step 2.1 and cancelling $p$ inductively gives $\bigcap_n(J_n+p^rD(z))=p^rD(z)$ for every $r$. If $j_z(x)=0$, its image in every $H_n$ is zero. For one fixed $r$, represent its class by $d\in D(z)$; then $d\in J_n+p^rD(z)$ for all $n$, so its class is zero. Separatedness of the defining inverse limit yields $x=0$. [F3, F6, step 2.1, step 3.1, construct, algebra]

5.1 The inclusion $D(z)\subset D(\xi)$ induces a map $i:\widehat{D(z)}\to A_{\mathrm{cris}}$. Composing with the crystalline embedding in [F1] gives $j_z$: on each quotient modulo $z^n$, both maps extend inclusion from $D(z)$ and agree by the fixed denominator bound and $p$-separatedness used in step 3.1. Therefore $i$ is injective by step 4.1. The composite $i\widehat\varphi$ is exactly the Frobenius on $A_{\mathrm{cris}}$ in [F2], as both act by Witt Frobenius on the algebraic ring and on every compatible $p$-residue class. Thus it is injective. Localizing preserves this injection on the embedded domains, since $\varphi(p)=p$ and $\varphi(t)=pt$ are nonzero. This proves injectivity on both crystalline localizations. In the polynomial presentations of [F7], Frobenius sends $\sum a_mX^m$ to $\sum\varphi(a_m)p^mX^m$; all coefficients can vanish only when all original coefficients vanish. This proves injectivity on $B_{\mathrm{st}}^+$ and $B_{\mathrm{st}}$ as well, including $p=2$. No semistable comparison or infinite coefficient selection was used. [F1, F2, F7, step 3.1, step 4.1, step 1.2, algebra] ∎

## Source notes

The full Brinon–Conrad Theorem9.1.8 passage was read. It explicitly omits this proof, and the preceding Fontaine citation is not treated as supplying it. The proof here repeats the finite-truncation and finite monomial argument for the different generator $z=\xi^p$, whose base quotient $W/zW$ is not a field; the exact finite induction establishes precisely the needed completeness without making that false field assumption. Finite divided-power translation identifies this completion with the Frobenius image.

The original crystalline injection and abstract semistable proofs remain unchanged. This helper closes their explicitly excluded Frobenius-injectivity prerequisite. It does not establish the ramified coefficient-extension or semistable-to-de-Rham embedding, period invariants, or generic BMS comparison.

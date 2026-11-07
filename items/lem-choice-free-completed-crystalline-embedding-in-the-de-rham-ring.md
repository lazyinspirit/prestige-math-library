---
id: lem-choice-free-completed-crystalline-embedding-in-the-de-rham-ring
kind: lemma
title: The completed crystalline ring embeds in the de Rham ring without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion
  - lem-choice-free-crystalline-period-completion-and-de-rham-map
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-perfect-base-witt-frobenius-and-p-adic-completeness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Fontaine, Le corps des periodes p-adiques
      url: https://www.numdam.org/item/AST_1994__223__59_0.pdf
      locator: Section4.1.1–4.1.3; finite truncation and modulo-p separation reconstruction replaces the source's coefficient-selection assertion
    - title: Brinon and Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: Section9.1, Proposition9.1.1 and Exercise9.4.1; the omitted completed injectivity is proved here
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, let $C=\widehat F$ be its ordinary completion, and suppose a compatible primitive system $(\zeta_{p^n})_{n\ge0}$ is GIVEN. Put $A=\mathcal O_C$, $B=A^\flat$, $W=W_p(B)$ and $Q=W[1/p]$, and let $\xi=\sum_{j=0}^{p-1}[\varphi^{-1}\epsilon]^j$ for $\epsilon=(\zeta_{p^n}\bmod p)_{n\ge0}$. For
$$D=W[\xi^m/m!:m\ge0],\qquad A_{\mathrm{cris}}=\varprojlim_rD/p^rD,$$
the canonical homomorphism $\Psi:A_{\mathrm{cris}}\to B_{\mathrm{dR}}^+$ extending $D\subset Q\subset B_{\mathrm{dR}}^+$ is injective. Consequently $A_{\mathrm{cris}}$ is a domain, and the same map gives embeddings
$$A_{\mathrm{cris}}[1/p]\hookrightarrow B_{\mathrm{dR}}^+,\qquad B_{\mathrm{cris}}=A_{\mathrm{cris}}[1/p,1/t_{\mathrm{cris}}]\hookrightarrow B_{\mathrm{dR}}.$$
No Choice axiom is used. The assertion concerns this completed embedding, not the further injectivity of a ramified coefficient extension $K\otimes_{K_0}B_{\mathrm{cris}}$ or of crystalline Frobenius.

## Facts & Assumptions

**Given:** The valued closure, its ordinary completion, and the compatible primitive system. No selected infinite divided-power coefficient presentation for an element of $A_{\mathrm{cris}}$ is part of the hypotheses or used below.

[F1] The tilt $B$ is a valuation domain, $\ker\theta=\xi W$, $\xi$ is regular, and $\tau=\overline\xi\in B$ is nonzero. The algebraic divided-power subring is the displayed $D$. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F2] The map $\theta:W\to A$ is surjective for these data. [[lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion]]

[F3] The ring $A_{\mathrm{cris}}$ is canonically $p$-adically complete, $A_{\mathrm{cris}}/p^rA_{\mathrm{cris}}=D/p^rD$, and the canonical map $\Psi$ is constructed. Its component modulo $\xi^n$ is the extension of $D\to Q/\xi^nQ$ for the $p$-adic module topology on the finite quotient after clearing the fixed denominator $p^{v_p((n-1)!)}$. The nonzero $t_{\mathrm{cris}}$ maps to the de Rham uniformizer. [[lem-choice-free-crystalline-period-completion-and-de-rham-map]]

[F4] The ring $R=B_{\mathrm{dR}}^+$ is a DVR with residue $C$, contains $Q$ injectively, and $R/\xi^nR=Q/\xi^nQ$. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F5] Reduction identifies $W/pW$ with $B$, and $W$ is $p$-adically complete with regular $p$. [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

## Proof

1.1 Let $P\subset Q[X]$ be the free $W$-module with basis $g_m=X^m/m!$ for $m\ge0$. It is a ring, since $g_i g_j=\binom{i+j}{i}g_{i+j}$. Evaluation at $X=\xi$ maps it onto $D$. Its kernel is $(X-\xi)P$. To see this, write a kernel element as $f=\sum_{m=0}^M a_mg_m$. If its coefficients below $m$ vanish, divide $f(\xi)=0$ by $\xi^m$ in $Q$ and apply $\theta_Q:Q\to C$. This gives $\theta(a_m)/m!=0$, so $a_m=\xi c_m$ for a unique $c_m\in W$ by [F1]. Subtract $(X-\xi)(-c_mg_m)$ to remove coefficient $m$ and change only coefficient $m+1$. Do this only for $m<M$; when only the degree-$M$ term remains, its evaluation being zero forces it to be zero. This finite algorithm proves the kernel assertion. Hence $D=P/(X-\xi)P$. [F1, F2, F4, construct, algebra]

2.1 For $n\ge1$, let $F_n$ be the $W$-span of all $\gamma_m=\xi^m/m!$ with $m\ge n$. Then $F_n=D\cap\xi^nQ$. One inclusion is immediate. For the other, take one finite expression for $d\in D\cap\xi^nQ$. Its constant coefficient has zero $\theta$-image, so divide that coefficient by $\xi$ and absorb it into the coefficient of $\gamma_1$. Continue for the finitely many indices below $n$: after the lower coefficients have vanished, the leading coefficient at $m<n$ has zero $\theta$-image because $d/\xi^m\in\xi Q$, and is absorbed using $\xi\gamma_m=(m+1)\gamma_{m+1}$. This yields an expression supported at indices at least $n$. In particular $F_n$ is an ideal, $E_n:=D/F_n$ embeds in $Q/\xi^nQ$, and $p$ is regular on $E_n$. Thus $F_n\cap p^rD=p^rF_n$ for every $r$. [F1, F2, F4, step 1.1, construct, algebra]

2.2 We compute $D/pD$ using step 1.1. In $P/pP$ put $Y_j=g_{p^j}$ for $j\ge0$. Then $Y_j^p=0$: the coefficient of $g_{p^{j+1}}$ in this product is $(p^{j+1})!/(p^j!)^p$, which has $p$-valuation one. Moreover the monomials $\prod_jY_j^{a_j}$ with $0\le a_j<p$ and finite support form a $B$-basis. In fact if $m=\sum_j a_jp^j$, the product is $g_m$ times the integer $m!/\prod_j(p^j!)^{a_j}$, which has valuation zero by $v_p(m!)=\sum_{k\ge1}\lfloor m/p^k\rfloor=(m-\sum_j a_j)/(p-1)$. These finite factorial counts establish an isomorphism from the polynomial ring over $B$ modulo the relations $Y_j^p=0$ to $P/pP$. Taking its quotient by $X-\xi=Y_0-\tau$ gives $$D/pD\ \cong\ (B/(\tau^p))[Y_1,Y_2,\ldots]/(Y_1^p,Y_2^p,\ldots).$$ This is a polynomial ring with nilpotent variables, so each of its elements has a unique finite expression in the indicated monomials. It is not a formal power-series assertion or a choice of representatives in $B/(\tau^p)$. [F1, F5, step 1.1, algebra]

3.1 One has $E_1=A$, and for $n\ge2$ there is a canonical exact sequence of additive $W$-modules $$0\longrightarrow A\longrightarrow E_n\longrightarrow E_{n-1}\longrightarrow0.$$ The first map sends $a$ to the class of $w\gamma_{n-1}$ for any one lift $w\in W$ of $a$. This is well-defined: a different lift differs by $\xi z$, and $\xi z\gamma_{n-1}=nz\gamma_n\in F_n$. It is injective because its image in $Q/\xi^nQ$ has leading coefficient $a/(n-1)!$. Its image is $F_{n-1}/F_n$, since all generators of degree at least $n$ vanish. Because $p$ is regular on $E_{n-1}$, reduction modulo $p^r$ preserves exactness of this sequence on the left as well: if $p^r b$ lies in its kernel, then the image of $b$ in $E_{n-1}$ is zero. [F1, F2, step 2.1, construct, algebra]

3.2 Give such a monomial its weight $\sum_{j\ge1}a_jp^{j-1}$. If $m=pm'+r$ with $0\le r<p$, the image of $\gamma_m$ in step 2.2 is a unit scalar times $\tau^r$ times the monomial of weight $m'$ coming from the base-$p$ digits of $m'$. Therefore the image of $F_{pN}$ in $D/pD$ is supported only on monomials of weight at least $N$. Coefficients from $W$ reduce to elements of $B/(\tau^p)$ and cannot change those weights. A finite monomial expression supported in these tails for every $N$ is zero. Hence $$\bigcap_{n\ge1}(F_n+pD)=pD.$$ For every $r\ge1$ the same argument gives $\bigcap_n(F_n+p^rD)=p^rD$ by induction on $r$. Indeed the case $r=1$ puts a member $d$ of the intersection in $pD$, say $d=pd'$. Each expression $pd'=f+p^re$ has $f\in F_n\cap pD=pF_n$ by step 2.1. Cancellation of $p$ in $D\subset Q$ gives $d'\in F_n+p^{r-1}D$ for all $n$, and induction completes the assertion. [F4, step 2.1, step 2.2, algebra]

4.1 The rings $E_n$ are canonically $p$-adically complete and separated. This follows by finite induction using step 3.1, starting with $E_1=A$, which is complete by [F3]. For a compatible family in $E_n/p^rE_n$, its images have a unique limit $b\in E_{n-1}$. Choose one lift $c\in E_n$ of this one $b$. Subtracting $c$ leaves compatible kernel classes, uniquely identified by step 3.1 with a family in $A/p^rA$. Their unique limit in $A$ supplies an element of $E_n$ representing the original family. For injectivity, an element zero modulo every $p^r$ has zero image in $E_{n-1}$; its kernel coordinate then belongs to every $p^rA$ by left exactness in step 3.1, so is zero. There is no sequence of chosen lifts in this induction. [F3, step 3.1, construct, algebra]

5.1 The reduction map $D\to E_n$ therefore extends canonically to a homomorphism $\widehat f_n:A_{\mathrm{cris}}\to E_n$: send each compatible residue system to its unique limit under step 4.1. Its composite with $E_n\hookrightarrow Q/\xi^nQ$ equals the component of $\Psi$ in [F3]. Indeed both maps extend evaluation on $D$ and commute with reduction modulo powers of $p$ after multiplying by $p^{h_n}$, where $h_n=v_p((n-1)!)$. The image of $E_n$ is contained in $p^{-h_n}(W/\xi^nW)$ because it is spanned by the first $n$ divided powers. The latter module is $p$-adically separated by the finite-quotient construction in [F3], so the two maps agree. Consequently $\Psi(x)=0$ implies $\widehat f_n(x)=0$ for every $n$. [F3, F4, step 2.1, step 4.1, construct, algebra]

6.1 Suppose $\Psi(x)=0$. For any one $r$, represent the class of $x$ in $A_{\mathrm{cris}}/p^rA_{\mathrm{cris}}=D/p^rD$ by one $d\in D$. Since $\widehat f_n(x)=0$ by step 5.1, its residue implies that $d$ maps into $p^rE_n$, equivalently $d\in F_n+p^rD$, for every $n$. Step 3.2 gives $d\in p^rD$. Thus the original class of $x$ is zero for every $r$, and separatedness in [F3] yields $x=0$. This proves the completed injection without asserting that arbitrary elements lift to a chosen restricted divided-power series. [F3, step 5.1, step 3.2, construct, algebra]

7.1 By [F4], the target $R$ is a domain, so its embedded subring $A_{\mathrm{cris}}$ is a domain as well. The images of $p$ and $t_{\mathrm{cris}}$ are respectively a unit and the de Rham uniformizer by [F3]. Localizing the injection of step 6.1 at $p$ therefore embeds $A_{\mathrm{cris}}[1/p]$ into $R$, and localizing further at $t_{\mathrm{cris}}$ embeds $B_{\mathrm{cris}}$ into $R[1/t_{\mathrm{dR}}]=B_{\mathrm{dR}}$. The argument includes $p=2$, all positive finite truncation indices and the zero element. Every coefficient expression chosen was finite for one fixed element; all infinite compatibilities were already specified inverse-limit data or uniquely determined limits. [F3, F4, step 6.1, algebra] ∎

## Source notes

Fontaine Section4.1.1–4.1.3 was read in full from the actual 1994 paper (printed page83). It states that coefficients can be chosen with nonzero theta-image whenever nonzero, then infers injectivity. Brinon–Conrad Section9.1 through Proposition9.1.1 and Exercise9.4.1 were also read in full; the notes explicitly omit the completed-injectivity proof. Neither omission is used as an imported theorem here.

The local proof instead uses the finite algebraic PD-polynomial presentation, finitely many exact extensions by $A$, and the explicit modulo-$p$ monomial basis. The argument does not need surjectivity from a completed free divided-power polynomial module, an arbitrarily chosen coefficient section, a simultaneous family of representatives, or a general inverse-limit exactness principle. The full original period-ring target still requires its semistable/coefficient-extension comparisons, invariant fields, and other structural assertions; this helper supplies exactly the completed crystalline embedding.

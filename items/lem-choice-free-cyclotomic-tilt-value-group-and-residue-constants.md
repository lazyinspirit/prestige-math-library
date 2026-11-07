---
id: lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants
kind: lemma
title: Rational tilt values and canonical residue constants without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - lem-choice-free-ball-nest-completion-of-a-nonarchimedean-field
  - lem-finite-hensel-algebraic-closedness-of-dense-characteristic-zero-extensions
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-fontaine-map-from-finite-witt-ghost-congruences
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-monic-polynomial-division
  - thm-binomial-theorem-over-a-commutative-ring
  - def-field-of-p-adic-numbers
  - def-p-adic-absolute-value-on-the-rationals
  - thm-p-adic-completion-is-a-field
  - thm-bezout-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
      locator: "Section3.1, tilt/root-tuple and cyclotomic constructions; finite Hensel and unique root-compatibility reconstruction"
    - title: "Brian Conrad, Completion of algebraic closure"
      url: "https://math.stanford.edu/~conrad/676Page/handouts/algclosurecomp.pdf"
      locator: "Theorem1.1, applied through the local finite-Hensel characteristic-zero supplier"
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN algebraic closure equipped with an absolute value extending $|\cdot|_p$. Let $C=F^{\mathrm{ball}}$ be its ball-nest completion, $A=\mathcal O_C$, and normalize $v(p)=1$. Suppose a compatible primitive system $(\zeta_{p^n})_{n\ge0}$ in $F$ is GIVEN. Then $C$ is algebraically closed, $v(C^\times)=\mathbb Q$, and its residue field $k$ is an algebraic closure of $\mathbb F_p$. Its tilt $B=A^\flat$ is a perfect valuation domain with
$$v_B(x)=v(x^\sharp),\qquad v_B(\operatorname{Frac}(B)^\times)=\mathbb Q.$$
Reduction of sharp induces an isomorphism from the residue field of $B$ to $k$. There is a unique field homomorphism $\omega:k\to B$ splitting this residue map. For $a\in\mathbb F_{p^m}\subseteq k$, $\omega(a)$ is the unique root of $T^{p^m}-T$ in $B$ with residue $a$. These conclusions require no Choice axiom. Neither surjectivity of the Fontaine map nor identification of the ball completion with an arbitrary sequence-class model is asserted.

## Facts & Assumptions

**Given:** The valued algebraic closure, the explicitly specified ball-nest construction and the compatible primitive root system. Neither an algebraic closure nor an infinite root system is selected by this proof.

[F1] The ball-nest completion is a complete valued field with dense original field, unchanged residue and value group, and a canonically adically complete valuation ring. [[lem-choice-free-ball-nest-completion-of-a-nonarchimedean-field]]

[F2] A complete characteristic-zero nonarchimedean field with a dense algebraically closed subfield is algebraically closed, by a finite Hensel argument without Choice. [[lem-finite-hensel-algebraic-closedness-of-dense-characteristic-zero-extensions]]

[F3] For an adically complete valuation ring with the given primitive cyclotomic system, its tilt is a valuation domain with valuation $v(x^\sharp)$; if $u=\varphi^{-1}\epsilon$ and $b=u-1$, then $v_B(b)=1/(p-1)$. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F4] The tilt is perfect; its sharp map is multiplicative, agrees with its initial coordinate modulo $p$, and identifies its elements multiplicatively with actual compatible $p$-root tuples in $A$. [[lem-fontaine-map-from-finite-witt-ghost-congruences]]

[F5] A simple residue root of a monic polynomial over a complete nonarchimedean valued field has a unique lift in its valuation ring. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F6] Monic polynomial division holds over a field. [[thm-monic-polynomial-division]]

[F7] The finite binomial theorem holds. [[thm-binomial-theorem-over-a-commutative-ring]]

[F8] The $p$-adic field has its named dense isometric rational embedding; its operations and absolute value extend the rational ones without Choice. [[def-field-of-p-adic-numbers]] [[thm-p-adic-completion-is-a-field]]

[F9] The rational $p$-adic absolute value is given by the integer-valued rational valuation, with $v_p(p)=1$. [[def-p-adic-absolute-value-on-the-rationals]]

[F10] Coprime integers have an integral Bezout identity. [[thm-bezout-identity]]

## Proof

1.1 By [F1] and [F2], $C$ is a complete algebraically closed valued field and $A$ has its canonical $p$-adic completion isomorphism. Density of $\mathbb Q$ in $\mathbb Q_p$ shows $v(\mathbb Q_p^\times)=\mathbb Z$: approximate one nonzero element with error smaller than its absolute value and use the rational valuation in [F9]. Approximation with error less than $1$ shows its residue field is $\mathbb F_p$, because an integral rational has a denominator prime to $p$ after cancellation. If $\alpha\in F^\times$, take a nonzero polynomial relation $\sum a_j\alpha^j=0$ over $\mathbb Q_p$. At least two nonzero terms have the same minimum valuation; a unique strict minimum cannot sum to zero by the strong triangle inequality. Thus $v(a_i)+iv(\alpha)=v(a_j)+jv(\alpha)$ for distinct $i,j$, proving $v(\alpha)\in\mathbb Q$. Conversely, for every positive integer $m$ a root of $T^m-p$ in $F$ has valuation $1/m$. Taking powers and inverses realizes all rational values. The unchanged-value assertion in [F1] gives $v(C^\times)=\mathbb Q$. [F1, F2, F8, F9, given, algebra]

2.1 For integral $\alpha\in F$, scale one polynomial relation over $\mathbb Q_p$ by a power of $p$ so all coefficients are integral and at least one is a unit. Its reduction is a nonzero polynomial over $\mathbb F_p$ annihilating the residue of $\alpha$, so that residue is algebraic. By density with error less than $1$, every residue of $C$ is such a residue. Conversely, for any monic nonconstant polynomial over $k$, lift its finitely many coefficients to $A$. The resulting monic polynomial has a root in the algebraically closed field $C$; its root is integral, since otherwise the monic leading term strictly dominates all lower terms. Its residue is a root of the original polynomial. Hence $k$ is algebraic over $\mathbb F_p$ and algebraically closed. Every element of $k$ belongs to a finite field: the subfield generated by finitely many algebraic elements over $\mathbb F_p$ has finite dimension by successive division by their monic minimal polynomials in [F6] and hence finitely many elements, say $p^m$. Multiplication permutes its nonzero elements, and cancellation of their product shows that each nonzero element has $(p^m-1)$st power $1$. [F1, F6, step 1.1, construct, algebra]

3.1 By [F3], $B$ is a valuation domain and $v_B(x)=v(x^\sharp)$; it is perfect by [F4]. The map $\rho:B\to k$ given by $x\mapsto x^\sharp\bmod\mathfrak m_A$ is a ring homomorphism, since modulo $p$ the sharp map is the initial ring-coordinate projection in [F4]. Its kernel is precisely $\mathfrak m_B=\{x:v_B(x)>0\}$. Fix $a\in k$ and a finite subfield $\mathbb F_{p^m}$ containing it. By [F5], $T^{p^m}-T$ has a unique lift $\widetilde a\in A$ of the residue root $a$, since its residue derivative is $-1$. Enlarging the finite subfield does not change this lift: a root of $T^{p^m}-T$ also satisfies $T^{p^{m\ell}}-T$ whenever $\ell\ge1$, and uniqueness applies. Thus the lift is intrinsically determined by $a$. The lifts of the unique Frobenius inverse iterates $a^{p^{-n}}$ form an actual compatible tuple, because $(\widetilde{a^{p^{-(n+1)}}})^p$ is the unique lift of $a^{p^{-n}}$ satisfying the same finite-field polynomial. By [F4] this tuple defines $\omega(a)\in B$ with $\rho(\omega(a))=a$ and $\omega(a)^{p^m}=\omega(a)$. Each entry was uniquely determined; no sequence of arbitrary residue lifts was chosen. [F3, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 Two roots $x,y\in B$ of $T^{p^m}-T$ with the same residue must coincide: their difference satisfies $(x-y)^{p^m}=x-y$ by [F7], whereas a nonzero difference of positive valuation cannot satisfy this equality. For $a,c\in k$, put them in one common finite subfield. In characteristic $p$, the sum and product of their $\omega$-images again satisfy its polynomial, with residues $a+c$ and $ac$. The uniqueness just proved gives $\omega(a+c)=\omega(a)+\omega(c)$ and $\omega(ac)=\omega(a)\omega(c)$; zero and one are preserved as well. Thus $\omega$ is a field embedding and a section of $\rho$, which proves the residue-field isomorphism. Any field section must send $a\in\mathbb F_{p^m}$ to a root of the same polynomial with residue $a$, so it equals $\omega$. [F7, step 3.1, algebra]

5.1 Values of nonzero elements of $B$ are rational by step 1.1 and $v_B(x)=v(x^\sharp)$. To get every rational value, use $b=u-1$ from [F3], of value $1/(p-1)$, and write its actual compatible tuple as $(b_n)$ by [F4]. Let $m\ge1$ be prime to $p$. Choose ONE $m$th root $c_0\in C$ of $b_0$; it is integral. Given $c_n$ with $c_n^m=b_n$, an $m$th root $d$ of $b_{n+1}$ exists in $C$. The ratio $c_n/d^p$ is an $m$th root of unity. Use [F10] to choose an integer $e$ with $pe\equiv1\pmod m$ and put $c_{n+1}=d(c_n/d^p)^e$. Then $c_{n+1}^m=b_{n+1}$ and $c_{n+1}^p=c_n$. This output is independent of the temporary root $d$: two outputs have ratio both an $m$th and a $p$th root of unity, hence ratio $1$ because $m,p$ are coprime. Therefore unique recursion after the single initial root defines an actual tuple $(c_n)$, not a countable root choice. It lies in $A$ and defines $z\in B$ with $z^m=b$ by [F4]. Perfectness of $B$ supplies its unique $p^j$th roots. Their valuations are $1/((p-1)mp^j)$; raising to the $(p-1)$st power, taking integer powers and passing to the fraction field realizes every rational value. This proves the claimed value group and completes the proof. [F3, F4, F10, step 1.1, step 3.1, construct, algebra] ∎

## Source notes

The tilt and cyclotomic identities are used through their exact reconstructed suppliers. The new residue argument uses unique finite-field Hensel lifts; the new rational-value argument makes the compatibility correction explicit when $p$ is invertible modulo $m$. It selects one initial root, then recurses on a unique rule. This is not BMS's arbitrary repeated Frobenius-preimage selection.

The construction is explicitly based on $F^{\mathrm{ball}}$. It does not silently replace a sequence-class completion convention in an existing item. Neither its residue section nor its rational value group proves surjectivity of $B\to A/p$ or of $\theta:W(B)\to A$. Those special infinite lifting obligations and the remaining period comparisons stay held at the original full scope. No algebraic closure, compatible primitive system or Choice hypothesis has been added to an existing parent.

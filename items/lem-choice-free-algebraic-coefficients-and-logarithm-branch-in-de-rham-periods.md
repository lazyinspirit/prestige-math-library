---
id: lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods
kind: lemma
title: Algebraic coefficients and the normalized logarithm branch in de Rham periods without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion
  - lem-perfect-base-witt-frobenius-and-p-adic-completeness
  - cor-zp-is-the-valuation-ring-of-qp
  - lem-choice-free-finite-ax-sen-approximation
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Brinon and Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: algebraic lifting in Lemma4.4.10; logarithm extension in Lemma9.2.6; explicit Newton and finite-field construction supplied here
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$ its ordinary completion, and suppose a compatible primitive cyclotomic system is GIVEN. For the constructed de Rham DVR $R=B_{\mathrm{dR}}^+$ there is a canonical field embedding $\iota:F\hookrightarrow R$ with residue equal to the original inclusion $F\subset C$. It extends the canonical $p$-adic scalar embedding $\mathbb Q_p\to W_p(\mathcal O_C^\flat)[1/p]\subset R$, and is the unique such $\mathbb Q_p$-homomorphism. For every finite $K\subset F$, it is $G_K$-equivariant.

There is a unique homomorphism $\log_p:F^\times\to F$ that kills $p$ and all residue Teichmüller units and whose value on $1+\mathfrak m_F$ is the usual convergent logarithmic series. It preserves every finite intermediate field $K/\mathbb Q_p$ and is Galois-equivariant. More generally, prescribing $\log_q(q)=c$ for any one $q\in F^\times$ with $v(q)\ne0$ and $c\in F$ gives a unique extension of the same unit logarithm; it is
$$\log_{q,c}(x)=\frac{\log(x^n/q^m)+mc}{n}\quad\text{when }v(x)/v(q)=m/n,\ n>0.$$
Here the logarithm in the numerator is the canonical unit logarithm. If $q,c\in K$, this branch preserves $K$ and is $G_K$-equivariant. These assertions require no Choice axiom. They neither select a compatible root tower for $q$ nor extend $\iota$ to the whole completed residue field $C$.

## Facts & Assumptions

**Given:** The actual valued closure and compatible primitive cyclotomic system. Write $A=\mathcal O_C$, $W=W_p(A^\flat)$, $Q=W[1/p]$, and let $\theta_R:R\to C$ be the residue map of the de Rham DVR.

[F1] The de Rham ring $R$ is a complete DVR containing $Q$, with residue $C$ and a regular uniformizer $\xi$. An element of $R$ is a unit precisely when its residue is nonzero. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F2] Fontaine's homomorphism $W\to A$ is surjective and extends compatibly to $Q\to C$. [[lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion]]

[F3] The ring $W$ is canonically $p$-adically complete and separated with regular $p$ and perfect characteristic-$p$ residue. [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[F4] The $p$-adic integers are the valuation ring in $\mathbb Q_p$, under its completion/fraction-field identification. [[cor-zp-is-the-valuation-ring-of-qp]]

[F5] Every finite intermediate field of $F/\mathbb Q_p$ is complete, and all finite $\mathbb Q_p$-embeddings between such subfields are isometric. [[lem-choice-free-finite-ax-sen-approximation]]

[F6] Every finite separable field extension is simple. [[thm-primitive-element-theorem-for-finite-separable-extensions]]

[F7] The actual ordinary completion $C$ is a complete field with its canonical original-field inclusion; its valuation ring is canonically $p$-adically complete. [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

## Proof

1.1 For $a\in\mathbb Z_p$, its compatible integer residues map to a compatible system in $W/p^rW$, and [F3] gives a unique element of $W$. This defines a unital homomorphism $\mathbb Z_p\to W$. Its image under $\theta$ is the usual $a\in A$, because the same integer residues characterize that element by [F7]. Thus it is injective. Localizing at $p$ gives the canonical embedding $\mathbb Q_p\to Q\subset R$, by [F4], and its residue is the given scalar embedding in $C$. Every $g\in G_K$ is isometric on $F$ by [F5], extends to its ordinary completion by applying it to representative Cauchy sequences, and acts on $W$ compatibly with $\theta$. It preserves the principal kernel ideal and all its powers, so acts on every defining quotient and hence on $R$. These actions fix the displayed $p$-adic scalars. [F1, F3, F4, F5, F7, construct, algebra]

1.2 The residue field of each finite $L\subset F$ is finite. Indeed a residue root is algebraic over $\mathbb F_p$: for integral $a\in L$, scale the coefficients of one polynomial relation over $\mathbb Q_p$ into $\mathbb Z_p$ so at least one coefficient is a unit, then reduce. Linear independence of residue classes lifts to linear independence over $\mathbb Q_p$ by clearing their coefficient denominators and reducing a relation with a unit coefficient. The residue extension therefore has degree at most $[L:\mathbb Q_p]$, so is finite. Every value of an algebraic element is rational: two terms of minimum valuation in its polynomial relation have equal values, so their distinct exponents express $v(a)$ as a rational quotient of integer coefficient valuations. For a nonzero residue $c$ of order dividing $p^m-1$, choose one finite field $L$ containing a lift of $c$. In the complete valued field $L$ of [F5], Newton iteration for $T^{p^m}-T$ starting at that lift gives a unique root $[c]_F$ with residue $c$. The derivative is a unit and errors double in valuation, so the iteration converges without Choice. For two exponents use a common multiple $\ell$; both lifts solve $T^{p^\ell}-T$. Uniqueness in any larger complete finite field therefore makes the result independent of $L,m$; for nonzero $c$ it is equivalently the unique root of $T^{p^m-1}-1$ of that residue. The assignments $c\mapsto[c]_F$ are multiplicative by this uniqueness. Every unit $u$ consequently has a canonical factorization $u=[\bar u]_F u_1$ with $u_1\in1+\mathfrak m_F$. [F4, F5, construct, algebra]

2.1 Fix one $a\in F$, and let $f_a\in\mathbb Q_p[T]$ be its monic minimal polynomial. Characteristic zero makes it separable. Choose one lift $r_0\in Q$ of $a$ by [F2]. Then $f_a(r_0)\in\xi R$ and $f_a'(r_0)$ is a unit by [F1]. Newton iteration $r_{j+1}=r_j-f_a(r_j)/f_a'(r_j)$ is well-defined in $R$; polynomial expansion shows $f_a(r_{j+1})\in\xi^{2^{j+1}}R$ and $r_{j+1}-r_j\in\xi^{2^j}R$. The derivatives remain units, since every residue is $a$. These estimates follow inductively from the initial error in $\xi R$; hence the uniquely specified iterates converge in $R$ to a root $\iota(a)$ with residue $a$. Such a root is unique: for two roots of that residue, their difference times the polynomial difference quotient is zero, and the quotient has residue $f_a'(a)\ne0$, so is a unit. The result is independent of the one initial lift. Thus this construction defines a function on all actual elements $a$, not a family of selected roots. [F1, F2, step 1.1, construct, algebra]

2.2 For $u_1\in1+\mathfrak m_F$, put $d=u_1-1$ and work in the one finite complete field $L=\mathbb Q_p(u_1)$. The terms $d^n/n$ have valuations $n v(d)-v_p(n)\to+\infty$, so their alternating sum exists in $L$. Define $\log(u)=\log(u_1)$ using the factorization in step 1.2. The value is independent of the finite field. It is a homomorphism: for two principal units use the formal identity $\log((1+X)(1+Y))=\log(1+X)+\log(1+Y)$, obtained by formal differentiation and zero constant term. With truncation index $N$, the difference polynomial has degree at least $N+1$ and denominator valuation at most $\lfloor\log_pN\rfloor$; at the two fixed small inputs its error has valuation at least $(N+1)\min(v(d_1),v(d_2))-\lfloor\log_pN\rfloor\to+\infty$. The canonical Teichmüller factors multiply, so this proves the claim for all units. Isometries preserve limits and the unique residue lifts, hence this logarithm is Galois-equivariant and preserves each finite $K$. [F5, step 1.1, step 1.2, construct, algebra]

3.1 To check ring compatibility for any finitely many elements of $F$, take their one finite generated extension $L/\mathbb Q_p$. It is separable, and [F6] gives one primitive element $b$ for this finite argument. The root $\iota(b)$ from step 2.1 gives a field homomorphism $L=\mathbb Q_p[T]/(f_b)\to R$ whose residue is the inclusion of $L$ in $C$; it is injective because it is unital and its source is a field. For each $a\in L$, its image is a root of $f_a$ with residue $a$, so uniqueness in step 2.1 identifies it with $\iota(a)$. This proves addition, multiplication and inversion for all elements, and shows $\iota$ is the unique scalar-preserving homomorphism with that residue. Applying $g$ to the same root equation proves $g\iota(a)=\iota(g a)$, since $g$ fixes its scalar coefficients and carries the residue to $g a$. No primitive elements were selected simultaneously for all finite fields. [F1, F5, F6, step 1.1, step 2.1, construct, algebra]

4.1 For $x\in F^\times$, step 1.2 gives $v(x)/v(q)=m/n$ with integers $n>0,m$; then $x^n/q^m$ is a unit. The displayed branch formula is independent of this expression: replacing $(m,n)$ by a positive common multiple changes numerator and denominator by that multiple, by step 2.2; any two representations have a common such multiple. For two inputs clear their two denominators and multiply the resulting units to prove additivity of the branch. It extends the unit logarithm, gives value $c$ at $q$, and uniqueness follows by applying any proposed homomorphism to $x^n/q^m$. With $q=p,c=0$ this is the unique normalized $\log_p$; the case $u$ a residue Teichmüller unit gives zero. If $q,c\in K$, the unit formula is evaluated in $K$ when $x\in K$, so the branch preserves $K$, and its uniqueness and step 2.2 give $G_K$-equivariance on $F$. Zero input is excluded because the source is $F^\times$; the units and all valuation signs are included, as is $p=2$. No compatible p-root tower for $q$ was selected. [F4, F5, step 1.2, step 2.2, algebra] ∎

## Source notes

The algebraic coefficient part of Brinon–Conrad Lemma4.4.10 and the whole Lemma9.2.6 branch construction were read. The proof here gives the Newton recurrence and finite-field compatibility instead of invoking an abstract coefficient-field section. It does not use the separate natural-topology assertions later in Lemma4.4.10, nor a coefficient-field section defined on all of $C$.

This provides the actual algebraic coefficient embedding and branch required before a semistable comparison can be defined. A compatible Kummer root tower for p or a uniformizer, full ramified tensor injectivity, and the semistable comparison embedding are not supplied by this argument. The given cyclotomic system is not silently relabeled as that different tower.

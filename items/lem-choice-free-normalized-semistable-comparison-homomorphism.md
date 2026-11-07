---
id: lem-choice-free-normalized-semistable-comparison-homomorphism
kind: lemma
title: The normalized semistable comparison homomorphism without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-choice-free-crystalline-period-completion-and-de-rham-map
  - lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
  - lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
  - lem-choice-free-finite-ax-sen-approximation
  - thm-primitive-element-theorem-for-finite-separable-extensions
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brinon and Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: Lemmas9.2.6–9.2.7 and construction preceding Theorem9.2.10; direct finite-quotient logarithm here avoids choosing a Kummer tower
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$ its ordinary completion, and suppose a compatible primitive cyclotomic system is GIVEN. For the constructed period rings there is a canonical homomorphism
$$\iota_0:B_{\mathrm{st}}\longrightarrow B_{\mathrm{dR}}$$
extending the crystalline embedding and carrying $B_{\mathrm{st}}^+$ into $B_{\mathrm{dR}}^+$. For every finite $K\subset F$, it is $G_K$-equivariant. If $y\in\operatorname{Frac}(\mathcal O_C^\flat)^\times$ has $a=y^\sharp\in F^\times$, then
$$\iota_0(\lambda_{\mathrm{st}}(y))=\log_{\mathrm{dR}}([y]/\iota(a))+\iota(\log_p(a)),$$
where $\iota:F\hookrightarrow B_{\mathrm{dR}}^+$ and $\log_p$ are the canonical algebraic coefficient embedding and normalized branch with $\log_p(p)=0$. In particular this is the prescribed comparison formula whenever $a\in K^\times$. For $c\in F$, replacing $\log_p$ by $\log_p+c v_p$ gives a homomorphism $\iota_c$ with
$$\iota_c(\lambda_{\mathrm{st}}(y))=\iota_0(\lambda_{\mathrm{st}}(y))+\iota(c)v_B(y).$$
It is $G_K$-equivariant when $c\in K$. If $\iota(c)\in B_{\mathrm{cris}}^+$, the image subalgebras of the plus rings are the same; if $\iota(c)\in B_{\mathrm{cris}}$, the images after inverting $t$ are the same. No Choice axiom or separate Kummer root tower is used. Injectivity of these homomorphisms, and of the ramified scalar extensions, is not asserted here.

## Facts & Assumptions

**Given:** The valued closure and primitive system. Put $A=\mathcal O_C$, $B=A^\flat$, $W=W_p(B)$, $Q=W[1/p]$, $R=B_{\mathrm{dR}}^+$, $T_n=W/\xi^nW$, and let $\theta_R:R\to C$ be residue. Use $v_p(p)=1$ on $C$ and the induced tilt valuation $v_B$.

[F1] The DVR $R$ is $\varprojlim_nQ/\xi^nQ$, its finite quotients are the displayed ones, and its residue map has target $C$. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F2] The completed crystalline map to $R$ is constructed by taking limits in the canonically $p$-complete modules $T_n$ after clearing fixed finite denominators; $T_n$ is $p$-torsionfree. These are the explicit finite-quotient constructions in its proved steps1.1–4.1. [[lem-choice-free-crystalline-period-completion-and-de-rham-map]]

[F3] The field $F$ embeds canonically in $R$, and its canonical logarithm $\log_p$ kills $p$ and residue Teichmüller units, preserves finite subfields and is Galois-equivariant. [[lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods]]

[F4] The homomorphism $\lambda:B^\times\to B_{\mathrm{cris}}^+$ is the crystalline logarithm on principal units and zero on residue constants. The abstract semistable ring is its symmetric-algebra pushout, is polynomial in one valuation coordinate, and $g(t)=\chi_p(g)t$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

[F5] The value group of $C$ and of the tilt is $\mathbb Q$ and their residue fields agree, with the canonical residue constants in the tilt. [[lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants]]

[F6] The ordinary and ball completions are canonically isometric, so the conclusions in [F5] apply to this ordinary $C$. [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

[F7] Every finite intermediate field is complete and all its finite $\mathbb Q_p$-embeddings are isometric. [[lem-choice-free-finite-ax-sen-approximation]]

[F8] Every finite separable field extension is simple. [[thm-primitive-element-theorem-for-finite-separable-extensions]]

## Proof

1.1 Fix $n$ and put $S_n=T_n[1/p]=Q/\xi^nQ$. If $q\in S_n$ has residue $a\in C$ with $v_p(a)=\delta>0$, choose one expression $q=p^{-h}w$, $h\ge0,w\in W$. Choose $M$ with $M\delta\ge1$. Fontaine surjectivity and its principal kernel, used in the construction [F2], give $w^M=p^{hM+1}u+\xi b$ for some $u,b\in W$: its theta-image is divisible by $p^{hM+1}$, lift the quotient and divide the remaining kernel element by $\xi$. Thus $q^M=pu+\xi p^{-hM}b$. In the expansion of $(q^M)^L$ only powers of $\xi$ below $n$ survive, so for $0\le r<M$, $q^{ML+r}$ belongs to $p^{L-C_n}T_n$, with for instance $C_n=(n-1)(hM+1)+h(M-1)$. If $a=0$, $q\in\xi S_n$ is nilpotent instead. Hence whenever $v_p(a)>0$, including $a=0$, the series $\sum_{m\ge1}(-1)^{m+1}q^m/m$ converges in a fixed bounded-denominator complete module $p^{-H_n}T_n$, since its term orders grow at least linearly minus $v_p(m)$. [F1, F2, construct, algebra]

2.1 Let $U=\{r\in R^\times:v_p(\theta_R(r)-1)>0\}$. Apply step 1.1 to the image of $r-1$ in each $S_n$. The logarithmic limits commute with reduction in $n$, by uniqueness of limits after clearing the fixed denominators, and define $\ell(r)\in R$. This is a homomorphism from multiplication to addition. Indeed in each fixed quotient, powers of either input $q_1,q_2$ have orders bounded below by $\lfloor m/M\rfloor-C$ for common fixed $M,C$. A monomial of total degree $d$ has order at least $\lfloor d/M\rfloor-2C-2$. The finite truncation error for $\log((1+X)(1+Y))=\log(1+X)+\log(1+Y)$ has degree at least $N+1$ and coefficient denominator order at most $\lfloor\log_pN\rfloor$, so tends to zero at these inputs. This proves the identity in every $S_n$, hence in $R$. All Galois automorphisms act $p$-continuously on $T_n$, preserve its kernel ideal and act isometrically on $C$, so the same limits prove equivariance. On $1+\xi R$, the limit is exactly the usual discrete-valuation logarithm: modulo $\xi^n$, all terms with index at least $n$ vanish. [F1, F2, F4, F7, step 1.1, construct, algebra]

3.1 Normalize this logarithm on all $R^\times$. For $r\in R^\times$, [F5]–[F6] give $v_p(\theta_R(r))=m/n$ with integers $n>0,m$. Let $c$ be the nonzero residue in the characteristic-$p$ residue field of $\theta_R(r)^n/p^m$, and let $[c]_F\in F$ be its canonical Teichmüller lift, as constructed in [F3]. Then $r^n p^{-m}\iota([c]_F)^{-1}\in U$. Define $L(r)=\ell(r^n p^{-m}\iota([c]_F)^{-1})/n$. Replacing $(m,n)$ by a common positive multiple does not change this value, since the residue Teichmüller lift is multiplicative and $\ell$ is a homomorphism. Any two choices have a common multiple, proving well-definedness. For products use a common denominator and multiply their residue constants. Thus $L:R^\times\to R$ is a homomorphism, restricts to $\ell$ on $U$, kills $p$ and the Teichmüller constants, and is Galois-equivariant by the canonical constructions. [F3, F5, F6, step 2.1, construct, algebra]

4.1 For $a\in F^\times$, one has $L(\iota(a))=\iota(\log_p(a))$. It suffices by step 3.1 to treat principal units of one finite field $K'\subset F$. Its coefficient embedding into each $S_n$ is continuous for the $p$-adic valuation on $K'$ and the bounded-denominator module topology on its image. Here is a finite verification: choose a primitive element $b$ by [F8] and its finitely many distinct conjugates; the Vandermonde matrix of their powers is invertible. By [F7], all conjugates of an element $x=\sum_{j<d}c_jb^j$ have absolute value $|x|$. Multiplying their vector by the one fixed inverse Vandermonde matrix bounds every $|c_j|$ by a fixed constant times $|x|$. Thus if $x$ tends to zero, all its scalar coordinates tend to zero. The finitely many images of $b^j$ in $S_n$ have fixed finite $p$-denominators, which proves the asserted continuity. The scalar $\mathbb Q_p$-map has this continuity by its inverse-residue construction in [F3]. Consequently the ordinary logarithmic series in $K'$ maps to the limit defining $\ell$ on its image, proving the identity. All primitive elements and matrix orderings used here were for one finite field and one finite calculation. [F3, F7, F8, step 2.1, step 3.1, construct, algebra]

5.1 The multiplicative Teichmüller map extends to $E^\times$, $E=\operatorname{Frac}(B)$, with values in $R^\times$, since $\theta_R([y])=y^\sharp\ne0$. Put $\Lambda(y)=L([y])$. This homomorphism extends the crystalline $\lambda$. For a principal unit $x\in B$, its defining series agrees term by term with the crystalline logarithm in [F4]; both limits in each $S_n$ agree by [F2], using a common bounded denominator for the finite sums. For a residue constant $\omega(c)$, its Teichmüller representative in $R$ equals $\iota([c]_F)$: both are roots of the same finite prime-to-$p$ root-of-unity polynomial, with the same residue, and the simple-root uniqueness in [F3] identifies them. They therefore have logarithm zero. By [F4]'s universal property, $\Lambda$ gives a $B_{\mathrm{cris}}^+$-algebra map $B_{\mathrm{st}}^+\to R$, Galois-equivariant by steps 2.1–3.1. Its value on $t$ is the already constructed de Rham uniformizer, so it extends after inverting $t$ to the asserted $\iota_0:B_{\mathrm{st}}\to B_{\mathrm{dR}}$. [F1, F2, F3, F4, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 If $a=y^\sharp\in F^\times$, the ratio $[y]/\iota(a)$ lies in $1+\xi R$. The homomorphism property, step 2.1 and step 4.1 yield $\Lambda(y)=\log_{\mathrm{dR}}([y]/\iota(a))+\iota(\log_p(a))$, the required formula. For $c\in F$, the modified homomorphism $L_c(r)=L(r)+\iota(c)v_p(\theta_R(r))$ gives $\Lambda_c(y)=\Lambda(y)+\iota(c)v_B(y)$. Since units of $B$ have zero valuation, it still extends the same $\lambda$ and gives $\iota_c$. Its equivariance holds when $c\in K$. In a polynomial coordinate $X=\lambda_{\mathrm{st}}(y_0)$ of valuation $w\ne0$, changing $c$ translates the image of $X$ by $\iota(c)w$. If this translation belongs to the coefficient ring, the two image subalgebras coincide, as claimed separately for the plus and localized rings. Everything is defined on actual quotient elements by unique limits; no field section on $C$, no compatible Kummer root tower and no injectivity assumption for the semistable map was used. [F3, F4, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎

## Source notes

The full Brinon–Conrad Lemmas9.2.6–9.2.7 and the map construction preceding Theorem9.2.10 were read. The source compares logarithms using a finite ramified coefficient extension and subsequently chooses a compatible system for a nonunit algebraic element. This proof instead constructs the normalized logarithm directly on de Rham units by finite quotient estimates. It does not invoke the source's still-unsupplied ramified tensor injection or a separate Kummer selection.

The exact already proved finite-quotient clauses used from the crystalline completion supplier are its canonical Proof steps1.1–4.1, not an invented extension of its public Statement; their source text and body binding are retained as supplemental evidence. The actual full original comparison embedding remains held for injectivity, ramified scalar compatibility and the assertion that its algebraic-sharp prescription alone uniquely determines the whole extension. This helper supplies the homomorphism and its prescribed branch formula, preserving that stronger original target.

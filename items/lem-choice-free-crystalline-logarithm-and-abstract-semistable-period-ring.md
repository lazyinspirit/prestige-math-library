---
id: lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
kind: lemma
title: Crystalline logarithms and the abstract semistable period ring without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - lem-choice-free-finite-ax-sen-approximation
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
  - lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-choice-free-crystalline-period-completion-and-de-rham-map
  - lem-choice-free-completed-crystalline-embedding-in-the-de-rham-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Brinon and Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: Lemma9.2.2, Definition9.2.3 and Remarks9.2.4–9.2.5; explicit finite estimates and direct-sum universal properties supplied here
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, let $C=\widehat F$, and suppose a compatible primitive system $(\zeta_{p^n})_{n\ge0}$ is GIVEN. Write $A=\mathcal O_C$, $B=A^\flat$, $k=B/\mathfrak m_B$, $E=\operatorname{Frac}(B)$ and $v_B(x)=v_p(x^\sharp)$ with $v_p(p)=1$. Let $\omega:k\to B$ be its canonical residue-field section. Use the constructed rings $A_{\mathrm{cris}}$, $B_{\mathrm{cris}}^+$ and $B_{\mathrm{cris}}$. For every $x\in1+\mathfrak m_B$, the series
$$\log_{\mathrm{cris}}([x])=\sum_{m\ge1}(-1)^{m+1}\frac{([x]-1)^m}{m}$$
converges in a bounded $p$-denominator copy of $A_{\mathrm{cris}}$ in $B_{\mathrm{cris}}^+$. It defines a homomorphism on $1+\mathfrak m_B$, and the rule
$$\lambda(u)=\log_{\mathrm{cris}}([u/\omega(\bar u)])\qquad(u\in B^\times)$$
defines a canonical homomorphism $B^\times\to B_{\mathrm{cris}}^+$ trivial on $\omega(k^\times)$, with $\varphi(\lambda(u))=\lambda(u^p)=p\lambda(u)$.

For every finite $K/\mathbb Q_p$ inside $F$, these maps are $G_K=\operatorname{Aut}(F/K)$-equivariant. For the given cyclotomic $\epsilon$, one has $g(t)=\chi_p(g)t$ for $t=\log_{\mathrm{cris}}([\epsilon])$ and the character determined by $g(\zeta_{p^n})=\zeta_{p^n}^{\chi_p(g)\bmod p^n}$.

Define $\operatorname{Sym}_{\mathbb Q}(H)=\operatorname{Sym}_{\mathbb Q}(\mathbb Q\otimes_{\mathbb Z}H)$ for an abelian group $H$, and set
$$B_{\mathrm{st}}^+=\operatorname{Sym}_{\mathbb Q}(E^\times)\otimes_{\operatorname{Sym}_{\mathbb Q}(B^\times)}B_{\mathrm{cris}}^+,\qquad B_{\mathrm{st}}=B_{\mathrm{st}}^+[1/t].$$
The canonical homomorphism $\lambda_{\mathrm{st}}:E^\times\to B_{\mathrm{st}}^+$ extends $\lambda$. For every one $y\in E^\times$ with $w=v_B(y)\ne0$, $X=\lambda_{\mathrm{st}}(y)$ gives $B_{\mathrm{st}}^+=B_{\mathrm{cris}}^+[X]$ and $B_{\mathrm{st}}=B_{\mathrm{cris}}[X]$. There is a unique $B_{\mathrm{cris}}$-linear derivation $N$ with $N\lambda_{\mathrm{st}}(z)=v_B(z)$; it is $w\,d/dX$, is locally nilpotent, and has kernel $B_{\mathrm{cris}}$. Frobenius extends by $\varphi\lambda_{\mathrm{st}}(z)=p\lambda_{\mathrm{st}}(z)$, and $N\varphi=p\varphi N$. The $G_K$-action commutes with both operators. All constructions are independent of the polynomial coordinate and require no Choice axiom. Injectivity of Frobenius and an embedding of $B_{\mathrm{st}}$ into $B_{\mathrm{dR}}$ are separate assertions not made here.

## Facts & Assumptions

**Given:** The valued closure and primitive system. A finite $K\subset F$ is fixed only when stating its Galois action. The notation for normalized tilt valuation means $v_B(x)=v_p(x^\sharp)$, with $v_p(p)=1$.

[F1] All finite $\mathbb Q_p$-embeddings between subfields of $F$ are isometric. [[lem-choice-free-finite-ax-sen-approximation]]

[F2] The ordinary completion is canonically a complete valued field and is canonically identified with the ball completion; its valuation ring is $p$-adically complete. [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

[F3] At that ball completion the tilt is a perfect valuation domain with rational value group and a canonical residue-field section $\omega$, uniquely characterized on each finite residue subfield by $T^{p^m}-T$. [[lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants]]

[F4] The principal Fontaine kernel is $\xi W$ with $\bar\xi=\tau$ of tilt valuation one. The algebraic divided-power ring is $D=W[\xi^m/m!]$. Cyclotomic root valuations are computed by finite geometric sums. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F5] The ring $A_{\mathrm{cris}}$ is $p$-adically complete with regular $p$; the Fontaine map, Frobenius and the convergent $t_{\mathrm{cris}}$ exist, and $\varphi(t)=pt$. [[lem-choice-free-crystalline-period-completion-and-de-rham-map]]

[F6] The rings $A_{\mathrm{cris}}$, $B_{\mathrm{cris}}^+$ and $B_{\mathrm{cris}}$ are embedded domains in the de Rham rings. [[lem-choice-free-completed-crystalline-embedding-in-the-de-rham-ring]]

## Proof

1.1 Transport [F3] across [F2], so it applies to the actual ordinary completion. Each $g\in G_K$ is isometric on $F$ by [F1] and hence acts on $C$ by applying it to a representative Cauchy sequence; the inverse is the extension of $g^{-1}$. Functoriality gives actions on $B$ and $W$ compatible with $\theta$. Since $g$ preserves $\ker\theta$, the description of $D$ by divided powers of every element of that kernel in [F4] shows that $g(D)=D$. The action extends componentwise to $A_{\mathrm{cris}}$ and then to $B_{\mathrm{cris}}^+$. It preserves the valuation and the section $\omega$, by the unique root characterization in [F3]. Witt Frobenius commutes with these actions because its coordinates are characteristic-$p$ powers; the same holds for its extension in [F5]. No topology on the Galois group is needed for these algebraic actions. [F1, F2, F3, F4, F5, given, construct, algebra]

1.2 For $x\in1+\mathfrak m_B$, put $q=[x]-1\in W$. Choose one positive integer $M$ with $M v_B(x-1)\ge p$ (if $x=1$, take $M=1$). In $B$ one has $(x-1)^M=\tau^p b$ for one $b\in B$. Lifting $b$ by its Teichmüller representative gives $q^M-\xi^p[b]\in pW$. Since $\xi^p=p!\gamma_p\in pD$, it follows that $q^M\in pD$. Thus $$q^m/m\ \in\ p^{\lfloor m/M\rfloor-v_p(m)}A_{\mathrm{cris}}.$$ These exponents tend to infinity and have a finite lower bound. All partial logarithmic sums lie in one bounded-denominator copy $p^{-h}A_{\mathrm{cris}}$, which is complete by [F5], so their sum exists in $B_{\mathrm{cris}}^+$. The case $x=1$ is zero. [F4, F5, F6, construct, algebra]

2.1 The logarithm is additive on products. Here is a finite-limit justification. For $q=[x]-1$ and $r=[z]-1$ choose a common $M$ with $q^M,r^M\in pA_{\mathrm{cris}}$ by step 1.2. Any monomial of total degree $d$ in $q,r$ lies in $p^{\lfloor d/M\rfloor-2}A_{\mathrm{cris}}$. The formal identity $\log((1+X)(1+Y))=\log(1+X)+\log(1+Y)$ over $\mathbb Q$ follows by differentiation in both variables and its zero constant term. For its logarithms truncated after degree $L$, the difference polynomial has no total degree at most $L$, and its coefficients have $p$-denominator order at most $\lfloor\log_p L\rfloor$. At $X=q,Y=r$ its error therefore tends to zero, with order at least $\lfloor(L+1)/M\rfloor-2-\lfloor\log_pL\rfloor$. The separate series converge by step 1.2, including the product $xz\in1+\mathfrak m_B$. This proves additivity. Frobenius is $p$-adically continuous by [F5], so applying it to bounded-denominator finite sums gives $\varphi(\log[x])=\log[x^p]=p\log[x]$. The same passage applies to every $g$ in step 1.1. [F5, step 1.1, step 1.2, algebra]

3.1 Each $u\in B^\times$ factors uniquely as $\omega(\bar u)u_1$ with $u_1\in1+\mathfrak m_B$, by [F3]. Multiplication, Frobenius and the Galois action preserve this factorization, since $\omega$ is a field homomorphism characterized by unique roots. Therefore $\lambda(u)=\log[u_1]$ is a homomorphism, is Galois-equivariant and trivial on the constant units, and satisfies $\varphi\lambda(u)=\lambda(u^p)=p\lambda(u)$. The given $\epsilon$ has residue one, so $\lambda(\epsilon)=t$ by the definition in [F5]. [F3, F5, step 1.1, step 2.1, algebra]

4.1 We justify the $\mathbb Z_p$-scalar identity on this logarithm. For $a\in\mathbb Z_p$, define $\epsilon^a$ by its compatible cyclotomic coordinates. The finite root-valuation computation in [F4] shows $v_B(\epsilon^a-1)\ge p/(p-1)$ when $a\ne0$, with equality for $a\in\mathbb Z_p^\times$; if $a=0$ the element is zero. Thus for all $a$, the element $q_a=[\epsilon^a]-1$ satisfies $q_a^{p-1}\in pD$ by step 1.2, uniformly in $a$. For each fixed $s$, the binomial sum $(1+q_a)^{p^j}-1$ lies in $p^sA_{\mathrm{cris}}$ for all sufficiently large $j$, uniformly in $a$. Indeed terms with index $m\ge s(p-1)$ lie there by the power bound, and the remaining finitely many indices satisfy $v_p\binom{p^j}{m}\ge j-v_p(m)$. Hence if integers $a_i$ are the least nonnegative residues of $a$ modulo $p^i$, the actual sequence $[\epsilon^{a_i}]$ converges $p$-adically to $[\epsilon^a]$. The logarithms also converge to $\lambda(\epsilon^a)$: their differences, by step 2.1, are logarithms of $1+d$ with $d\in p^sA_{\mathrm{cris}}$; for $s\ge1$ all terms $d^m/m$ lie in $p^sA_{\mathrm{cris}}$, since $(m-1)s\ge v_p(m)$. The compatible integer residues also define the canonical scalar $a$ in the $p$-complete ring, and finite additivity gives $\lambda(\epsilon^{a_i})=a_i t$. Taking these limits yields $\lambda(\epsilon^a)=a t$. For $g\in G_K$, the unique compatible exponents with $g\epsilon=\epsilon^{\chi_p(g)}$ now give $g(t)=\chi_p(g)t$. In particular the action extends to $B_{\mathrm{cris}}$. [F4, F5, step 1.1, step 1.2, step 2.1, step 3.1, construct, algebra]

5.1 Write the multiplicative abelian groups additively when tensoring with $\mathbb Q$. The valuation gives an exact sequence $B^\times\to E^\times\to\mathbb Q\to0$, with kernel exactly $B^\times$, by [F3]. Tensoring it with $\mathbb Q$ is exact directly: any one tensor or relation uses finitely many denominators, and clearing their common denominator reduces its kernel assertion to the original group sequence. Thus $V=\mathbb Q\otimes E^\times$ contains $V_0=\mathbb Q\otimes B^\times$ with quotient $\mathbb Q$. For one $y$ with $w=v_B(y)\ne0$, its tensor gives a direct decomposition $V=V_0\oplus\mathbb Q y$. Explicitly the component of $z$ in the second summand is $v_B(z)y/w$. The symmetric-algebra universal property gives $\operatorname{Sym}(V)=\operatorname{Sym}(V_0)[X]$ with $X=y$, without choosing a basis of $V_0$: the two inverse maps are induced by this displayed decomposition. Tensoring along $\lambda$ proves the asserted polynomial descriptions, first over $B_{\mathrm{cris}}^+$ and then after inverting $t$. [F3, step 3.1, step 4.1, construct, algebra]

6.1 The symmetric-algebra tensor product has the following explicit universal property: every homomorphism $E^\times\to S$ into the additive group of a $B_{\mathrm{cris}}^+$-algebra, extending $\lambda$ on $B^\times$, extends uniquely to a $B_{\mathrm{cris}}^+$-algebra homomorphism from $B_{\mathrm{st}}^+$. The Galois actions on both factors respect the tensor-product relations by step 3.1 and extend to the localization by step 4.1. The rule $\varphi\lambda_{\mathrm{st}}(z)=p\lambda_{\mathrm{st}}(z)$ respects the same relations, because $\varphi\lambda(u)=p\lambda(u)$ for units. It defines an endomorphism extending crystalline Frobenius, first on $B_{\mathrm{st}}^+$ and then on $B_{\mathrm{st}}$ using $\varphi(t)=pt$. On the polynomial coordinate it is $X\mapsto pX$. It commutes with the Galois action because this is so on both the coefficient ring and every generator $\lambda_{\mathrm{st}}(z)$. No injectivity of crystalline Frobenius is used or concluded. [F5, step 1.1, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 Define $N=w\,d/dX$ on the polynomial ring in step 5.1, killing its coefficient ring. For any $z\in E^\times$, choose integers $n>0,m$ with $v_B(z)/w=m/n$. Then $z^ny^{-m}\in B^\times$, and the tensor relation gives $n\lambda_{\mathrm{st}}(z)=mX+\lambda(z^ny^{-m})$. Thus $N\lambda_{\mathrm{st}}(z)=mw/n=v_B(z)$. This condition uniquely characterizes $N$ on all generators, so it is independent of $y$ and the polynomial coordinate. It is locally nilpotent, and its kernel is the coefficient ring $B_{\mathrm{cris}}$, because the nonzero rational scalars $mw$ occurring in polynomial differentiation are units there. Checking coefficients and $X$ gives $N\varphi=p\varphi N$. Every $g$ preserves the valuation, so the same generator characterization gives $gN=Ng$. All tensor expressions, denominator clearings and derivative checks were finite; no infinite vector-space basis or coefficient selection is used. The remaining semistable-to-de-Rham embedding and Frobenius injectivity require further arguments. [F3, F6, step 5.1, step 6.1, algebra] ∎

## Source notes

The full Brinon–Conrad Lemma9.2.2, Definition9.2.3 and Remarks9.2.4–9.2.5 were read. This proof supplies explicit convergence and finite-truncation errors and uses a displayed one-dimensional splitting rather than asserting a basis for an arbitrary vector space. Its near-unit estimate uses only the already constructed divided powers and the tilt valuation. The cyclotomic scalar-limit argument supplies the actual Galois formula on $t$.

This constructs the full logarithm on tilt units and the abstract semistable polynomial ring/operators at the GIVEN closure and compatible-system input. It does not prove crystalline Frobenius injective, extend ramified scalars into the de Rham ring, or prove the semistable embedding, invariant fields, natural-topology continuity or a generic BMS comparison. Original parent scopes remain unchanged.

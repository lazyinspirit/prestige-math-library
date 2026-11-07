---
id: ex-finite-constant-quadratic-hilbert-symbol
kind: example
title: A quadratic Hilbert symbol over a finite-constant local field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
proof_strategy: direct
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-local-hilbert-symbol-over-field-containing-roots-of-unity
- def-local-artin-reciprocity-map
- thm-local-hilbert-symbol-cup-product-norm-criterion
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition,
      Chapter IV §5.1
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: The local norm-residue symbol and norm-kernel property (5.1), printed pp.143–144.
  - title: Romyar Sharifi, Algebraic Number Theory, Chapter 9 §§9.2–9.3
    url: https://math.ucla.edu/~sharifi/notes/algnum-ch09.html
    locator: Local reciprocity norm criterion and norm-residue symbol, lines 237–277 and 393–415.
verification: {}
axiom_use: ZF with the original named canonical reciprocity map, normalized invariant, character
  property and unramified action supplied as data through the actual Definition chain. No AC/DC-only
  norm converse or choice-free existence theorem is instantiated.
---

## Example

Let $K=\mathbb F_3((t))$ with its $t$-adic valuation, let $K_s$ be a
separable closure, and let $K^{\mathrm{ab}}$ be its maximal abelian
extension. Set $n=2$ and use the local Artin map
$\operatorname{rec}_K:\widehat{K^\times}\to
\operatorname{Gal}(K^{\mathrm{ab}}/K)$ normalized so a uniformizer maps to
arithmetic Frobenius on every finite unramified extension. For
$a=2\in\mathbb F_3^\times\subset K^\times$ and $b=t$, choose
$\beta\in K_s$ with $\beta^2=t$ and define
$$
(a,b)_{K,2}=\operatorname{rec}_K(\bar a)(\beta)/\beta,
$$
where $\bar a$ is the image of $a$ in the profinite completion of $K^\times$.
Then $\mu_2\subset K$, $2$ is prime to $\operatorname{char}K$, and
$$
(2,t)_{K,2}=-1.
$$

## Example references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[[def-local-artin-reciprocity-map]]

## Facts & Assumptions

**Given:** The original Laurent field, closure and named arithmetic Hilbert
symbol, with the supplied canonical data in [F1]'s Definition chain.
No canonicality from normalization alone or ZF existence is inferred.

[F1] The named local Hilbert symbol is the action on a square root. Its
Definition refers to the distinguished canonical Artin map, with supplied
normalized invariant/finite-character property and arithmetic unramified
action. This is the literal named object, not any homomorphism satisfying
only Frobenius normalization.
[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]
[[def-local-artin-reciprocity-map]]

[F2] The protected cup identity holds in ZF for the supplied canonical
map and invariant data. It identifies $(a,b)_{K,2}$ with the normalized
invariant of $\kappa(b)\smile\kappa(a)$, using $\zeta=-1$ and the
specified coefficient pairing. Only that supplied-data identity branch,
not its AC/DC norm-kernel branch, is used.
[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[F3] Continuous cochains use their explicit differential and finite quotient
inflation is composition. The cochain model itself is choice-free.
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

## Verification

**Proof technique:** swap the two quadratic Kummer arguments by explicit
cochains and compute Frobenius on an explicitly complete unramified field.

**Given:** The original Example data; put $u=2$ and $\pi=t$.

1.1 The field has characteristic three, so two is prime to that characteristic and $1,-1$ are distinct square roots of unity in $K$. Its residue field is $\mathbb F_3$, whose only nonzero square is one; thus the unit $u=2$ has nonsquare residue. [given, algebra]

2.1 For the two finite Kummer characters write their uniquely specified $0,1$ exponents as $x_g,y_g$. With $\zeta=-1$, the two swapped cup cocycles after the coefficient pairing are $A(g,h)=(-1)^{x_g y_h}$ and $B(g,h)=(-1)^{y_g x_h}$. The continuous cochain $d(g)=(-1)^{x_g y_g}$ has $\delta d=(AB)^{-1}$, by expanding $(x_g+x_h)(y_g+y_h)$ modulo two. Thus the two cup classes are negatives. Applying the same invariant/coefficient homomorphism in [F2] proves $(u,\pi)_{K,2}(\pi,u)_{K,2}=1$. These are actual finite-valued cochains with trivial $\mu_2$ action, not an imported graded-commutativity or norm-converse theorem. [F1, F2, F3, step 1.1, construct, algebra]

2.2 Take a unit $u$ with nonsquare residue in $k$, choose a root $\beta^2=u$ in the supplied closure, and put $E=K(\beta)$. A square root in $K$ would be a unit with square residue, so $1,\beta$ is a basis of a quadratic field. Define $w(x+y\beta)=\min(v_K(x),v_K(y))$ for nonzero vectors. To check multiplicativity, factor out powers of $\pi$ and reduce the remaining integral vectors in the field $k[T]/(T^2-\bar u)$. Their nonzero residues multiply to a nonzero residue, so $w(zz')=w(z)+w(z')$. The coefficient minimum proves the ultrametric inequality. Its value group is $\mathbb Z$, its valuation ring is $\mathcal O_K+\mathcal O_K\beta$, and its residue field is $k(\bar\beta)$ of degree two. The residue polynomial is separable since its derivative at $\bar\beta$ is $2\bar\beta\ne0$. It is complete because the two coordinate sequences of any given Cauchy sequence converge in complete $K$. These are two uniquely determined limits; no Countable Choice or generic extension-degree theorem has been used. Hence this is an explicitly complete unramified quadratic extension. Here its residue field is the explicitly quadratic field $\mathbb F_3(\bar\beta)$. [given, step 1.1, construct, algebra]

3.1 If $q=|k|$, residue $q$-Frobenius sends $\bar\beta$ to $-\bar\beta$: it permutes the two roots and cannot fix $\bar\beta\notin k$, since the roots of $X^q-X$ are exactly the $q$ elements of $k$. The automorphism $\beta\mapsto-\beta$ preserves $w$ and reduces to that nontrivial residue automorphism. Thus it is the arithmetic Frobenius of this explicitly constructed unramified extension. The supplied unramified action in [F1] gives $(\pi,u)_{K,2}=-1$. The swap already proved gives $(u,\pi)_{K,2}=(-1)^{-1}=-1$. Canonical character data entered through [F2]; Frobenius normalization alone would not justify this swap. This is exactly $(2,t)_{K,2}=-1$ as claimed. [F1, F2, step 2.1, step 2.2, algebra]

4.1 For the separate non-norm check in $K(\alpha)$ with $\alpha^2=\pi$, odd valuation of $\pi$ proves irreducibility and multiplication by $x+y\alpha$ in the basis $1,\alpha$ has matrix $\begin{pmatrix}x&\pi y\\y&x\end{pmatrix}$, giving the norm $N(x+y\alpha)=x^2-\pi y^2$ by its determinant. The two summand valuations $2v_K(x)$ and $1+2v_K(y)$ have opposite parity when finite, so cannot cancel; zero coordinates cause no exception. If this norm is a unit, its valuation is zero, forcing $v_K(x)=0$ and $v_K(y)\ge0$. Its residue is therefore $\bar x^2$, so a nonsquare residue unit cannot be a norm. This direct norm polynomial is an independent consistency check; it is not used as a converse norm theorem to obtain the symbol value. It also verifies directly the original displayed non-norm interpretation for $u=2$. The value itself was proved in step 3.1 from the literal supplied canonical data, so no AC/DC norm-kernel or existence theorem is hidden in this verification. [step 1.1, step 3.1, given, algebra] ∎

---
id: ex-hilbert-symbol-over-a-rational-completion-reused
kind: example
title: Rational quadratic reciprocity at the primes 3 and 5
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
proof_strategy: direct
deps:
- def-hilbert-symbol-over-a-rational-completion
- def-local-hilbert-symbol-over-field-containing-roots-of-unity
- def-local-artin-reciprocity-map
- thm-local-hilbert-symbol-cup-product-norm-criterion
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter III §4
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: The local Hilbert symbol and norm criterion, Theorem 4.4(d), printed p.114.
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition,
      Chapter IV §5.1
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: The norm-kernel property (5.1)(5), printed pp.143–144.
verification: {}
axiom_use: ZF with the original named canonical reciprocity map, normalized invariant, character
  property and unramified action supplied as data through the actual Definition chain. No AC/DC-only
  norm converse or choice-free existence theorem is instantiated.
---

## Example

For an odd prime $q$, let $\mathbb Q_q$ be the completion of $\mathbb Q$
for the $q$-adic absolute value, let $\mathbb Q_q^{\mathrm{ab}}$ be its
maximal abelian extension in a fixed separable closure, and use
$\operatorname{rec}_{\mathbb Q_q}:\widehat{\mathbb Q_q^\times}\to
\operatorname{Gal}(\mathbb Q_q^{\mathrm{ab}}/\mathbb Q_q)$ normalized so a
uniformizer maps to arithmetic Frobenius on every finite unramified
extension. For $x,y\in\mathbb Q_q^\times$, define
$$(x,y)_{\mathbb Q_q,2} =\operatorname{rec}_{\mathbb Q_q}(\bar x)(\sqrt y)/\sqrt y,$$
where $\bar x$ is the image of $x$ in the profinite completion. For an
integer $c$ not divisible by $q$, write $(c/q)=1$ if its residue class is a
square in $\mathbb F_q^\times$ and $(c/q)=-1$ otherwise. Then
$$(5/3)=(3/5)=-1,$$
and the corresponding local symbols satisfy
$$(5,3)_{\mathbb Q_3,2}=(3,5)_{\mathbb Q_5,2}=-1.$$
Thus the two odd-prime local factors agree in this $3,5$ instance of rational
quadratic reciprocity. The older rational-completion Hilbert symbol of
$(c,d)$ is $1$ exactly when $cX^2+dY^2=1$ has a solution in $\mathbb Q_q$;
it gives the same two values.

## Example references

[[def-hilbert-symbol-over-a-rational-completion]]

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[[def-local-artin-reciprocity-map]]

## Facts & Assumptions

**Given:** The original two completions, closures and named Hilbert symbols.
The canonical data are supplied through [F1]'s literal Definition chain;
no choice-free existence or canonicality from normalization alone is inferred.

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

[F4] The older rational-completion symbol is one precisely when
$cx^2+dy^2=1$ has a solution in $\mathbb Q_q$.
[[def-hilbert-symbol-over-a-rational-completion]]

## Verification

**Proof technique:** use a supplied-data cup swap and an explicitly
unramified quadratic field, then verify the finite conic tests directly.

**Given:** The original Example data. In the following take either
$(K,u,\pi)=(\mathbb Q_3,5,3)$ or $(\mathbb Q_5,3,5)$.

1.1 The nonzero squares in $\mathbb F_3$ are $\{1\}$, and those in $\mathbb F_5$ are $\{1,4\}$. Thus $5\bmod3=2$ and $3\bmod5=3$ are nonsquares, proving $(5/3)=(3/5)=-1$ by the original Legendre convention. In both cases $\operatorname{char}K=0$ and $\mu_2=\{1,-1\}\subset K$. [given, algebra]

2.1 For the two finite Kummer characters write their uniquely specified $0,1$ exponents as $x_g,y_g$. With $\zeta=-1$, the two swapped cup cocycles after the coefficient pairing are $A(g,h)=(-1)^{x_g y_h}$ and $B(g,h)=(-1)^{y_g x_h}$. The continuous cochain $d(g)=(-1)^{x_g y_g}$ has $\delta d=(AB)^{-1}$, by expanding $(x_g+x_h)(y_g+y_h)$ modulo two. Thus the two cup classes are negatives. Applying the same invariant/coefficient homomorphism in [F2] proves $(u,\pi)_{K,2}(\pi,u)_{K,2}=1$. These are actual finite-valued cochains with trivial $\mu_2$ action, not an imported graded-commutativity or norm-converse theorem. [F1, F2, F3, step 1.1, construct, algebra]

2.2 Take a unit $u$ with nonsquare residue in $k$, choose a root $\beta^2=u$ in the supplied closure, and put $E=K(\beta)$. A square root in $K$ would be a unit with square residue, so $1,\beta$ is a basis of a quadratic field. Define $w(x+y\beta)=\min(v_K(x),v_K(y))$ for nonzero vectors. To check multiplicativity, factor out powers of $\pi$ and reduce the remaining integral vectors in the field $k[T]/(T^2-\bar u)$. Their nonzero residues multiply to a nonzero residue, so $w(zz')=w(z)+w(z')$. The coefficient minimum proves the ultrametric inequality. Its value group is $\mathbb Z$, its valuation ring is $\mathcal O_K+\mathcal O_K\beta$, and its residue field is $k(\bar\beta)$ of degree two. The residue polynomial is separable since its derivative at $\bar\beta$ is $2\bar\beta\ne0$. It is complete because the two coordinate sequences of any given Cauchy sequence converge in complete $K$. These are two uniquely determined limits; no Countable Choice or generic extension-degree theorem has been used. Hence this is an explicitly complete unramified quadratic extension. [given, step 1.1, construct, algebra]

2.3 For the separate non-norm check in $K(\alpha)$ with $\alpha^2=\pi$, odd valuation of $\pi$ proves irreducibility and multiplication by $x+y\alpha$ in the basis $1,\alpha$ has matrix $\begin{pmatrix}x&\pi y\\y&x\end{pmatrix}$, giving the norm $N(x+y\alpha)=x^2-\pi y^2$ by its determinant. The two summand valuations $2v_K(x)$ and $1+2v_K(y)$ have opposite parity when finite, so cannot cancel; zero coordinates cause no exception. If this norm is a unit, its valuation is zero, forcing $v_K(x)=0$ and $v_K(y)\ge0$. Its residue is therefore $\bar x^2$, so a nonsquare residue unit cannot be a norm. This direct norm polynomial is an independent consistency check; it is not used as a converse norm theorem to obtain the symbol value. [step 1.1, given, algebra]

3.1 If $q=|k|$, residue $q$-Frobenius sends $\bar\beta$ to $-\bar\beta$: it permutes the two roots and cannot fix $\bar\beta\notin k$, since the roots of $X^q-X$ are exactly the $q$ elements of $k$. The automorphism $\beta\mapsto-\beta$ preserves $w$ and reduces to that nontrivial residue automorphism. Thus it is the arithmetic Frobenius of this explicitly constructed unramified extension. The supplied unramified action in [F1] gives $(\pi,u)_{K,2}=-1$. The swap already proved gives $(u,\pi)_{K,2}=(-1)^{-1}=-1$. Canonical character data entered through [F2]; Frobenius normalization alone would not justify this swap. Consequently $(5,3)_{\mathbb Q_3,2}=(3,5)_{\mathbb Q_5,2}=-1$. [F1, F2, step 2.1, step 2.2, algebra]

4.1 If $5x^2+3y^2=1$ in $\mathbb Q_3$, the summand valuations $2v_3(x)$ and $1+2v_3(y)$ have opposite parity. A negative minimum would remain the valuation of their sum, so both variables are integral. Reduction would give $2\bar x^2=1$ in $\mathbb F_3$, impossible. Likewise $3x^2+5y^2=1$ in $\mathbb Q_5$ forces integral coordinates and $3\bar x^2=1$, or $\bar x^2=2$, impossible in $\mathbb F_5$. Thus the older conic symbols are both $-1$ by [F4]. Together with steps 1.1 and 3.1 this proves the full original Example, including agreement of both conventions in these two cases, without an AC/DC-only norm converse. [F4, step 1.1, step 3.1, given, algebra] ∎

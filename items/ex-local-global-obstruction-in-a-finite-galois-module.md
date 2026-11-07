---
id: ex-local-global-obstruction-in-a-finite-galois-module
kind: example
title: "A nonzero localization kernel for a finite Galois module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-absolute-galois-group-of-a-field
  - def-absolute-galois-group-of-a-global-field
  - def-absolute-galois-group-of-a-local-field
  - def-completion-of-a-global-field-at-a-place
  - def-countable-choice
  - def-dependent-choice
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-finite-galois-module-and-cartier-dual
  - def-place-of-a-global-field
  - thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
  - thm-p-adic-newton-criterion
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-ramified-primes-and-the-number-field-discriminant
  - thm-ring-of-integers-of-a-quadratic-field
  - cor-discriminant-of-a-quadratic-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Dvornicich and U. Zannier, An analogue for elliptic curves of the Grunwald–Wang example"
      url: "https://www.numdam.org/item/CRMATH_2004__338_1_47_0.pdf"
      locator: "§2, pp. 48–49: the explicit V4 representation and cocycle, local cyclic-subgroup criterion, and all-place elliptic-curve realization."
    - title: "Brendan Creutz, On the local-global principle for divisibility in the cohomology of elliptic curves, arXiv:1305.5881"
      url: "https://arxiv.org/pdf/1305.5881"
      locator: "§2 and §3, arXiv HTML lines 26–50 and 101–116: Kummer connecting maps and a complete 2-primary local obstruction example."
verification:
  precheck: pass
---

## Example

Assume AC, DC, and Countable Choice. Let
$K=\mathbb Q(\sqrt2,\sqrt{17})$ and identify
$G=\operatorname{Gal}(K/\mathbb Q)$ with $(\mathbb Z/2\mathbb Z)^2$ by
$\sigma_{x,y}(\sqrt2)=(-1)^x\sqrt2$ and
$\sigma_{x,y}(\sqrt{17})=(-1)^y\sqrt{17}$. Put
$M=(\mathbb Z/4\mathbb Z)^2$, written as column vectors, and let the absolute
Galois group $G_{\mathbb Q}$ act through its quotient $G$ by
$$\rho(\sigma_{x,y})=I_2+2\begin{pmatrix}x&y\\x+y&x+y\end{pmatrix}\pmod4,$$
where $x,y$ and the matrix entries are read in $\mathbb Z/2\mathbb Z$ before
the displayed matrix is reduced modulo $4$. Define
$z:G\to M$ by $z(\sigma_{x,y})=(2y,0)^T$. Its inflation to $G_{\mathbb Q}$
represents a nonzero class in
$$X^1(\mathbb Q,M):=\ker\!\left(H^1_{\mathrm{cont}}(G_{\mathbb Q},M)\longrightarrow\prod_v H^1_{\mathrm{cont}}(G_{\mathbb Q_v},M)\right),$$
where $v$ ranges over all rational places and the maps are restrictions under
fixed compatible embeddings. Thus this finite Galois module has a nonzero
all-place local-global obstruction in degree one.

## Example references

[[def-absolute-galois-group-of-a-field]]

[[def-absolute-galois-group-of-a-global-field]]

[[def-absolute-galois-group-of-a-local-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-finite-galois-module-and-cartier-dual]]

[[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]

[[thm-p-adic-newton-criterion]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[thm-ramified-primes-and-the-number-field-discriminant]]

[[thm-ring-of-integers-of-a-quadratic-field]]

[[cor-discriminant-of-a-quadratic-field]]

[R. Dvornicich and U. Zannier, *An analogue for elliptic curves of the Grunwald–Wang example*, §2](https://www.numdam.org/item/CRMATH_2004__338_1_47_0.pdf)

[Brendan Creutz, *On the local-global principle for divisibility in the cohomology of elliptic curves*, §§2–3](https://arxiv.org/pdf/1305.5881)

## Facts & Assumptions

**Given:** AC, DC, $K=\mathbb Q(\sqrt2,\sqrt{17})$, $G=\operatorname{Gal}(K/\mathbb Q)$, and the finite module and cocycle defined in the Statement.

[A1] The Axiom of Choice is included for the finite-residue local Galois suppliers used below. [[def-axiom-of-choice]]

[A2] Dependent Choice is included for the continuous-cohomology convention used below. [[def-dependent-choice]]

[A3] Countable Choice is included for the completion and finite-residue local-field interfaces. [[def-countable-choice]]

[F1] A finite Galois module is a finite discrete abelian group with a continuous left action of the absolute Galois group. [[def-finite-galois-module-and-cartier-dual]]

[F2] The absolute Galois group is the profinite automorphism group of a separable closure, and restriction to a finite Galois subextension is surjective. [[def-absolute-galois-group-of-a-field]] [[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]

[F3] Continuous first cohomology is the group of continuous cocycles modulo coboundaries. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F4] For squarefree $d\ne1$, the quadratic field discriminant is $d$ when $d\equiv1\pmod4$ and $4d$ otherwise. [[thm-ring-of-integers-of-a-quadratic-field]] [[cor-discriminant-of-a-quadratic-field]]

[F5] A rational prime ramifies in a number field exactly when it divides that field's discriminant. [[thm-ramified-primes-and-the-number-field-discriminant]]

[F6] If $f\in\mathbb Z_p[X]$ and $a\in\mathbb Z_p$ satisfy $|f(a)|_p<|f'(a)|_p^2$, Newton iteration gives a root in $\mathbb Q_p$. [[thm-p-adic-newton-criterion]]

[F7] Every finite extension of finite fields is Galois with cyclic group generated by Frobenius. [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[F8] Finite unramified extensions of a nonarchimedean local field correspond to finite residue-field extensions; reduction identifies their Galois groups with the residue Galois groups. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Proof

**Proof technique:** explicit finite-group cohomology and a place-by-place analysis of the decomposition subgroups.

**Given:** The data in the Statement.

1.1 The classes of $2$ and $17$ are independent in $\mathbb Q^\times/(\mathbb Q^\times)^2$: neither is a square, and their product $34$ has odd $2$-adic valuation. Hence adjoining their square roots gives a degree-four biquadratic extension with the four sign automorphisms $\sigma_{x,y}$. [F2, given, algebra]

2.1 The quadratic subfields have discriminants $8$ and $17$ by [F4]. By [F5], each is unramified at finite primes $p\ne2,17$. At such a prime, each completion is either $\mathbb Q_p$ or an unramified quadratic extension. By uniqueness in [F8], any two nontrivial such completions inside a fixed separable closure coincide: they are $\mathbb Q_p$-isomorphic and normal, so every $\mathbb Q_p$-embedding has the same image. Their compositum is therefore unramified, proving that $K/\mathbb Q$ is unramified at $p$. At $2$, Newton's criterion [F6] applied to $X^2-17$ at $1$ gives a square root of $17$ in $\mathbb Q_2$, since $|1-17|_2=2^{-4}<2^{-2}=|2|_2^2$; $2$ is not a square in $\mathbb Q_2$ because its valuation is odd. Thus the local extension at $2$ has degree two. At $17$, applying [F6] to $X^2-2$ at $6$ gives a square root of $2$ in $\mathbb Q_{17}$, since $|36-2|_{17}=17^{-1}<1=|12|_{17}^2$; $17$ is not a square there because its valuation is odd. Thus the local extension at $17$ also has degree two. At the real place both radicands are positive, so the local decomposition group is trivial. [F4, F5, F6, F8, step 1.1, algebra]

2.2 Put $A(x,y)=\begin{pmatrix}x&y\\x+y&x+y\end{pmatrix}$ over $\mathbb Z/2\mathbb Z$. Since $(I+2A)(I+2B)=I+2(A+B)$ modulo $4$, the formula $\rho(\sigma_{x,y})=I+2A(x,y)$ is a homomorphism; each matrix is invertible because its square is $I$ modulo $4$. The value $z(\sigma_{x,y})$ lies in $2M$, on which every $\rho(g)$ acts trivially. For $g=\sigma_{x,y}$ and $h=\sigma_{x',y'}$, $z(gh)=(2((y+y')\bmod2),0)^T=(2y+2y',0)^T=z(g)+z(h)$ modulo $4$. Hence $z(gh)=z(g)+g z(h)$, so $z$ is a $1$-cocycle, with values $0,(2,0)^T,(2,0)^T$ on $a=\sigma_{1,0}$, $b=\sigma_{0,1}$, and $c=\sigma_{1,1}$, respectively. [F1, step 1.1, given, algebra]

3.1 At every finite prime other than $2$ and $17$, the local extension is unramified by step 2.1. The local decomposition subgroup is the Galois group of that finite unramified local extension; by [F8] it is isomorphic to the Galois group of a finite residue-field extension, which is cyclic by [F7]. Together with step 2.1, every local decomposition subgroup is trivial or one of the three order-two subgroups of $G$. [F7, F8, step 2.1]

3.2 Suppose $z$ were a global coboundary, say $z(g)=gm-m$ for $m=(u,v)^T\in(\mathbb Z/4\mathbb Z)^2$. The equation at $a$ gives $(2u,2u+2v)=(0,0)$ modulo $4$, so $u$ and $v$ are both even. Then $bm-m=(2v,2u+2v)=(0,0)$ modulo $4$, contradicting $z(b)=(2,0)^T$. Hence $[z]\ne0$ in $H^1(G,M)$. [step 2.2, algebra]

4.1 The restriction to $\langle a\rangle$ is the zero cocycle. For $b$, the vector $m=(1,1)^T$ satisfies $bm-m=(2,0)^T=z(b)$; for $c$, $m=(1,0)^T$ satisfies $cm-m=(2,0)^T=z(c)$. These are coboundaries on the corresponding order-two subgroups. By step 3.1 every local decomposition subgroup is one of these or trivial, so every local restriction of the inflated cocycle is a coboundary. [step 3.1, step 2.2, algebra]

5.1 Restriction from $G_{\mathbb Q}$ onto $G$ is surjective by [F2]. If the inflated cocycle were a coboundary on $G_{\mathbb Q}$, its restriction along this surjection would make $z$ a coboundary, contrary to step 3.2. At each place, the local absolute Galois group maps onto its decomposition subgroup; step 4.1 makes the restricted class zero there. Thus the inflated class is nonzero globally and zero in every local $H^1$, proving the Statement. [F2, F3, step 4.1, step 3.2] ∎

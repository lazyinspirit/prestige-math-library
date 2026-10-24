---
id: "lem-differentials-base-change"
kind: "lemma"
title: "Kähler differentials commute with scalar base change"
status: published
origin: "pipeline"
deps: ["cor-derivations-represented-by-differentials", "thm-universal-property-of-module-tensor-products", "thm-coproduct-property-of-tensor-products-of-commutative-algebras", "def-derivation-algebra"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.131.12"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §22.2.K, p.583"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $A\to B$ and $A\to A'$ be homomorphisms of commutative rings, and put
$B'=B\otimes_{A}A'$, so that $B\to B'$, $b\mapsto b\otimes1$, is a ring map and
$B'$ is an $A'$-algebra. Then the canonical $B'$-linear map

$$\Omega_{B/A}\otimes_{B}B'\longrightarrow\Omega_{B'/A'}, \qquad \mathrm{d}b\otimes a'\longmapsto a'\,\mathrm{d}(b\otimes1),$$

is an isomorphism. It is natural in the base-change data $A\to A'$, and it does
**not** assert that $\Omega_{B/A}$ is unchanged under an arbitrary ring map
$B\to C$ that is not one of these base-change maps.

## Facts & Assumptions

**Given:** Ring homomorphisms $A\to B$ and $A\to A'$, the ring $B'=B\otimes_{A}A'$ and the canonical map $b\mapsto b\otimes1$.

[F1] [[cor-derivations-represented-by-differentials]]: for every ring map $R\to S$ with Kähler differential module $(\Omega_{S/R},\mathrm{d})$ and every $S$-module $N$, composition with $\mathrm{d}$ is a natural $S$-module isomorphism $\operatorname{Hom}_S(\Omega_{S/R},N)\cong\operatorname{Der}_R(S,N)$.

[F2] [[thm-universal-property-of-module-tensor-products]]: for a balanced map $b\colon M\times N\to X$ out of a right $R$-module $M$ and a left $R$-module $N$ there is a unique group homomorphism $\overline b\colon M\otimes_RN\to X$ with $\overline b(m\otimes n)=b(m,n)$.

[F3] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]: $B'=B\otimes_AA'$ is the coproduct of the two commutative $A$-algebras, so there is a unique $A$-algebra structure in which $b\mapsto b\otimes1$ and $a'\mapsto1\otimes a'$ are $A$-algebra maps, and the pure tensors $b\otimes a'$ generate $B'$ as an $A'$-algebra.

[F4] [[def-derivation-algebra]]: derivations are additive, constant on the base and satisfy the Leibniz rule; a $B'$-module map out of $\Omega_{B'/A'}$ is determined by its values on a generating set of $\Omega_{B'/A'}$.

## Proof

1.1 Restriction and extension of derivations. Let $M$ be a $B'$-module. Restriction along $b\mapsto b\otimes1$ sends a derivation in $\operatorname{Der}_{A'}(B',M)$ to an element of $\operatorname{Der}_A(B,M)$, because the composite is additive, $A$-constant and satisfies Leibniz. Conversely, given $D\in\operatorname{Der}_A(B,M)$, the map $\beta_D\colon B\times A'\to M$, $\beta_D(b,a'):=a'D(b)$, is $A$-bilinear: it is additive in each variable and $\beta_D(\alpha b,a')=a'\alpha D(b)=\beta_D(b,\alpha a')$ for $\alpha\in A$. By [F2] it factors through a group homomorphism $\widetilde D\colon B'\to M$ with $\widetilde D(b\otimes a')=a'D(b)$; this is $A'$-linear because $\widetilde D((b\otimes a')a'')=a'a''D(b)=a''\widetilde D(b\otimes a')$, and it is a derivation, since $\widetilde D\bigl((b\otimes a')(b'\otimes c')\bigr)=a'c'D(bb')=a'c'\bigl(bD(b')+b'D(b)\bigr)=(b\otimes a')\widetilde D(b'\otimes c')+(b'\otimes c')\widetilde D(b\otimes a')$. Also $\widetilde D(1\otimes a')=a'D(1)=0$, so $\widetilde D$ is $A'$-constant. The two assignments are inverse: restriction of $\widetilde D$ gives $b\mapsto D(b)$, and an extension of a restricted derivation agrees with $\widetilde D$ on the pure tensors $b\otimes a'$, which generate $B'$ over $A'$ by [F3]. So restriction is a natural bijection $\operatorname{Der}_{A'}(B',M)\cong\operatorname{Der}_A(B,M)$ for every $B'$-module $M$. [F2, F3, F4]

1.2 The canonical map. The composite $B\to B'\xrightarrow{\mathrm{d}'}\Omega_{B'/A'}$ is an $A$-derivation of $B$ into the $B'$-module $\Omega_{B'/A'}$, so by [F1] it corresponds to a $B$-linear $\rho\colon\Omega_{B/A}\to\Omega_{B'/A'}$ with $\rho(\mathrm{d}b)=\mathrm{d}'(b\otimes1)$. The map $\Omega_{B/A}\times B'\to\Omega_{B'/A'}$, $(\omega,b')\mapsto b'\rho(\omega)$, is $B$-balanced, so by [F2] it factors through a group homomorphism $\alpha\colon\Omega_{B/A}\otimes_BB'\to\Omega_{B'/A'}$ with $\alpha(\mathrm{d}b\otimes a')=a'\,\mathrm{d}'(b\otimes1)$; it is $B'$-linear by construction. [F1, F2, F4]

2.1 The inverse map. Let $N:=\Omega_{B/A}\otimes_BB'$, a $B'$-module, and let $D\colon B\to N$ be $D(b):=\mathrm{d}b\otimes1$; this is an $A$-derivation, since $b\mapsto\mathrm{d}b$ is one and $-\otimes1$ is additive. By step 1.1 there is a unique $A'$-derivation $\widetilde D\colon B'\to N$ with $\widetilde D(b\otimes1)=D(b)$ and $\widetilde D(b\otimes a')=a'( \mathrm{d}b\otimes1)$. By [F1] applied to $A'\to B'$ it corresponds to a $B'$-linear map $\beta\colon\Omega_{B'/A'}\to N$ with $\beta(\mathrm{d}'(b\otimes a'))=a'(\mathrm{d}b\otimes1)$. [step 1.1, F1, F4]

3.1 The maps are inverse. On the one hand $\beta(\alpha(\mathrm{d}b\otimes a'))=\beta(a'\mathrm{d}'(b\otimes1))=a'(\mathrm{d}b\otimes1)=\mathrm{d}b\otimes a'$, and the elements $\mathrm{d}b\otimes a'$ generate $\Omega_{B/A}\otimes_BB'$ over $B'$ because the elements $\mathrm{d}b$ generate $\Omega_{B/A}$ over $B$; hence $\beta\circ\alpha=\mathrm{id}$. On the other hand $\alpha(\beta(\mathrm{d}'(b\otimes a')))=\alpha(a'(\mathrm{d}b\otimes1))=a'\mathrm{d}'(b\otimes1)=\mathrm{d}'(b\otimes a')$, where the last equality uses $b\otimes a'=(b\otimes1)(1\otimes a')$, the Leibniz rule and $\mathrm{d}'(1\otimes a')=0$; since the elements $\mathrm{d}'(b\otimes a')$ generate $\Omega_{B'/A'}$ over $B'$ by [F3] and [F4], we get $\alpha\circ\beta=\mathrm{id}$. Hence $\alpha$ is an isomorphism. The construction used only the given base-change maps, so no statement is made about an arbitrary ring map $B\to C$. [step 1.2, step 2.1, F3, F4] ∎

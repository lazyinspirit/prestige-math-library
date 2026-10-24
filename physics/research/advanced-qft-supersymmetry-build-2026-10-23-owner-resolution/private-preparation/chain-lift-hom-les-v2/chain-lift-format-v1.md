---
id: lem-qftx-positive-real-monad-chain-lift
kind: lemma
title: Unique chain lifting and sigma-Hermitian monad duality
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - lem-qftx-positive-real-monad-analytic-twist-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  lem-qftx-positive-real-monad-analytic-twist-cohomology: mathematical-premise
axiom_base: "ZF + full AC inherited through the analytic scalar-cohomology input; the finite matrix duality is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. Barth and K. Hulek, Monads and Moduli of Vector Bundles"
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf
      locator: "Section 3, Proposition 4, printed pp. 331–332; Section 4, Propositions 5–6, printed pp. 333–334. Their self-duality statements are bilinear orthogonal/symplectic statements; the sigma-Hermitian extension is proved here."
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique"
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: "Theorems 1–3, §§12–17, printed pp. 19–27, comparison context only; the conditional analytic twist input is separately declared."
verification:
  precheck: pending
---

## Statement

Let $\mathbb P^3(\mathbb C)$ carry the antiholomorphic coordinate involution $\sigma([\lambda_1:\lambda_2:\mu_1:\mu_2])=[-\bar\lambda_2:\bar\lambda_1:-\bar\mu_2:\bar\mu_1]$. A linear monad is a locally split exact complex at its ends
$$
\mathcal O(-1)\otimes U\xrightarrow{\alpha}\mathcal O\otimes S\xrightarrow{\beta}\mathcal O(1)\otimes U'
$$
with locally free middle cohomology $F=\ker\beta/\operatorname{im}\alpha$, where $U,S,U'$ are finite-dimensional complex vector spaces. For a degree-one matrix $P(z)$ put $P^\#(z)=P(jz)^\dagger$ and define the signed dual monad $D(M):(U')^*\otimes\mathcal O(-1)\xrightarrow{-\beta^\#}S^*\otimes\mathcal O\xrightarrow{\alpha^\#}U^*\otimes\mathcal O(1)$; its cohomology is denoted $D(F)$, and dualizing twice uses $(P^\#)^\#=-P$ and $D^2(M)=M$. By a nondegenerate holomorphic $\sigma$-Hermitian self-pairing we mean an isomorphism $h_F:F\to D(F)$ that is linear in its first variable, conjugate-linear in its second, and fixed by this bidual operation. Assume $H^0(\mathbb P^3,\mathcal O)=\mathbb C$, $H^q(\mathbb P^3,\mathcal O(-1))=0$ for every $q\ge0$, and $H^q(\mathbb P^3,\mathcal O(-2))=0$ for $q=0,1,2$. For any two such monads, every holomorphic morphism of their middle cohomology bundles lifts to a unique constant chain map between the monads. In particular, for a monad with a nondegenerate holomorphic $\sigma$-Hermitian self-pairing, the unique lift is a chain isomorphism with Hermitian middle map $H=H^\dagger$ and normalized identities
$$
\beta(z)=\alpha(jz)^\dagger H,\qquad \beta(jz)^\dagger=-H\alpha(z),
$$
where $j(\lambda_1,\lambda_2,\mu_1,\mu_2)=(-\bar\lambda_2,\bar\lambda_1,-\bar\mu_2,\bar\mu_1)$ and the end spaces are identified by the lifted pairing.

## Statement references

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

[Barth–Hulek, Section 3, Proposition 4](https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf)

[Serre, Theorems 1–3, §§12–17](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

## Facts & Assumptions

**Given:** The linear monads, their locally free middle cohomology bundles, a holomorphic morphism of the cohomologies, and the conditional analytic vanishings in the Statement.

[A1] AC is adopted as required by the analytic sheaf-cohomology supplier. [[def-axiom-of-choice]]

[F1] A holomorphic vector bundle is locally trivial with holomorphic transition maps; a Hermitian pairing is linear in its first variable and conjugate-linear in its second. [[def-complex-manifolds-and-holomorphic-vector-bundles]]

[F2] The conditional analytic twist result gives $H^0(\mathbb P^3,\mathcal O)=\mathbb C$, $H^q(\mathbb P^3,\mathcal O(-1))=0$ for all $q\ge0$, and $H^q(\mathbb P^3,\mathcal O(-2))=0$ for $q=0,1,2$. [[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

## Proof

**Given:** Two monads $M=(U,S,U',\alpha,\beta)$ and $M'=(U_1,S_1,U_1',\alpha',\beta')$ as in the Statement and a holomorphic map $f:F\to F'$.

1.1 Put $K=\ker\beta$ and $K'=\ker\beta'$. Local split exactness gives short exact sequences of holomorphic vector bundles
$$0\to K\to S\otimes\mathcal O\to U'\otimes\mathcal O(1)\to0,\qquad 0\to U\otimes\mathcal O(-1)\to K\to F\to0$$
and the corresponding primed sequences. [given, F1, construct]

1.2 Pull back $0\to U_1\otimes\mathcal O(-1)\to K'\to F'\to0$ along $K\to F\xrightarrow f F'$. Its extension obstruction and ambiguity are respectively
$H^1(K^*\otimes U_1\otimes\mathcal O(-1))$ and $H^0(K^*\otimes U_1\otimes\mathcal O(-1))$. Dualizing the first sequence of step 1.1 and tensoring by $U_1\otimes\mathcal O(-1)$ gives
$$
0\to (U')^*\otimes U_1\otimes\mathcal O(-2)\to S^*\otimes U_1\otimes\mathcal O(-1)\to K^*\otimes U_1\otimes\mathcal O(-1)\to0.
$$
The long exact sequence and [F2] make both groups zero, so the lift $\phi:K\to K'$ exists and is unique. [A1, F2, step 1.1, algebra]

1.3 Extend $\phi$ across $K\hookrightarrow S\otimes\mathcal O$ using $0\to K'\to S_1\otimes\mathcal O\to U_1'\otimes\mathcal O(1)\to0$. The obstruction and ambiguity are $H^1((U')^*\otimes S_1\otimes\mathcal O(-1))$ and $H^0((U')^*\otimes S_1\otimes\mathcal O(-1))$, both zero by [F2]. Hence there is a unique middle map $g:S\otimes\mathcal O\to S_1\otimes\mathcal O$ extending $\phi$. [F2, step 1.1, algebra]

1.4 The restriction $g\alpha$ lands in $\operatorname{im}\alpha'$ because its class in $F'$ is $f$ applied to the zero class of $\alpha$. Since $\alpha'$ is injective, this defines a unique map $p:U\otimes\mathcal O(-1)\to U_1\otimes\mathcal O(-1)$. Since $\beta'g$ vanishes on $K$, it factors uniquely through $(S\otimes\mathcal O)/K\cong U'\otimes\mathcal O(1)$, defining the third chain map. The chain equations hold by construction. Every matrix entry of these maps is a global holomorphic section of $\mathcal O$, hence is constant by [F2]. Any other lift agrees on $K$ by step 1.2 and on $S$ by step 1.3; injectivity of $\alpha'$ and surjectivity of $\beta$ then force equality of both end maps. [F2, step 1.2, step 1.3, algebra]

2.1 For a degree-one matrix $P(z)$ set $P^\#(z)=P(jz)^\dagger$. Since $j$ is antilinear and $j^2=-1$, $P^\#$ is holomorphic linear and $(P^\#)^\#=-P$. With $D(\alpha,\beta)=(-\beta^\#,\alpha^\#)$, direct substitution gives $D^2(\alpha,\beta)=(-(\alpha^\#)^\#,(-\beta^\#)^\#)=(\alpha,\beta)$. The signed dual monad is
$$
D(M):\ (U')^*\otimes\mathcal O(-1)\xrightarrow{-\beta^\#}S^*\otimes\mathcal O\xrightarrow{\alpha^\#}U^*\otimes\mathcal O(1).
$$
A $\sigma$-Hermitian self-pairing is a bundle isomorphism $h_F:F\to D(F)$ fixed by this bidual operation. [given, F1, algebra]

2.2 By step 1.4, $h_F$ has a unique chain lift $h=(p,H,r):M\to D(M)$. The displayed diagram records its two chain equations; it is notation only, and the equations and uniqueness are established in the text.
Thus the squares assert $H\alpha=-\beta^\#p$ and $r\beta=\alpha^\#H$. Its dual $D(h)$ lifts the same self-pairing, so uniqueness gives $h=D(h)$; in particular $H=H^\dagger$ and the end maps are adjoints under the pairing's identifications. The lift is an isomorphism: lift $h_F^{-1}$ by step 1.4 and use uniqueness to identify both composites with the identity lift. The middle map $H$ is therefore nondegenerate. In bases identifying the end spaces by this lift, the chain equation is $H\alpha(z)=-\beta(jz)^\dagger$. Replacing $z$ by $jz$ and using linearity in homogeneous coordinates yields both displayed identities in the Statement. [F1, F2, step 1.4, step 2.1, algebra] ∎

## Remarks

The diagram referred to in step 2.2 is reproduced below. Its commutative squares record the textual chain equations established there; the proof is independent of this illustration.

```tikzcd
\begin{tikzcd}[column sep=large]
U\otimes\mathcal O(-1) \arrow[r,"\alpha"] \arrow[d,"p"'] &
S\otimes\mathcal O \arrow[r,"\beta"] \arrow[d,"H"] &
U'\otimes\mathcal O(1) \arrow[d,"r"]\\
(U')^*\otimes\mathcal O(-1) \arrow[r,"-\beta^\#"'] &
S^*\otimes\mathcal O \arrow[r,"\alpha^\#"'] &
U^*\otimes\mathcal O(1)
\end{tikzcd}
```

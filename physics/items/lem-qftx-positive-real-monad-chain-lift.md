---
id: lem-qftx-positive-real-monad-chain-lift
kind: lemma
title: Unique chain lifting and sigma-Hermitian monad duality
status: "published"
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
  - thm-long-exact-sequence-sheaf-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  lem-qftx-positive-real-monad-analytic-twist-cohomology: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
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
with locally free middle cohomology $F=\ker\beta/\operatorname{im}\alpha$, where $U,S,U'$ are finite-dimensional complex vector spaces. Write all coefficient matrices in fixed bases, with $P^\dagger=\overline P^T$. For a degree-one matrix $P(z)$ put $P^\#(z)=P(jz)^\dagger$ and define the signed dual monad $D(M):(\overline{U'})^\vee\otimes\mathcal O(-1)\xrightarrow{-\beta^\#}(\overline S)^\vee\otimes\mathcal O\xrightarrow{\alpha^\#}(\overline U)^\vee\otimes\mathcal O(1)$; its cohomology identifies with $D(F):=(\sigma^*\overline F)^\vee$, the holomorphic dual of the pullback of the conjugate bundle, and dualizing twice uses $(P^\#)^\#=-P$ and $D^2(M)=M$. By a nondegenerate holomorphic $\sigma$-Hermitian self-pairing we mean an isomorphism $h_F:F\to D(F)$ that is linear in its first variable, conjugate-linear in its second, and fixed by this bidual operation. Assume $H^0(\mathbb P^3,\mathcal O)=\mathbb C$, $H^q(\mathbb P^3,\mathcal O(-1))=0$ for every $q\ge0$, and $H^q(\mathbb P^3,\mathcal O(-2))=0$ for $q=0,1,2$. For any two such monads, every holomorphic morphism of their middle cohomology bundles lifts to a unique constant chain map between the monads. In particular, for a monad with a nondegenerate holomorphic $\sigma$-Hermitian self-pairing, the unique lift is a chain isomorphism with Hermitian middle map $H=H^\dagger$ and normalized identities
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

[F2] The analytic twist result gives $H^q(\mathbb P^3,\mathcal O(-1))=0$ for all $q\ge0$ and $H^q(\mathbb P^3,\mathcal O(-2))=0$ for $q=0,1,2$. The separate equality $H^0(\mathbb P^3,\mathcal O)=\mathbb C$ is an explicit hypothesis of the Statement. [[lem-qftx-positive-real-monad-analytic-twist-cohomology]]

[F3] Under AC, a short exact sequence of abelian sheaves gives the natural long exact sequence of the same supplied sheaf cohomology, independently of the injective resolutions used. [[thm-long-exact-sequence-sheaf-cohomology]]

## Proof

**Given:** Two monads $M=(U,S,U',\alpha,\beta)$ and $M'=(U_1,S_1,U_1',\alpha',\beta')$ as in the Statement and a holomorphic map $f:F\to F'$.

1.1 Put $K=\ker\beta$ and $K'=\ker\beta'$. Local split exactness gives short exact sequences of holomorphic vector bundles
$$0\to K\to S\otimes\mathcal O\to U'\otimes\mathcal O(1)\to0,\qquad 0\to U\otimes\mathcal O(-1)\to K\to F\to0$$
and the corresponding primed sequences. [given, F1, construct]

1.2 For a degree-one matrix $P(z)$ set $P^\#(z)=P(jz)^\dagger$. Since $j$ is antilinear and $j^2=-1$, $P^\#$ is holomorphic linear and $(P^\#)^\#=-P$. With $D(\alpha,\beta)=(-\beta^\#,\alpha^\#)$, direct substitution gives $D^2(\alpha,\beta)=(-(\alpha^\#)^\#,(-\beta^\#)^\#)=(\alpha,\beta)$. The signed dual monad is
$$
D(M):\ (\overline{U'})^\vee\otimes\mathcal O(-1)\xrightarrow{-\beta^\#}(\overline S)^\vee\otimes\mathcal O\xrightarrow{\alpha^\#}(\overline U)^\vee\otimes\mathcal O(1).
$$
Here $(\overline E)^\vee$ is the complex-linear dual of the conjugate coefficient space; $\dagger$ is the matrix of this conjugate-dual operation in the chosen bases. Ordinary duals in the Hom calculations below are denoted $E^*$. A $\sigma$-Hermitian self-pairing is a bundle isomorphism $h_F:F\to D(F)$ fixed by this bidual operation. [given, F1, algebra]

2.1 For holomorphic vector bundles $E,T$, define $\mathcal{H}om(E,T)$ on an open set to consist of holomorphic fiberwise complex-linear bundle maps. In the frames of [F1] these are holomorphic matrices, transforming by the target transition matrix on the left and the inverse source transition matrix on the right; this identifies $\mathcal{H}om(E,T)=E^*\otimes T$. Split local frames show that $\mathcal{H}om$ preserves each locally split short exact bundle sequence, covariantly in its second variable and contravariantly in its first. Degree-zero sheaf cohomology is global sections by the kernel at the start of an injective resolution, so $H^0(\mathcal{H}om(E,T))=\operatorname{Hom}_{\mathrm{hol}}(E,T)$. Finite constant coefficient factors give finite direct sums, whose cohomology is the corresponding finite sum: finite sums of injective sheaves remain injective since $\operatorname{Hom}(-,\bigoplus_j I_j)=\bigoplus_j\operatorname{Hom}(-,I_j)$ for finitely many $j$; taking a finite direct sum of injective resolutions and applying the additive global-sections functor proves the assertion, with independence from the supplied replacement by [F3]. Put $T=U_1\otimes\mathcal O(-1)$ and $\mathcal A=\mathcal{H}om(K,T)=K^*\otimes U_1\otimes\mathcal O(-1)$. Dualizing the unprimed first sequence in step 1.1 and tensoring by $T$ gives $$0\to (U')^*\otimes U_1\otimes\mathcal O(-2)\to S^*\otimes U_1\otimes\mathcal O(-1)\to K^*\otimes U_1\otimes\mathcal O(-1)\to0.$$ By [F2] and the finite-sum observation, the middle sheaf has zero $H^0,H^1$ and the left sheaf has zero $H^1,H^2$. The long exact sequence [F3] therefore gives $H^0(\mathcal A)=H^1(\mathcal A)=0$. Apply $\mathcal{H}om(K,-)$ to the locally split primed second sequence of step 1.1 to obtain $0\to\mathcal A\to\mathcal{H}om(K,K')\to\mathcal{H}om(K,F')\to0$. Its long exact sequence [F3] has segment $0\to H^0(\mathcal A)\to\operatorname{Hom}_{\mathrm{hol}}(K,K')\to\operatorname{Hom}_{\mathrm{hol}}(K,F')\to H^1(\mathcal A)$. Both outer groups vanish, so the indicated map is bijective. Consequently the specified composite $K\to F\xrightarrow f F'$ has a unique holomorphic lift $\phi:K\to K'$. [A1, F1, F2, F3, step 1.1, construct, algebra]

3.1 Set $T=S_1\otimes\mathcal O$ and compose $\phi:K\to K'$ with the primed inclusion $K'\hookrightarrow T$. To extend this map across the unprimed inclusion $K\hookrightarrow S\otimes\mathcal O$, apply $\mathcal{H}om(-,T)$ to the unprimed first sequence of step 1.1. Its local splitting and the frame calculation in step 2.1 give $0\to\mathcal B\to\mathcal{H}om(S\otimes\mathcal O,T)\to\mathcal{H}om(K,T)\to0$, where $\mathcal B=\mathcal{H}om(U'\otimes\mathcal O(1),T)=(U')^*\otimes S_1\otimes\mathcal O(-1)$. The finite-coefficient vanishings [F2] give $H^0(\mathcal B)=H^1(\mathcal B)=0$. The long exact sequence [F3] therefore makes the restriction map $\operatorname{Hom}_{\mathrm{hol}}(S\otimes\mathcal O,T)\to\operatorname{Hom}_{\mathrm{hol}}(K,T)$ bijective. It follows that there is a unique holomorphic middle map $g:S\otimes\mathcal O\to S_1\otimes\mathcal O$ whose restriction to $K$ is the inclusion composed with $\phi$. [A1, F2, F3, step 1.1, step 2.1, algebra]

4.1 The restriction $g\alpha$ lands in $\operatorname{im}\alpha'$ because its class in $F'$ is $f$ applied to the zero class of $\alpha$. Since $\alpha'$ is injective, this defines a unique map $p:U\otimes\mathcal O(-1)\to U_1\otimes\mathcal O(-1)$. Since $\beta'g$ vanishes on $K$, it factors uniquely through $(S\otimes\mathcal O)/K\cong U'\otimes\mathcal O(1)$, defining the third chain map. The chain equations hold by construction. Every matrix entry of these maps is a global holomorphic section of $\mathcal O$, hence is constant by the stated hypothesis $H^0(\mathbb P^3,\mathcal O)=\mathbb C$. Any other lift agrees on $K$ by step 2.1 and on $S$ by step 3.1; injectivity of $\alpha'$ and surjectivity of $\beta$ then force equality of both end maps. [given, step 2.1, step 3.1, algebra]

5.1 By step 4.1, $h_F$ has a unique chain lift $h=(p,H,r):M\to D(M)$. The displayed diagram records its two chain equations; it is notation only, and the equations and uniqueness are established in the text. Thus the squares assert $H\alpha=-\beta^\#p$ and $r\beta=\alpha^\#H$. Its dual $D(h)$ lifts the same self-pairing, so uniqueness gives $h=D(h)$; in particular $H=H^\dagger$ and the end maps are adjoints under the pairing's identifications. The lift is an isomorphism: lift $h_F^{-1}$ by step 4.1 and use uniqueness to identify both composites with the identity lift. The middle map $H$ is therefore nondegenerate. In bases identifying the end spaces by this lift, the chain equation is $H\alpha(z)=-\beta(jz)^\dagger$. Replacing $z$ by $jz$ and using linearity in homogeneous coordinates yields both displayed identities in the Statement. [F1, F2, step 4.1, step 1.2, algebra] ∎

## Remarks

The diagram referred to in step 5.1 is reproduced below. Its commutative squares record the textual chain equations established there; the proof is independent of this illustration.

```tikzcd
\begin{tikzcd}[column sep=large]
U\otimes\mathcal O(-1) \arrow[r,"\alpha"] \arrow[d,"p"'] &
S\otimes\mathcal O \arrow[r,"\beta"] \arrow[d,"H"] &
U'\otimes\mathcal O(1) \arrow[d,"r"]\\
(\overline{U'})^\vee\otimes\mathcal O(-1) \arrow[r,"-\beta^\#"'] &
(\overline S)^\vee\otimes\mathcal O \arrow[r,"\alpha^\#"'] &
(\overline U)^\vee\otimes\mathcal O(1)
\end{tikzcd}
```

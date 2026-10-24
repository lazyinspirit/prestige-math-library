---
id: thm-finite-etale-algebras-invariant-under-nilpotent-thickening
kind: theorem
title: "Finite étale algebras lift uniquely through nilpotent thickenings"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - lem-finite-etale-algebra-module-presentation-and-rank
  - lem-finite-etale-separability-and-hochschild-contraction
  - thm-etale-formally-etale-finite-presentation
  - lem-differentials-base-change
  - cor-nakayama-generators-modulo-an-ideal
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-30.md"
      - "research/frontier-38-owner-30-alpha-batch-30-5a.md"
      - "research/frontier-38-owner-30-step5-hash-30-post-5a.json"
    content_sha256: "6625f594bdee9ab3ab8de0b666d7e00ce58f1238a4ad18fa99c806ec6047a9b5"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé I §8 and Exposé IX §1; étale lifting through nilpotent ideals"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Étale Morphisms §15, Theorems 15.1–15.2; alternate separability proof expanded here"
      url: https://stacks.math.columbia.edu/download/etale.pdf
---

## Statement

Assume AC. For a commutative ring $A$ and a nilpotent ideal $I\subseteq A$, reduction gives an equivalence from finite étale $A$-algebras to finite étale $A/I$-algebras. Thus every such algebra lifts, and every map between reductions lifts uniquely. This is equivalence of algebras, or contravariantly of finite étale affine covers; it asserts no algebraization on a nonaffine proper scheme.

## Facts & Assumptions

**Given:** AC, $A$, nilpotent $I$, and a finite étale algebra $D_0$ over $A/I$.

[F1] Finite étale algebras are finite projective and are characterized by finite presentation, flatness and vanishing differentials ([[lem-finite-etale-algebra-module-presentation-and-rank]]). Their positive Hochschild cochains admit the explicit contraction $h$ of [[lem-finite-etale-separability-and-hochschild-contraction]].

[F2] Étale algebras lift ring maps uniquely through square-zero ideals, hence through nilpotent ideals by successive lifting ([[thm-etale-formally-etale-finite-presentation]]). Differentials commute with base change; Nakayama detects zero finite modules modulo an ideal in the Jacobson radical ([[lem-differentials-base-change]], [[cor-nakayama-generators-modulo-an-ideal]]).

[F3] AC is assumed through the suppliers in [F1]–[F2] ([[def-axiom-of-choice]]); the algebra lifting uses only finite projective splittings and finite sums after those suppliers are available.

## Proof

1.1 First assume $I^2=0$. Lift the finite projective module $D_0$ to a finite projective $A$-module $P$. Explicitly, write $D_0$ as the image of an idempotent matrix over $A/I$, lift that matrix to $p$, and put $\epsilon=p^2-p$. Then $p$ commutes with $\epsilon$, $\epsilon^2=0$, and $p'=p+(1-2p)\epsilon$ has $(p')^2=p'$ and the same reduction; take $P=\operatorname{im}p'$. The locus where $D_0$ has rank zero is open and closed by [F1]; its idempotent lifts by the same scalar formula. On that factor lift by zero. On the complementary factor the unit of $D_0$ is unimodular: at every prime it is a nonzero unit in a nonzero fibre algebra, so the ideal of its values under the dual module is the unit ideal. Hence it admits a functional $\lambda_0$ with $\lambda_0(1)=1$. Lift the unit to $u\in P$ and the functional to $\lambda:P\to A$ by projectivity. Since $\lambda(u)$ reduces to $1$ and $I$ is nilpotent it is invertible; rescale $\lambda$ so that $\lambda(u)=1$. Thus $P=Au\oplus\ker\lambda$. [F1, construct, algebra]

2.1 Lift the multiplication on $D_0$ to an $A$-bilinear multiplication $\mu$ on $P$ with unit $u$. Set the products involving $u$ as required by the unit, and lift the product on $\ker\lambda\otimes_A\ker\lambda$ using its projectivity. Its associator $a(v,w,z)=\mu(\mu(v,w),z)-\mu(v,\mu(w,z))$ takes values in $IP$. It vanishes if any input is $u$ and factors through $D_0$ in each input, because $I^2=0$. The left and right $D_0$-actions on $IP$ are well-defined from the reduced multiplication. Expanding the five terms of $\delta a$ shows that they cancel: each nested triple product occurs twice with opposite signs, while changing brackets inside a term involving $a$ is harmless modulo $I^2$. Thus $a$ is a normalized Hochschild $3$-cocycle. By [F1], $b=ha$ is a normalized $2$-cochain with $\delta b=a$. Replace $\mu$ by $\mu+b$, interpreting $b$ as a map $P\otimes_A P\to IP$. The new associator is $a-\delta b=0$; terms involving two values of $b$ vanish because $I^2=0$. The unit is preserved by normalization. [F1, step 1.1, algebra]

3.1 The associative lifted algebra is commutative. For each $v\in P$, the inner derivation $w\mapsto vw-wv$ has values in $IP$, vanishes on $IP$, and hence defines a derivation $D_0\to IP$. The bimodule $IP$ is symmetric, since its actions come from the commutative reduced algebra. By [F1], every $1$-cocycle is the coboundary of an element of this bimodule, and such a coboundary is $w\mapsto wm-mw=0$. Thus the inner derivation vanishes. The lifted algebra is finite projective as a module and therefore finitely presented and flat. Its finite module of differentials reduces to $\Omega_{D_0/(A/I)}=0$ by [F2]; nilpotence, or Nakayama, makes it zero. By [F1] the lifted algebra is finite étale. [F1, F2, step 1.1, step 2.1, algebra]

4.1 If $I^N=0$, lift successively through $A/I^{j+1}\to A/I^j$ for $1\le j<N$; each kernel is square-zero because $2j\ge j+1$. Steps 1.1, 2.1 and 3.1 give existence at each stage. Given two finite étale lifts and a map between their reductions, apply the unique infinitesimal lifting in [F2] to the source algebra and to the nilpotent quotient of the target algebra. This yields one and only one algebra map upstairs. Identities and compositions are preserved by uniqueness, proving full faithfulness. Together with existence this proves the equivalence. The AC use is exactly the inherited use in [F3]. [F1, F2, F3, step 3.1] ∎

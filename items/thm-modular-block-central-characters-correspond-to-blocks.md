---
id: thm-modular-block-central-characters-correspond-to-blocks
kind: theorem
title: Modular block central characters correspond to blocks
deps: ["def-p-blocks-by-primitive-central-idempotents", "def-block-bimodule-for-the-double-group", "def-splitting-p-modular-system-for-a-finite-group"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Martínez, Representation Theory of Finite Groups, Theorem 2.11, p. 15
      url: https://www.uv.es/jomimar8/pdfs/course%20notes.pdf
    - title: Craven, The Brauer Correspondence, central-character setup, pp. 4–6
      url: https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For the residue field $k$ of a splitting $p$-modular system for finite $G$, the unital $k$-algebra homomorphisms $Z(kG)\to k$ are in bijection with the primitive central block idempotents. The homomorphism $\lambda_b$ for $b$ is uniquely characterized by $\lambda_b(b)=1$ and $\lambda_b(c)=0$ for every other block idempotent $c$.

## Facts & Assumptions

**Given:** The stated splitting system and finite group.

[F1] The finite orthogonal block decomposition is [[def-p-blocks-by-primitive-central-idempotents]].

[F2] For $B=kGb$, the center $Z(B)=bZ(kG)$ is local, with its unique maximal ideal consisting of nilpotents, by [[def-block-bimodule-for-the-double-group]].

[F3] [[def-splitting-p-modular-system-for-a-finite-group]] supplies scalar endomorphism rings for simple $kG$-modules.

## Proof

1.1 Let $\lambda:Z(kG)\to k$ be a unital $k$-algebra homomorphism. Each block idempotent maps to an idempotent of a field, hence zero or one. Orthogonality prevents two values from being one, and their sum is one by F1, so exactly one value is one, at an idempotent $b$. For any $z$, $\lambda(z)=\lambda(bz)$; thus $\lambda$ factors through the single center $Z(B)$. [F1, algebra]

1.2 Fix a block $B\ne0$. Among dimensions of proper left ideals of $B$ there is a largest, since zero is proper and dimensions are integers less than $\dim_k B$. A left ideal of that dimension is maximal, and its quotient $S$ is a nonzero simple $B$-module. Extending the action through $kG\to B$ makes it a simple $kG$-module. Each $z\in Z(B)$ acts as a module endomorphism of $S$, hence as a unique scalar by F3. These scalars define a unital $k$-algebra map $\chi:Z(B)\to k$. It is surjective because scalar multiples of $b$ act by those scalars. [F1, F3, algebra]

2.1 The kernel of $\chi$ is a maximal ideal and therefore is F2's unique maximal ideal $J$. Any other unital $k$-algebra map from $Z(B)$ to $k$ has the same kernel. For $z\in Z(B)$, step 1.2 gives $z-\chi(z)b\in J$, so that map must send $z$ to $\chi(z)$. Thus $\chi$ is independent of $S$ and is the unique such map. Extending by $\lambda_b(z)=\chi(bz)$ and using step 1.1 proves the bijection and the stated characterization. The group algebra is nonzero, so its block set is not empty; a sole block gives a sole map. Selecting one finite-dimensional ideal for an existence proof uses no AC. [F1, F2, step 1.1, step 1.2, algebra] ∎

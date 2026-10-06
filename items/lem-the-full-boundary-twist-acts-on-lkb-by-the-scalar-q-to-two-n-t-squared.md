---
id: lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared
kind: lemma
title: The full boundary twist acts on LKB by the scalar q to two n t squared
status: published
origin: pipeline
deps: [def-lawrence-krammer-bigelow-representation, thm-the-integral-lkb-module-is-free-of-rank-n-choose-two, def-axiom-of-choice]
justified_by: []
aliases: []
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Krammer, Braid groups are linear, Ann. of Math. 155 (2002) 131-156"
      url: "https://arxiv.org/pdf/math/0405198"
      locator: "Lemma 3.2, printed p. 142: Delta x_{n+1-j,n+1-i} = tq^{i+j-1} x_{ij}"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 4.2, printed pp. 12-13: the fraction-field isomorphism between the matrix model and H_2(C-tilde), and the parameter translation t_Krammer = -t_Bigelow"
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 3.2, printed p. 482, final paragraph: <N_1,F> = -q and <N,(Delta^2)^k(F)> = -q(q^{2n}t^2)^k in the source's sign convention"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-16.md"
      - "research/frontier-38-owner-30-alpha-batch-16-5a.md"
      - "research/frontier-38-owner-30-step5-hash-16-post.json"
    reviewed_raw_sha256: "5ea9656fa438bb11006672f4ad5ff16bc12ff49aa77209bc7f4e5a7c9fc82c0c"
    content_sha256: "05e064b6816c686903e571471db53a8d720421944b9ed4e0d4eadcc7dddebd8a"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

Assume AC. Let $\Delta^2$ be the full twist of $B_n$ and let
$\rho_{\mathrm{LKB}}$ be the representation of
[[def-lawrence-krammer-bigelow-representation]]. Then the normalized lift of
$\Delta^2$ acts on the absolute module $H_2(\widetilde C;\mathbb Z)$ by the
scalar $q^{2n}t^2$:
$$\rho_{\mathrm{LKB}}(\Delta^2)=q^{2n}t^2\operatorname{id}, \qquad \rho_{\mathrm{LKB}}(\Delta^{2k})=q^{2nk}t^{2k}\operatorname{id} \ \ (k\in\mathbb Z).$$
For $n\ge2$, the scalar $q^{2nk}t^{2k}$ equals the identity of
$\mathrm{GL}_{\binom n2}(\Lambda)$ only for $k=0$. Equivalently, in Krammer's
fraction-field model with basis $x_{ij}$ one has
$\Delta x_{n+1-j,n+1-i}=tq^{i+j-1}x_{ij}$, and applying this identity twice
multiplies every basis element by $t^2q^{2n}$. For $n=1$ the absolute module is zero and every scalar induces its identity; the detection clause is not asserted in that rank.

## Facts & Assumptions

**Given:** the full twist $\Delta^2$ of $B_n$, the representation $\rho_{\mathrm{LKB}}$ of [[def-lawrence-krammer-bigelow-representation]], and the Krammer fraction-field model $V=\bigoplus_{i<j}\Lambda x_{i,j}$ of Krammer's seven-case formula (Krammer 2002, Section 3).

[F1] (Krammer 2002, Lemma 3.2.) In the fraction-field model over $\Lambda\subseteq K=\mathbb Q(q,t)$ one has $\Delta x_{n+1-j,n+1-i}=tq^{i+j-1}x_{ij}$ for all $1\le i<j\le n$.

[F2] [[thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]] together with Bigelow 2002, Section 4.2: the natural map $H_2(\widetilde C;\mathbb Z)\to K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$ is injective, and there is a $B_n$-module isomorphism $K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)\cong K\otimes_\Lambda V$ after extending scalars; the two integral lattices are not identified.

[F3] Bigelow 2001, Section 3.2 (final paragraph) records the geometric check $\langle N_1,F\rangle=-q$ and $\langle N,(\Delta^2)^k(F)\rangle=-q(q^{2n}t^2)^k$ in the source's sign convention, exhibiting the same scalar $q^{2n}t^2$.



## Proof

1.1 For $n=1$ the representation definition supplies the zero absolute module; all stated action identities hold there, without detecting any exponent. For the remaining proof assume $n\ge2$. The scalar identity in the fraction-field model. Fix $1\le i<j\le n$ and write $i'=n+1-j$, $j'=n+1-i$, so that $1\le i'<j'\le n$ and the assignment $(i,j)\mapsto(i',j')$ is an involution of the set of pairs. Applying [F1] to the pair $(i,j)$ gives $\Delta x_{i'j'}=tq^{i+j-1}x_{ij}$; applying [F1] to the pair $(i',j')$ gives $\Delta x_{ij}=tq^{i'+j'-1}x_{i'j'}$, because the pair associated with $(i,j)$ is again $(i',j')$. Combining the two identities, $$\Delta^2x_{i'j'}=\Delta\bigl(tq^{i+j-1}x_{ij}\bigr) =tq^{i+j-1}\Delta x_{ij} =tq^{i+j-1}\cdot tq^{i'+j'-1}x_{i'j'} =t^2q^{2n}x_{i'j'},$$ since $i'+j'=2n+2-i-j$, so $i+j-1+i'+j'-1=(i+j)+(i'+j')-2=2n$. As $(i',j')$ runs over all pairs, every basis element of the fraction-field model is an eigenvector of $\Delta^2$ with eigenvalue $t^2q^{2n}$, so $(\rho_K(\Delta))^2=t^2q^{2n}\operatorname{id}$, a matrix identity whose entries lie in $\Lambda$. [F1, given, algebra]

2.1 Transfer to the absolute integral module. By [F2] the scalar extension $K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$ is isomorphic to $K\otimes_\Lambda V$ as a $B_n$-module, and the isomorphism intertwines the two actions of $\Delta^2$. Hence step 1.1 shows that $\Delta^2$ acts on $K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$ by the scalar $q^{2n}t^2$. Let $x\in H_2(\widetilde C;\mathbb Z)$. The normalized lift of $\Delta^2$ gives $\rho_{\mathrm{LKB}}(\Delta^2)x\in H_2(\widetilde C;\mathbb Z)$ because the action preserves the integral lattice, and by definition of the scalar extension its image in $K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$ equals $q^{2n}t^2$ times the image of $x$. Both classes lie in the image of the integral lattice, and the natural map is injective by [F2]; therefore $\rho_{\mathrm{LKB}}(\Delta^2)x=q^{2n}t^2x$ already in $H_2(\widetilde C;\mathbb Z)$. As $x$ was arbitrary, $\rho_{\mathrm{LKB}}(\Delta^2)=q^{2n}t^2\operatorname{id}$. [F2, step 1.1, algebra]

3.1 Powers and nontriviality. Multiplying the scalar identity, for every $k\ge0$ one has $\rho_{\mathrm{LKB}}(\Delta^{2k})=(q^{2n}t^2)^k \operatorname{id}=q^{2nk}t^{2k}\operatorname{id}$; the same identity with $k=-1$ follows by inverting the scalar $q^{2n}t^2$, and inverting again gives the stated formula for every $k\in\mathbb Z$. Since $n\ge2$, the free module has a nonzero basis vector. If $q^{2nk}t^{2k}$ were the identity matrix, equality on that vector would imply the two Laurent monomials $q^{2nk}t^{2k}$ and $q^0t^0=1$ would be equal in $\Lambda$; distinct monomials with distinct exponent vectors are distinct elements of $\Lambda$, so $(2nk,2k)=(0,0)$ and $k=0$. [step 2.1, algebra]

4.1 The Bigelow sign convention. The source's geometric computation [F3] exhibits the eigenvalue of $(\Delta^2)^k$ on the class of the standard $N_1$-fork as a unit multiple of $(q^{2n}t^2)^k$; the two computations agree on the scalar $q^{2n}t^2$ and differ only in the fixed unit contributed by the normalization of the pairing, which is immaterial for the matrix identity above. [F3, step 3.1, algebra] ∎

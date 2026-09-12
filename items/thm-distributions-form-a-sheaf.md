---
id: "thm-distributions-form-a-sheaf"
kind: "theorem"
title: "Distributions form a sheaf"
deps: ["def-distribution", "thm-local-finite-order-characterization-of-distributions", "def-multiplication-of-a-distribution-by-a-smooth-function", "lem-test-function-cutoffs-and-euclidean-localization"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For an open inclusion $V\subseteq\Omega$, restriction of a distribution is defined by testing on the smooth zero extension of a test in $\mathcal D(V)$. These restrictions are distributions and compose as restrictions do for functions. For any open cover $(U_j)_{j\in J}$ of $\Omega$, distributions $u_j\in\mathcal D'(U_j)$ agreeing on every overlap glue to a unique $u\in\mathcal D'(\Omega)$. This holds in ZF for an arbitrary index set $J$.

## Facts & Assumptions

[F1] Distributions are complex-linear continuous test functionals ([[def-distribution]]).

[F2] Continuity is equivalent to a finite-order estimate on each fixed compact support ([[thm-local-finite-order-characterization-of-distributions]]).

[F3] Multiplication by a smooth function preserves tests; its derivative estimates follow from the finite product rule used to justify [[def-multiplication-of-a-distribution-by-a-smooth-function]].

[F4] Every open cover has an at most countable locally finite smooth partition with compact supports, each support contained in some cover member, without selecting labels ([[lem-test-function-cutoffs-and-euclidean-localization]]).

## Proof

**Given:** the cover and compatible family in the statement.

1.1 For $V\subseteq\Omega$ and $\varphi\in\mathcal D(V)$, its support is compactly inside $V$, so extension by zero is smooth on $\Omega$. On each compact $K\subseteq V$ its derivative seminorms are unchanged. The bound of F2 for $u$ on $K$ therefore gives that bound for its restriction; this proves restriction is a distribution. Testing successive zero extensions proves composition and identity of restrictions. [given, F1, F2]

2.1 Take the partition $(\eta_\ell)$ of F4. For each $\ell$ and each test $\varphi$, the test $\eta_\ell\varphi$ has compact support inside any member containing $\operatorname{supp}\eta_\ell$. Its evaluation by that member's distribution is independent of the member: two such members overlap on its support, so compatibility applies. Denote this uniquely specified number by $v_\ell(\varphi)$; this definition selects no labels. Set $u(\varphi)=\sum_\ell v_\ell(\varphi)$. Only finitely many partition supports meet $\operatorname{supp}\varphi$: local finiteness provides neighborhoods meeting finitely many supports, and a finite subcover of the compact support suffices. Thus the sum exists. Applying the same finite set to the union of two test supports proves complex linearity. [step 1.1, given, F4]

3.1 Fix compact $K\subseteq\Omega$. Only finitely many partition supports meet $K$. For these finitely many indices take containing cover members and their finite-order bounds on the compact supports of the corresponding $\eta_\ell$. Finite choices are provable by finite induction in ZF. Let $m$ be the maximum of their orders, or zero if none occur. The finite product rule gives [step 2.1, F2, F3]
$$p_m(\eta_\ell\varphi)\le 2^m\max_{|\gamma|\le m}\sup_{\operatorname{supp}\eta_\ell}|\partial^\gamma\eta_\ell|\ p_m(\varphi)\quad(\varphi\in\mathcal D_K),$$
where derivatives of $\varphi$ vanish off $K$. Summing the finitely many bounds yields $|u(\varphi)|\le C_Kp_m(\varphi)$ with finite $C_K$. Hence $u$ is a distribution by F2. [step 2.1, F2, F3]

4.1 If $\varphi\in\mathcal D(U_j)$, every nonzero summand is evaluated on a test with compact support in $U_j$ and a containing cover member. Compatibility makes it $u_j(\eta_\ell\varphi)$. The finite sum is $u_j(\varphi)$ since $\sum\eta_\ell=1$. Thus the restrictions are the prescribed ones. If a distribution $w$ restricts to zero on each $U_j$, the same finite decomposition gives $w(\varphi)=\sum w(\eta_\ell\varphi)=0$ for every test. Applying this to the difference of two glued distributions proves uniqueness, and therefore independence of the partition. For the empty cover of the empty domain the sum defines the zero distribution and uniqueness still holds. $\square$ [step 3.1, step 2.1, step 1.1, F1, F4]

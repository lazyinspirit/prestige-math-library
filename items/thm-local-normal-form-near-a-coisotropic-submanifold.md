---
id: thm-local-normal-form-near-a-coisotropic-submanifold
kind: theorem
title: Local normal form near a coisotropic submanifold
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-characteristic-distribution-of-a-coisotropic-submanifold-is-involutive", "thm-frobenius-local-coordinate-theorem", "cor-every-vector-subbundle-has-a-smooth-complement", "thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold", "lem-relative-poincare-primitive-near-a-submanifold", "thm-relative-moser-theorem"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Definition 5.16, Theorem 5.18 and special case (a), pp. 63--65
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 9, coisotropic embedding classification, p. 53
verification:
  audited: 2026-09-14
  precheck: pass
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For $j=0,1$, let
$i_j:C_j\hookrightarrow(M_j,\omega_j)$ be a closed coisotropic embedding.
If $f:C_0\to C_1$ is a diffeomorphism satisfying
$f^*i_1^*\omega_1=i_0^*\omega_0$, then $f$ extends to a symplectomorphism
between neighbourhoods of $C_0$ and $C_1$. Thus the presymplectic form on a
coisotropic submanifold, whose kernel is its characteristic distribution,
determines the local symplectic germ.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the two coisotropic embeddings and map in the statement.

[F1] The characteristic bundle $K=\ker(i^*\omega)$ is smooth and involutive. [[prop-characteristic-distribution-of-a-coisotropic-submanifold-is-involutive]].

[F2] An involutive constant-rank distribution has foliation coordinates. [[thm-frobenius-local-coordinate-theorem]].

[F3] Every smooth vector subbundle has a smooth complement. [[cor-every-vector-subbundle-has-a-smooth-complement]].

[F4] Under $\mathrm{AC}_\omega$, closed embeddings have tubular neighbourhoods, and relative Moser corrects forms agreeing along the embedded submanifold. [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[lem-relative-poincare-primitive-near-a-submanifold]], [[thm-relative-moser-theorem]].

## Proof

**Proof technique:** direct.

1.1 By [F1]--[F2], $K_j$ integrates locally to the characteristic foliation. The equality of restricted forms gives $df(K_0)=K_1$. By [F3], choose a smooth complement $E_0$ to $K_0$ in $TC_0$ and put $E_1=df(E_0)$. Each $E_j$ is symplectic: if $e\in E_j$ is orthogonal to $E_j$, it is also orthogonal to $K_j$ because $K_j=TC_j^{\omega_j}$, hence to all of $TC_j$; thus $e\in K_j\cap E_j=0$. Consequently $$TM_j|_{C_j}=E_j\oplus S_j,\qquad S_j=E_j^{\omega_j},$$ where $S_j$ is a smooth symplectic subbundle of rank $2\operatorname{rank}K_j$ and $K_j\subset S_j$ is Lagrangian. Smoothness follows locally by solving the constant-rank linear equations defining the symplectic orthogonal. [F1, F2, F3, given, algebra]

2.1 Choose by [F3] a smooth complement $G_j$ to $K_j$ in $S_j$. The pairing $K_j\times G_j\to\mathbb R$, $(k,g)\mapsto\omega_j(k,g)$, is nondegenerate. There is therefore a unique smooth bundle map $T_j:G_j\to K_j$ satisfying $$\omega_j(T_jg,h)=-\tfrac12\omega_j(g,h)\qquad(g,h\in G_j).$$ For $G'_j=\{g+T_jg:g\in G_j\}$, skew-symmetry gives $$\omega_j(g+T_jg,h+T_jh) =\omega_j(g,h)-\tfrac12\omega_j(g,h) +\tfrac12\omega_j(h,g)=0.$$ Thus $S_j=K_j\oplus G'_j$ is a Lagrangian splitting. Define $A:G'_0\to G'_1$ by the nondegenerate-pairing condition $$\omega_1(df(k),A(g))=\omega_0(k,g)\qquad(k\in K_0).$$ It is a smooth bundle isomorphism. The map equal to $df$ on $E_0\oplus K_0$ and to $A$ on $G'_0$ preserves the symplectic form on every summand and cross-pairing, hence is a symplectic bundle isomorphism $TM_0|_{C_0}\to TM_1|_{C_1}$ extending $df$. [F3, step 1.1, algebra]

3.1 The quotient maps identify the chosen complements $G'_j$ with the quotient normal bundles. Apply the tubular construction in [F4] using these complements: explicitly, in the proof of that construction replace the orthogonal complement by $G'_j$ in the normal-addition map. Its derivative at $(x,0)$ is then $(u,g)\mapsto di_j(u)+g$; the same inverse-function and variable-radius shrinking argument produces a tubular diffeomorphism $\Psi_j$ with that derivative. The bundle map induced by $A:G'_0\to G'_1$ therefore gives $$h=\Psi_1\circ A\circ\Psi_0^{-1},$$ a diffeomorphism between neighbourhoods extending $f$ with $dh|_{C_0}$ equal to the full symplectic bundle isomorphism of step 2.1, not merely equal on quotient normals. Hence $h^*\omega_1$ and $\omega_0$ agree as full tensors along $C_0$. Their difference is closed and has the fibre-radial relative primitive supplied in [F4]. [F4, step 2.1, construct]

4.1 The interpolation between those two forms is symplectic near $C_0$. Relative Moser therefore gives a correction fixed on $C_0$; composing it with $h$ produces the desired neighbourhood symplectomorphism. The characteristic foliation was derived in step 1.1 rather than assumed as extra data. [F4, step 1.1, step 2.1, step 3.1] ∎

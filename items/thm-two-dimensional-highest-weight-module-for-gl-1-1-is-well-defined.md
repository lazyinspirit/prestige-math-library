---
id: thm-two-dimensional-highest-weight-module-for-gl-1-1-is-well-defined
kind: theorem
title: The two-dimensional gl(1|1) action is well-defined
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-two-dimensional-highest-weight-module-for-gl-1-1
  - def-gl-1-1-bracket-data
  - thm-gl-1-1-is-a-lie-superalgebra
  - def-lie-supermodule
  - def-highest-weight-vector-and-module-for-a-lie-superalgebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §§2.4 and 2.6"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 25–26 and 37–39: module and highest-weight conventions; the gl(1|1) action is checked here."
    - title: "Vera Serganova, Kac–Moody Superalgebras and Integrability, §10"
      url: https://math.berkeley.edu/~serganov/papers/superk.pdf
      locator: "Printed pp. 29–31: highest-weight modules under a chosen triangular decomposition."
---

## Statement

For every $a,b\in\mathbb C$, the action data in [[def-two-dimensional-highest-weight-module-for-gl-1-1]] make $K(a,b)$ a left $\mathfrak{gl}(1|1)$-supermodule. The vector $v$ is a highest-weight vector of weight $(a,b)$, and it generates $K(a,b)$.

## Facts & Assumptions

**Given:** The bracket table and triangular decomposition of $\mathfrak{gl}(1|1)$, and the candidate action on $K(a,b)=\mathbb C v\oplus\mathbb C w$.

[F1] [[def-gl-1-1-bracket-data]]: $h_1,h_2$ are even, $e,f$ odd, with the bracket table displayed in that definition.

[F2] [[thm-gl-1-1-is-a-lie-superalgebra]]: the bracket data define a Lie superalgebra and the selected $\mathfrak h,\mathfrak n^+,\mathfrak n^-$ form a triangular decomposition.

[F3] [[def-two-dimensional-highest-weight-module-for-gl-1-1]]: $K(a,b)$ has basis $v$ even and $w$ odd, the displayed actions, and weight functional $\lambda_{a,b}(c_1h_1+c_2h_2)=c_1a+c_2b$.

[F4] [[def-lie-supermodule]]: a module action must preserve parity and satisfy $[x,y]u=x(yu)-(-1)^{|x||y|}y(xu)$ for homogeneous $x,y$.

[F5] [[def-highest-weight-vector-and-module-for-a-lie-superalgebra]]: a highest-weight vector is a nonzero homogeneous vector that is an $\mathfrak h$-weight vector and is annihilated by $\mathfrak n^+$.

## Proof




1.1 The actions of $h_1,h_2$ preserve the parity of $v,w$, and the actions of $e,f$ reverse it. Thus the candidate action has the parity required in [F4]. [given, F3, F4, algebra]


2.1 The operators $h_1,h_2$ are diagonal in the basis $v,w$, so they commute, matching $[h_1,h_2]=0$. On $v$, both the bracket actions $[h_i,e]v$ and the operator commutators $(h_i e-e h_i)v$ vanish for $i=1,2$, since $[h_i,e]$ is a multiple of $e$, $ev=0$, and each $h_i v$ is a scalar multiple of $v$. On $w$, the commutators $h_1e-eh_1$ and $h_2e-eh_2$ give $(a-(a-1))(a+b)v=(a+b)v=[h_1,e]w$ and $(b-(b+1))(a+b)v=-(a+b)v=[h_2,e]w$. Likewise, $h_1f-fh_1$ and $h_2f-fh_2$ on $v$ give $((a-1)-a)w=-w=[h_1,f]v$ and $((b+1)-b)w=w=[h_2,f]v$, and both bracket actions and commutators vanish on $w$. Hence all even–odd bracket relations in [F1] hold. [F1, F3, step 1.1, algebra]


2.2 Since $e^2=f^2=0$ on both basis vectors, the odd self-brackets act as zero. The anticommutator $ef+fe$ sends $v$ to $(a+b)v$ and $w$ to $(a+b)w$; this equals the action of $h_1+h_2$ on both vectors. Therefore the odd–odd relations in [F1] hold. [F1, F3, step 1.1, algebra]


3.1 By bilinearity, the checked basis-pair identities imply the module identity in [F4] for every homogeneous pair. For $h=c_1h_1+c_2h_2$, its action on $v$ is $(c_1a+c_2b)v=\lambda_{a,b}(h)v$ by [F1] and [F3]. The vector $v$ is nonzero and even, is killed by $e$, and $e$ spans $\mathfrak n^+$ by [F2]; hence [F5] makes it a highest-weight vector. Since $fv=w$, it generates both basis vectors. [F1, F2, F3, F4, F5, step 2.1, step 2.2] ∎

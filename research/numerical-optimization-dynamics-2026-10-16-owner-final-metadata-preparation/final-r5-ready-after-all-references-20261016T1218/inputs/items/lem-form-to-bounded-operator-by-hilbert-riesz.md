---
id: "lem-form-to-bounded-operator-by-hilbert-riesz"
kind: "lemma"
title: "A bounded form is represented by a unique bounded operator"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 1
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-bounded-linear-operator"
  - "def-countable-choice"
  - "def-hilbert-space"
  - "def-hilbert-space-adjoint"
  - "def-operator-norm"
  - "def-real-and-complex-inner-product-space"
  - "thm-cauchy-schwarz-in-an-inner-product-space"
  - "thm-hilbert-adjoint-properties"
  - "thm-riesz-representation-for-hilbert-space"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, first paragraph of the proof of Theorem 4.12: $a(v,u)=\\langle v,Au\\rangle$ by Riesz representation, printed p. 99"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the construction of $T$ from the Lax–Milgram Lemma by the Riesz representation theorem, printed p. 71"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, the operator $A$ with $a(u,v)=(Au,v)$ in the proof of Theorem 5.6, printed p. 139"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]), used through [[thm-riesz-representation-for-hilbert-space]]. Let $H$ be a real or complex Hilbert space and let $a$ be a bounded sesquilinear form on $H$ with bound $M$ in the sense of [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]. Then there is a unique bounded linear operator $A\in\mathcal B(H)$ with $$a(u,v)=(Au,v)\qquad\text{for all }u,v\in H,$$ and $\|A\|\le M$; if $M$ is the least bound of $a$ then $\|A\|=M$. The map $a\mapsto A$ is linear, and $a$ is coercive with constant $\alpha$ if and only if $\operatorname{Re}(Au,u)\ge\alpha\|u\|^2$ for all $u$. For the adjoint form one has $a^*(u,v)=(A^*u,v)$, where $A^*$ is the Hilbert adjoint of [[def-hilbert-space-adjoint]].

## Facts & Assumptions

**Given:** Countable Choice; a real or complex Hilbert space $H$ with inner product $(\cdot,\cdot)$ linear in the first argument and conjugate-linear in the second; a sesquilinear form $a$ on $H$, linear in the first argument and conjugate-linear in the second, with bound $M\ge0$.

[F1] Bounded and sesquilinear: $a(u,\lambda v)=\overline\lambda\,a(u,v)$, $a(\lambda u,v)=\lambda\,a(u,v)$, $a(u+u',v)=a(u,v)+a(u',v)$, and $|a(u,v)|\le M\|u\|\,\|v\|$ for all $u,v\in H$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] Inner-product facts: $(v,w)=\overline{(w,v)}$, positive definiteness (so a vector orthogonal to all of $H$ is $0$), and Cauchy--Schwarz $|(u,v)|\le\|u\|\,\|v\|$; the inner product is linear in the first slot and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-hilbert-space]]).

[F3] Riesz representation under Countable Choice: every bounded linear functional $f$ on $H$ has a unique $y\in H$ with $f(x)=(x,y)$ for all $x$, and $\|f\|=\|y\|$ ([[thm-riesz-representation-for-hilbert-space]], [[def-countable-choice]], [[def-operator-norm]]).

[F4] Bounded operators and the operator norm: $T$ is bounded when some $C\ge0$ has $\|Tx\|\le C\|x\|$, and $\|T\|=\sup_{\|x\|\le1}\|Tx\|$ is its least bound ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[F5] Hilbert adjoint: there is a unique $A^*\in\mathcal B(H)$ with $(Au,v)=(u,A^*v)$ for all $u,v\in H$ ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).



## Proof

1.1 For fixed $u\in H$ the map $f_u(v):=\overline{a(u,v)}$ is linear in $v$ and bounded: $f_u(\lambda v)=\overline{a(u,\lambda v)}=\overline{\overline\lambda a(u,v)}=\lambda f_u(v)$ and, more generally, conjugate-linearity of $a$ in the second slot makes $f_u$ additive, while $|f_u(v)|=|a(u,v)|\le M\|u\|\,\|v\|$ shows that $\|f_u\|\le M\|u\|$. [F1, F2]

2.1 Riesz representation defines $A$: by [F3] there is a unique $Au\in H$ with $f_u(v)=(v,Au)$ for every $v$, that is $\overline{a(u,v)}=(v,Au)$, and $\|Au\|=\|f_u\|\le M\|u\|$. Conjugating the representing identity with the conjugate symmetry of the inner product gives $a(u,v)=\overline{(v,Au)}=(Au,v)$ for all $v$; so every $u$ is assigned a unique vector $Au$ with $a(u,v)=(Au,v)$ for all $u,v$, and in particular $\|Au\|\le M\|u\|$. [F2, F3, step 1.1]

3.1 $A$ is linear: for scalars $s,t$ and $u,w\in H$, first-slot linearity of $a$ gives $a(su+tw,v)=s\,a(u,v)+t\,a(w,v)$ for every $v$, hence $(A(su+tw),v)=s(Au,v)+t(Aw,v)=(sAu+tAw,v)$ by linearity of the inner product in its first slot, and positive definiteness forces $A(su+tw)=sAu+tAw$. Therefore $A$ is linear and, by step 2.1, bounded with $\|A\|\le M$. [F1, F2, F4, step 2.1]

3.2 $A$ is unique: if $B\in\mathcal B(H)$ also satisfies $a(u,v)=(Bu,v)$ for all $u,v$, then $(Au-Bu,v)=0$ for every $v$, and positive definiteness gives $Au=Bu$ for every $u$, that is $A=B$. The assignment $a\mapsto A$ is linear: for forms $a,b$ with operators $A,B$ and a scalar $c$, $(A_{a+cb}u,v)=(a+cb)(u,v)=(Au,v)+c(Bu,v)=((A+cB)u,v)$ for all $v$, so $A_{a+cb}=A+cB$ by the same uniqueness argument. [F2, step 2.1]

4.1 Least bound and coercivity: if $M$ is the least bound of $a$, then for all $u,v\in H$ one has $|a(u,v)|=|(Au,v)|\le\|Au\|\,\|v\|\le\|A\|\,\|u\|\,\|v\|$, so $\|A\|$ is itself a bound of $a$ and $M\le\|A\|$; with step 3.1 this gives $\|A\|=M$. Also, substituting $v=u$ in $a(u,v)=(Au,v)$ gives $a$ coercive with constant $\alpha>0$ if and only if $\operatorname{Re}(Au,u)\ge\alpha\|u\|^2$ for every $u$. [F1, F2, F4, step 3.1, algebra]

5.1 Adjoint form: for all $u,v\in H$, $a^*(u,v)=\overline{a(v,u)}=\overline{(Av,u)}=(u,Av)=(A^*u,v)$ by conjugate symmetry of the inner product and the defining identity $(Av,u)=(v,A^*u)$ of the Hilbert adjoint; hence the adjoint form is represented by $A^*$. [F2, F5] ∎ 
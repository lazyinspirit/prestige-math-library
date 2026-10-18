---
id: thm-na-babuska-brezzi-kernel-coercivity
kind: theorem
title: "Babuska-Brezzi solvability by kernel coercivity and inf-sup"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    "thm-na-infsup-bounded-right-inverse-hilbert",
    "thm-lax-milgram",
    "thm-riesz-representation-for-hilbert-space",
    "def-countable-choice"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and
        inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and
        8.7.1."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $V,Q$ be real Hilbert spaces, and let $a:V\times V\to\mathbb R$ and $b:V\times Q\to\mathbb R$ be bounded bilinear forms. If $Q=\{0\}$, the theorem reduces to Lax–Milgram on $V$ with $Z=V$ and $p=0$. Otherwise, if $Q\ne\{0\}$, assume $V\ne\{0\}$. Define $B:V\to Q$ by $(Bv,q)_Q=b(v,q)$ and set $\beta:=\inf_{q\ne0}\sup_{v\ne0}b(v,q)/(\|v\|_V\|q\|_Q)>0$. Suppose $Z:=\ker B$ is closed and $a(z,z)\ge\alpha\|z\|_V^2$ on $Z$, with $\alpha>0$. For every $F\in V'$ and $G\in Q'$, there is a unique $(u,p)\in V\times Q$ satisfying
$$a(u,v)+b(v,p)=F(v),\qquad b(u,q)=G(q),$$
for all $v\in V,q\in Q$. If $M_a=\|a\|$, then one stability bound is
$$\|u\|_V\le\beta^{-1}\|G\|+\alpha^{-1}(\|F\|+M_a\beta^{-1}\|G\|),\qquad \|p\|_Q\le\beta^{-1}(\|F\|+M_a\|u\|_V).$$

## Facts & Assumptions

**Given:** Countable Choice, real Hilbert spaces, bounded $a,b$, $\beta>0$, and coercivity of $a$ on $Z$.

[A1] Countable Choice is required by the Lax–Milgram step on the closed constraint kernel. ([[def-countable-choice]])

[F1] The inf-sup bound yields a bounded linear right inverse $R:Q\to V$ with $BR=I$ and $\|R\|\le\beta^{-1}$. ([[thm-na-infsup-bounded-right-inverse-hilbert]])

[F2] Lax–Milgram gives a unique solution on the Hilbert subspace $Z$ for a bounded coercive form, and its norm is controlled by the right-hand side divided by $\alpha$. ([[thm-lax-milgram]], [[def-countable-choice]])

[F3] Riesz representation identifies bounded functionals on $V$ and $Q$ with inner products against unique vectors. ([[thm-riesz-representation-for-hilbert-space]])

## Proof

1.1 If $Q=\{0\}$, then $G=0$, $Z=V$, and Lax–Milgram on $V$ gives the unique solution $(u,0)$ with $\|u\|\le\alpha^{-1}\|F\|$; so suppose $Q\ne\{0\}$. By [F3], write $G(q)=(g,q)_Q$ for a unique $g\in Q$ with $\|g\|=\|G\|$. Let $u_g=Rg$ using [F1]. Then $Bu_g=g$, $\|u_g\|\le\beta^{-1}\|G\|$, and the constraint equation will hold for $u=u_g+z$ with any $z\in Z$. [A1, F1, F3]

2.1 On the closed Hilbert subspace $Z$, solve $a(z,w)=F(w)-a(u_g,w)$ for all $w\in Z$ by [F2]. The restricted form is bounded and coercive by hypothesis, and the functional norm is at most $\|F\|+M_a\|u_g\|$. Therefore $\|z\|\le\alpha^{-1}(\|F\|+M_a\beta^{-1}\|G\|)$ and $u=u_g+z$ has the stated bound. The equation $a(u,w)=F(w)$ holds for every $w\in Z$. [A1, F2, step 1.1]

3.1 Define $\ell(v)=F(v)-a(u,v)$. It vanishes on $Z$ by step 2.1. Set $\Lambda(q)=\ell(Rq)$. This is bounded by $\|R\|\|\ell\|\|q\|$, and for every $v$, $v-RBv\in Z$, so $\ell(v)=\ell(RBv)=\Lambda(Bv)$. [A1, F1, given, step 1.1, step 2.1]

4.1 By [F3], there is a unique $p\in Q$ with $\Lambda(q)=(q,p)_Q$. Hence $\ell(v)=(Bv,p)_Q=b(v,p)$, giving the first mixed equation; step 1.1 gives the second. Also $\|p\|\le\beta^{-1}\|\ell\|\le\beta^{-1}(\|F\|+M_a\|u\|)$. [A1, F1, F3, step 3.1, step 1.1]

5.1 For uniqueness, subtract two solutions. Their velocity difference $w$ lies in $Z$; testing the first difference equation with $w$ gives $a(w,w)=0$, so coercivity gives $w=0$. The pressure difference then pairs to zero with every $Bv$; since [F1] makes $B$ onto, it pairs to zero with all $Q$, hence is zero. [A1, F1, given, F3] ∎

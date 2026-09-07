---
id: lem-margulis-diamond-weight-bound
kind: lemma
title: "Margulis diamond weight bound"
status: draft
origin: pipeline
deps: [lem-fourier-analysis-of-margulis-adjacency]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §8.2 Proposition8.9 and complete weaker-bound proof, pp72–73."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

For every integer $m\ge1$ and every nonnegative function $g$ on $(\mathbb Z/m\mathbb Z)^2$ with $g(0)=0$, the quadratic expression $Q$ in the Fourier reduction satisfies
$$Q(g)\le\frac{73}{20}\sum_z g(z)^2.$$
Consequently, for the forward/full adjacency operators and normalized transform in that reduction, $|\langle f,Af\rangle|\le(73/10)\|f\|^2$ for real mean-zero $f$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $T_1(x,y)=(x+2y,y)$, $T_2(x,y)=(x,y+2x)$ modulo $m$. Define the forward operator $Kf(x)=f(T_1x)+f(T_1x+e_1)+f(T_2x)+f(T_2x+e_2)$. For real mean-zero $f$, put $g=|\widehat f|$ and $$Q(g)=\sum_z2g(z)\bigl[g(T_2^{-1}z)|\cos(\pi z_1/m)|+g(T_1^{-1}z)|\cos(\pi z_2/m)|\bigr].$$ Then $g(0)=0$, $\|f\|^2=\sum_z g(z)^2$, $|\langle f,Kf\rangle|\le Q(g)$, and the full Margulis adjacency $A$ satisfies $|\langle f,Af\rangle|\le2Q(g)$. ([[lem-fourier-analysis-of-margulis-adjacency]]).


## Proof

1.1 Represent each coordinate in $[-m/2,m/2)$. Define $z\succ u$ when both absolute coordinates of $z$ are at least those of $u$, with one strict. Put $w(z,u)=5/4$ if $z\succ u$, $4/5$ if $u\succ z$, and $1$ otherwise; then $w(z,u)w(u,z)=1$. Squaring $\sqrt{w}a-b/\sqrt{w}$ gives $2ab\le wa^2+w^{-1}b^2$. Apply this to each term of $Q$ and reindex the inverse-shear terms; a shear leaves its corresponding cosine coordinate fixed. The coefficient at $g(z)^2$ is bounded by $c_1(z)[w(z,T_2z)+w(z,T_2^{-1}z)]+c_2(z)[w(z,T_1z)+w(z,T_1^{-1}z)]$, where $c_j(z)=|\cos(\pi z_j/m)|$. [F1, algebra]

2.1 Outside the open diamond $|z_1|+|z_2|<m/2$, let $a=\pi|z_1|/m$ and $b=\pi|z_2|/m$. They lie in $[0,\pi/2]$ with $a+b\ge\pi/2$, so $\cos a+\cos b\le\cos a+\sin a\le\sqrt2$. Each weight is at most $5/4$, giving coefficient at most $5\sqrt2/2<73/20$. This includes the diamond boundary and the centered-coordinate endpoints. [step 1.1, algebra]

2.2 Inside the diamond and away from zero, sign changes and coordinate interchange permute the four shear neighbors and preserve their absolute-coordinate order. First suppose the absolute coordinates are $a>b>0$ with $a+b<m/2$. The change $a\mapsto a-2b$ strictly decreases its absolute value. For $a+2b$, the centered absolute value is $\min(a+2b,m-a-2b)>a$, since $m>2a+2b$. For $b+2a$, both $b+2a$ and $m-b-2a$ exceed $b$ by the same strict inequality. For $b-2a$, both $2a-b$ and $m-2a+b$ exceed $b$, the latter since $2a<m$. Thus exactly three neighbors dominate and one is dominated, including when a coordinate wraps. The coefficient is at most $3(4/5)+5/4=73/20$. [step 1.1, algebra]

2.3 If $a=b>0$, then $a<m/4$. Two neighbors preserve the pair of absolute coordinates, and the other two replace one coordinate by $|3a\bmod m|>a$, because both $3a$ and $m-3a$ exceed $a$. If $a>0,b=0$, two neighbors fix the point and two change the zero coordinate to a nonzero centered residue of $2a$, since $0<2a<m$. In either case there are two weights $1$ and two weights $4/5$, giving at most $18/5<73/20$. The zero point contributes nothing because $g(0)=0$; this also handles $m=1$. [step 1.1, algebra]

3.1 Every point is covered by the preceding cases. Summing the coefficient bounds proves the claim for $Q$. The Fourier reduction gives $|\langle f,Af\rangle|\le2Q(|\widehat f|)$ and Parseval gives $\sum|\widehat f|^2=\|f\|^2$, proving the stated consequence. [F1, step 2.1, step 2.2, step 2.3] ∎

---
id: ex-q8-as-a-central-extension-of-c2-times-c2
kind: example
title: "The quaternion group as a cocycle central extension of C2 x C2"
status: draft
origin: pipeline
deps: ["lem-cocycle-central-extension-is-a-group", "lem-central-extension-linearizes-a-projective-representation", "def-quaternion-group-of-order-eight", "lem-factor-set-is-a-normalized-two-cocycle", "def-projective-representation-and-factor-set"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Proposition 1.11 and Theorem 1.12, printed pp. 4–5"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §4.2, printed pp. 54–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: direct
---

## Example

Let $Q=C_2\times C_2=\{1,x,y,xy\}$ with $x^2=y^2=1$ and $xy=yx$. The group
$Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ of
[[def-quaternion-group-of-order-eight]] satisfies
$Q_8/Z(Q_8)\cong Q$ with $Z(Q_8)=\{\pm1\}$, so $Q_8/\{\pm1\}\cong C_2\times C_2$.
Its faithful two-dimensional complex representation restricts to a projective
representation of $Q$ whose factor set $\alpha$ is nontrivial: the lifts of the
two generators anticommute, $\alpha(y,x)=-1\ne1=\alpha(x,y)$. The subgroup of
the cocycle central extension $E_\alpha$ formed by the elements with
second coordinate $\pm1$ is isomorphic to $Q_8$.

## Facts & Assumptions

**Given:** The group $Q=C_2\times C_2=\{1,x,y,xy\}$ with $x^2=y^2=1$, $xy=yx$, and the matrices $I=\operatorname{diag}(i,-i)$, $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $K=IJ$ in $\operatorname{GL}_2(\mathbb C)$.

[F1] $Q_8=\{1,-1,i,-i,j,-j,k,-k\}\subseteq\mathbb H^\times$ has $i^2=j^2=k^2=-1$, $ij=k$, $ji=-k$ and $k=ij$, and $-1$ is central. ([[def-quaternion-group-of-order-eight]]).

[F2] For a normalized two-cocycle $\alpha$ on $Q$ the set $E_\alpha=Q\times\mathbb C^\times$ with $(q,z)(r,w)=(qr,\alpha(q,r)zw)$ is a group in which $\{1\}\times\mathbb C^\times$ is central with quotient $\cong Q$. ([[lem-cocycle-central-extension-is-a-group]]).

[F3] Projective $Q$-representations with factor set $\alpha$ correspond to representations $D$ of $E_\alpha$ with $D(1,z)=z\operatorname{id}$, by $D(q,z)=zP(q)$ and $P(q)=D(q,1)$. ([[lem-central-extension-linearizes-a-projective-representation]]).

[F4] The factor set of a normalized projective representation satisfies $\alpha(1,q)=\alpha(q,1)=1$ and the two-cocycle identity. ([[lem-factor-set-is-a-normalized-two-cocycle]], [[def-projective-representation-and-factor-set]]).

[A1] For an abelian group $Q$, every two-coboundary $\delta c(q,r)=c(q)c(r)c(qr)^{-1}$ is symmetric in $q,r$, since $qr=rq$.



## Verification

**Proof technique:** direct.

1.1 Direct computation gives $I^2=J^2=-1_2$, $IJ=K=\begin{pmatrix}0&i\\i&0\end{pmatrix}$, $JI=-K$ and $K^2=-1_2$, so the eight matrices $\pm1_2,\pm I,\pm J,\pm K$ are distinct and form a subgroup $M\le\operatorname{GL}_2(\mathbb C)$. Listing them, $1_2,I,J,K$ have second columns $(0,1),(0,-i),(1,0),(i,0)$ up to sign, so no two of the eight coincide; the assignment $i\mapsto I$, $j\mapsto J$, $k\mapsto K$, $-1\mapsto-1_2$ preserves the relations of [F1], so $M\cong Q_8$ with centre $\{\pm1_2\}$ and quotient $M/\{\pm1_2\}\cong Q$ via $I\mapsto x$, $J\mapsto y$. [F1, given, algebra]

2.1 Define $P:Q\to\operatorname{GL}_2(\mathbb C)$ by $P(x^ay^b):=I^aJ^b$ for $a,b\in\{0,1\}$; this is well defined because every element of $Q$ is uniquely $x^ay^b$. Step 1.1 further gives $IK=I(IJ)=I^2J=-J$, $KI=J$, $JK=I$ and $KJ=-I$. Hence, using $P(xy)=K$, the products on basis elements are $P(x)^2=I^2=-1_2$, $P(y)^2=J^2=-1_2$, $P(xy)^2=K^2=-1_2$, $P(x)P(y)=IJ=K=P(xy)$, $P(y)P(x)=JI=-K=-P(xy)$, $P(x)P(xy)=IK=-J=-P(y)$, $P(y)P(xy)=JK=I=P(x)$, $P(xy)P(x)=KI=J=P(y)$, $P(xy)P(y)=KJ=-I=-P(x)$, and $P(1)P(q)=P(q)=P(q)P(1)$. Comparing with $qr$ in $Q$ shows $P(q)P(r)=\alpha(q,r)P(qr)$ for all $q,r\in Q$, where $\alpha(1,q)=\alpha(q,1)=1$, $\alpha(x,x)=\alpha(y,y)=\alpha(xy,xy)=\alpha(y,x)=\alpha(xy,y)=\alpha(x,xy)=-1$ and $\alpha(x,y)=\alpha(y,xy)=\alpha(xy,x)=1$. [step 1.1, F1, given, algebra]

3.1 The function $\alpha$ is a normalized two-cocycle: comparing $(P(q)P(r))P(s)=\alpha(q,r)\alpha(qr,s)P(qrs)$ with $P(q)(P(r)P(s))=\alpha(r,s)\alpha(q,rs)P(qrs)$ using step 2.1 and cancelling the invertible matrix $P(qrs)$ gives $\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$ for all $q,r,s\in Q$, and $\alpha(1,q)=\alpha(q,1)=1$ holds by definition, matching [F4]. [F4, step 2.1, algebra]

4.1 The cocycle central extension $E_\alpha$ of [F2] contains the eight elements $Q\times\{\pm1\}=\{(q,z):q\in Q,\ z=\pm1\}$; the map $\varphi(q,z):=s(q)z$ with $s(1)=1_2$, $s(x)=I$, $s(y)=J$, $s(xy)=K$ satisfies $\varphi\bigl((q,z)(r,w)\bigr)=s(qr)\alpha(q,r)zw=s(q)s(r)zw=\varphi(q,z)\varphi(r,w)$, because $P(q)P(r)=\alpha(q,r)P(qr)$ by step 2.1; it is injective on the eight elements and its image is $M$, so $Q\times\{\pm1\}\cong M\cong Q_8$. Also $P$ is faithful, since $P(q)=1_2$ forces $q=1$ by the distinctness of the eight matrices in step 1.1. [F2, step 1.1, step 2.1, step 3.1]

5.1 The factor set $\alpha$ is not a coboundary, so its class in $H^2(Q,\mathbb C^\times)$ is nonzero: if $\alpha=\delta c$ for some $c:Q\to\mathbb C^\times$, then [A1] would give $\alpha(y,x)=c(y)c(x)c(yx)^{-1}=c(x)c(y)c(xy)^{-1}=\alpha(x,y)$, contradicting $\alpha(y,x)=-1\ne1=\alpha(x,y)$ from step 2.1. Consequently the lifts of the two generators anticommute, $P(y)P(x)=-P(x)P(y)$, the representation $P$ of step 2.1 is a faithful projective representation of $C_2\times C_2$ with nontrivial factor set, and it corresponds by [F3] to the representation $D(q,z)=zP(q)$ of $E_\alpha$ whose restriction to $Q\times\{\pm1\}\cong Q_8$ is the faithful two-dimensional representation of $Q_8$. [A1, F3, step 2.1, step 4.1]

6.1 The example is complete: $Q_8/\{\pm1\}\cong C_2\times C_2$ by step 1.1, the faithful two-dimensional representation of $Q_8$ restricts on $Q\times\{\pm1\}\cong Q_8$ to the projective representation $P$ of step 2.1 whose factor set has $\alpha(y,x)=-1\ne1=\alpha(x,y)$ and is therefore not a coboundary by step 5.1, and the $\pm1$-valued subgroup $Q\times\{\pm1\}$ of the cocycle central extension $E_\alpha$ is isomorphic to $Q_8$ by step 4.1. [step 1.1, step 2.1, step 4.1, step 5.1] ∎

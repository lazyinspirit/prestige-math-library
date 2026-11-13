---
id: lem-author-2e2d9953c21a-regular-numerical-replay
kind: lemma
title: Exact rational replay of the regular amplification constants
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-2e2d9953c21a-sine-enclosures
  - lem-author-2e2d9953c21a-inverse-brackets
  - lem-author-2e2d9953c21a-logarithm-and-pi
  - lem-author-2e2d9953c21a-geometric-tail
dependency_roles:
  lem-author-2e2d9953c21a-sine-enclosures: mathematical-premise
  lem-author-2e2d9953c21a-inverse-brackets: mathematical-premise
  lem-author-2e2d9953c21a-logarithm-and-pi: mathematical-premise
  lem-author-2e2d9953c21a-geometric-tail: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

All decimals below are exact rationals. Set $\alpha=0.0816$, $a=2.4093$, $q=2.1274$, $h=3.168$, $t=3.326$, $u=\arcsin(0.3272)$, $c_i=a^i$ for $0\le i\le3$, and $c_{3+k}=a^3q^k$ for $k\ge0$. Set $\beta_i=\pi/2-iu$ for $0\le i\le3$, and $\beta_{i+1}=\beta_i-\arcsin(h/c_i)$ for $i\ge3$. The displayed lower bounds for $(\beta_1,\ldots,\beta_5)$ are $(1.237,0.904,0.570,0.342,0.235)$ and those for $(c_1,\ldots,c_5)$ are $(2.409,5.804,13.985,29.752,63.295)$. Every later angle exceeds $0.1356$, hence exceeds $0.132$ and $0.131$. In particular,

$$0.570-\arcsin(3.168/13.985)-\arcsin(3.168/(13.985\cdot2.1274))-\frac{3.326}{63.295(1-1/2.1274)}>0.1356.$$

The scalar parameter inequalities are $2(1+0.38)\alpha/(1-\alpha-0.23)<0.3272$, $1+0.23/(2\alpha)>a$, $0.38\alpha>0.031$, $2(1+2\alpha)/(1-\alpha-0.184)<h$, and $1+0.184/(2\alpha)>q$. The cap comparisons are $0.031\sin^2(0.570)>5\alpha^2/4$ and $\sin^2(0.131)>5\alpha^2/2$. Moreover, $4(600-1)/600^2<0.0816^2$. For $z=0.0068$ and for $z=0.006830635$, one has $32z(1+7z)\log((1+2z)/(2z))<(1-z)^2$; also $0.0068^2<4(85730-1)/85730^2<0.006830635^2$.

## Facts & Assumptions

**Given:** The exact rational constants and recurrences in the Statement. These are scalar inequalities; no graph or stability conclusion is assumed.

[F1] [[lem-author-2e2d9953c21a-sine-enclosures]] gives rational sine enclosures. [[lem-author-2e2d9953c21a-inverse-brackets]] turns endpoint sine comparisons into principal inverse-sine brackets.

[F2] [[lem-author-2e2d9953c21a-logarithm-and-pi]] supplies logarithm and $\pi$ enclosures.

[F3] [[lem-author-2e2d9953c21a-geometric-tail]] bounds the entire remaining geometric inverse-sine tail.

## Proof

**Given:** The exact rational constants and recurrences in the Statement. These are scalar inequalities; no graph or stability conclusion is assumed.

**Goal:** Verify the stated numerical inequalities using the cited enclosures.

1.1 All interval endpoints below are exact rational numbers. If $s\in[l,u]$ and $r\in[v,w]$, adding endpoint inequalities gives $l+v\le s+r\le u+w$ and subtracting gives $l-w\le s-r\le u-v$. For an exact rational scalar $\lambda\ge0$, multiplication gives $\lambda l\le\lambda s\le\lambda u$; for $\lambda<0$, it gives $\lambda u\le\lambda s\le\lambda l$. If $0\le l\le s\le u$, then $l^2\le s^2\le u^2$, since $s^2-l^2=(s-l)(s+l)\ge0$ and $u^2-s^2=(u-s)(u+s)\ge0$. Induction on the finite number of these operations preserves containment, even when an intermediate value is reused. These are all the operations on uncertain quantities used below; divisions in the finite sums, error bounds and scalar constants are exact rational divisions with positive denominators. All resulting rational endpoint comparisons can therefore be checked by clearing positive denominators. [given, algebra, induction]

1.2 Exact multiplication gives $c_3=13.985327532357$, $c_4=29.7523857923362818$ and $c_5=63.29522553461620590132$; $c_1=2.4093$ and $c_2=5.80472649$. Each exceeds its stated lower bound. In particular $c_4\ge13.985q$ and $c_5\ge63.295$. Do not reset this recurrence at a rounded displayed entry: $13.985q=29.751689<29.752$ and $13.985q^2=63.2937431786<63.295$. The parameter inequalities in the Statement follow by clearing positive rational denominators; both $1-\alpha-0.23$ and $1-\alpha-0.184$ are positive, and $0.031<0.38\alpha<1/2$. [given, algebra]

2.1 Use $N=12$ in [F1] and [F2]. For inverse sines choose adjacent endpoints on the grid $10^{-12}\mathbb Z$, both in $[0,1]$, whose upper sine enclosure at the lower endpoint is below the input and whose lower sine enclosure at the upper endpoint is above it. All following endpoint inequalities are finite rational comparisons using the displayed formulas, so multiplication by their positive factorial and power denominators verifies them exactly. They give $3.141592653589<\pi<3.141592653590$, $0.228511966349<\arcsin(h/13.985)<0.228511966350$ and $0.106683602516<\arcsin(h/(13.985q))<0.106683602517$. For the recurrence, the same procedure gives $\beta_1\in[1.237457381343,1.237457381345]$, $\beta_2\in[0.904118435892,0.904118435895]$, $\beta_3\in[0.570779490441,0.570779490445]$, $\beta_4\in[0.342272970911,0.342272970916]$, and $\beta_5\in[0.235591876415,0.235591876421]$. Thus all five angular lower bounds hold. [given, F1, F2, step 1.1, algebra]

2.2 The sine bounds [F1] at $0.570$ and $0.131$ give $\sin^2(0.570)\in[0.291202748020,0.291202748021]$ and $\sin^2(0.131)\in[0.017063057702,0.017063057703]$. Comparing their lower endpoints to $5\alpha^2/4=0.0083232$ after multiplication by $0.031$, and to $5\alpha^2/2=0.0166464$, proves both cap comparisons. Clearing the positive denominator $600^2$ proves the degree-600 inequality. For integers $d\ge600$, $(d-1)/d^2$ decreases: its difference between successive integers has numerator $d^2-d-1>0$. Thus the same degree bound holds for all such $d$. [F1, step 1.1, algebra]

3.1 Monotonicity of inverse sine, step 1.2 and [F3] show that all angles from $\beta_5$ onward are bounded below by the displayed two-inverse-sine expression minus the infinite tail. Here $t/(63.295(1-1/q))=35378662/356793915$. Substitution of the upper inverse-sine bounds from step 2.1 gives an exact rational lower endpoint greater than $0.135647297245$; using the lower bounds gives an upper endpoint less than $0.135647297248$. The expression therefore exceeds $0.1356>0.132>0.131$. Earlier angles exceed $0.235$, so the same $0.1356$ lower bound applies to them as well. This bounds an infinite recurrence through a proved remainder, rather than a finite sample. [F1, F3, step 1.1, step 2.1, step 1.2, algebra]

4.1 For $z=0.0068$, [F2] with $N=12$ bounds the required logarithm by $[4.311193836264,4.311193836265]$. For $z=0.006830635$, it gives $[4.306759253085,4.306759253086]$. Substitute each upper endpoint in $32z(1+7z)\log((1+2z)/(2z))$ and clear positive denominators to obtain the two strict inequalities. Exact rational comparison gives $0.0068^2<4\cdot85729/85730^2<0.006830635^2$. The same decreasing-degree calculation as in step 2.2 extends the latter upper bound to every integer $d\ge85730$. This verifies that degree bound directly at the larger spectral parameter; it does not infer it from $0.0068$ alone. [F2, step 1.1, step 2.2, algebra] ∎

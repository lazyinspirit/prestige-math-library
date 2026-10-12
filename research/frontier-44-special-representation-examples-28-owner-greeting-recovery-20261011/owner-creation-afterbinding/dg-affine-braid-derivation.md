# Current independent check of the retained rational braid

Reviewer: /root/owner_creation_afterbinding. Run: frontier-44-special-representation-examples-28. This derivation supplements the complete FIRST1 proposal; no symbolic-computation test or source full-article reading is claimed.

Put a=(u-v)^-1, b=(v-w)^-1, c=(u-w)^-1, s=sigma1, t=sigma2. The actual operator is T1=(1-a)s-a, T2=(1-b)t-b. In the skew multiplication rule (f sigma)(g eta)=f sigma(g) sigma eta, s(a)=-a, t(b)=-b, s(b)=c, t(a)=c, s(c)=b and t(c)=a. Also ab=c(a+b), a(b-c)=bc and b(a-c)=ac, by clearing the three independent pair differences.

The coefficients of T1 T2 T1 in permutation order (1,s,t,st,ts,sts) are:

- -(1-a^2)c-a^2 b;
- a(1-a)(b-c)=(1-a)bc;
- ac(1-b);
- -(1-a)(1-c)b;
- -a(1-b)(1-c);
- (1-a)(1-c)(1-b).

The coefficients of T2 T1 T2 are obtained by interchanging a,b and s,t. The two longest and length-two terms agree directly. The length-one terms agree by the two identities above. The difference of the identity terms is c(a^2-b^2)-a^2b+ab^2=(a-b)(c(a+b)-ab)=0. This checks all six terms without commuting an untransported coefficient through a permutation. Distant commuting generators have disjoint variables. The square uses (1-a)(1+a)+a^2=1 and zero crossing coefficient; the mixed relations use the diagonal coefficient -a. Thus the retained rational representation genuinely satisfies all affine relations.

The nonzero coefficient of a reduced word is the product of each (1-a_i) transported by its preceding permutation prefix. Distinct group permutations are independent as operators by the corrected inverse-index monomial argument. Consequently the entire ordered affine PBW proof survives the corrections, before any cyclotomic quotient.

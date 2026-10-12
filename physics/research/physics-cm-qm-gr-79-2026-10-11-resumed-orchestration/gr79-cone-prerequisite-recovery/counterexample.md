# Exact counterexample to the old relatively compact temporal claim

Use Minkowski spacetime R^4 with g=-dt^2+dx^2+dy^2+dz^2 and future orientation N=partial_t. Define the global smooth coordinates

z0=t-F(x), z1=x, z2=y, z3=z, with F(x)=x-x^3/3.

Their inverse is t=z0+F(z1), x=z1, y=z2, z=z3. Let U0 be the inverse image of the coordinate rectangle (-1,1) times (0,1/2) times (-1,1) times (-1,1). Its closure is compact and lies inside this global chart. At every point of U0,

- grad z0=-partial_t-(1-x^2)partial_x is past directed;
- g(grad z0,grad z0)=-1+(1-x^2)^2=-2x^2+x^4<0.

Thus the old hypotheses hold throughout U0. The fixed future null vector v=partial_t+partial_x has coordinate components

v0=dz0(v)=1-F'(x)=x^2, v1=1, v2=v3=0.

Consequently |v1|/v0=x^(-2), which tends to infinity as x decreases to0. For the Euclidean-coordinate normalization requested in the old Statement, replace v by v/sqrt(1+x^4); the ratio is unchanged. Hence the claimed supremum is infinite.

The exact rational sequence x_n=2^(-n), n>=2, lies in U0 (take all other coordinate components zero) and gives ratio 4^n. `counterexample-values.json` records exact rational values of the gradient norm and ratio for n=2 through10, computed with Python's Fraction arithmetic. The divergence is the displayed analytic formula, not an inference from those finitely many values.

At the boundary x=0, grad z0 becomes null. The repaired compact-temporal Statement excludes this precise degeneration by requiring the compact base set, or the entire closure of the region, to stay in the past-timelike locus.
